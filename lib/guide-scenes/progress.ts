import { guideSceneRegistry as registry } from './registry';
import type { ProgressStorage, SceneProgress } from './types';

export const PROGRESS_KEY = 'eaiu:guide-scenes:preview:v1';
const sceneIds = new Set(registry.scenes.map((scene) => scene.id));
const add = (items: string[], id: string) => [...new Set([...items, id])];

export function freshProgress(): SceneProgress {
  return {
    schemaVersion: 1, contentVersion: registry.version,
    currentSceneId: registry.startSceneId,
    visited: [registry.startSceneId], completed: [], finished: false,
  };
}

/** Reconstruct an allowlist, never retain unknown saved fields or free text. */
export function parseProgress(raw: string | null): SceneProgress | null {
  if (!raw || raw.length > 10000) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object') return null;
    const p = value as Record<string, unknown>;
    const ids = (items: unknown): items is string[] =>
      Array.isArray(items) && items.length <= sceneIds.size &&
      items.every((id) => typeof id === 'string' && sceneIds.has(id));
    if (
      p.schemaVersion !== 1 || p.contentVersion !== registry.version ||
      typeof p.currentSceneId !== 'string' || !sceneIds.has(p.currentSceneId) ||
      !ids(p.visited) || !ids(p.completed) || typeof p.finished !== 'boolean' ||
      !p.visited.includes(p.currentSceneId)
    ) return null;
    const visited = p.visited;
    if (p.completed.some((id) => !visited.includes(id))) return null;
    const current = registry.scenes.find((s) => s.id === p.currentSceneId)!;
    if (p.finished && (!p.completed.includes(current.id) ||
      !current.choices.some((choice) => choice.target === null))) return null;
    return {
      schemaVersion: 1, contentVersion: registry.version,
      currentSceneId: p.currentSceneId,
      visited: [...new Set(p.visited)], completed: [...new Set(p.completed)],
      finished: p.finished,
    };
  } catch {
    return null;
  }
}

export function readProgress(storage: ProgressStorage | null): {
  progress: SceneProgress; status: 'new' | 'resumed' | 'recovered' | 'memory';
} {
  if (!storage) return { progress: freshProgress(), status: 'memory' };
  try {
    const raw = storage.getItem(PROGRESS_KEY);
    if (raw === null) return { progress: freshProgress(), status: 'new' };
    const progress = parseProgress(raw);
    return progress
      ? { progress, status: 'resumed' }
      : { progress: freshProgress(), status: 'recovered' };
  } catch {
    return { progress: freshProgress(), status: 'memory' };
  }
}

export function saveProgress(storage: ProgressStorage | null, progress: SceneProgress): boolean {
  const safe = parseProgress(JSON.stringify(progress));
  if (!storage || !safe) return false;
  try {
    storage.setItem(PROGRESS_KEY, JSON.stringify(safe));
    return true;
  } catch {
    return false;
  }
}

export function clearProgress(storage: ProgressStorage | null): boolean {
  if (!storage) return false;
  try {
    storage.removeItem(PROGRESS_KEY);
    return true;
  } catch {
    return false;
  }
}

/** Commit a selected choice only after the learner acknowledges its feedback. */
export function advance(progress: SceneProgress, choiceId: string): SceneProgress {
  if (progress.finished) return progress;
  const current = registry.scenes.find((s) => s.id === progress.currentSceneId);
  const choice = current?.choices.find((c) => c.id === choiceId);
  if (!choice || !current) return progress;
  const target = choice.target ?? current.id;
  return {
    ...progress, currentSceneId: target,
    visited: add(progress.visited, target),
    completed: choice.completesScene ? add(progress.completed, current.id) : progress.completed,
    finished: choice.target === null,
  };
}

export function replayScene(progress: SceneProgress, id: string): SceneProgress {
  if (!sceneIds.has(id) || !progress.visited.includes(id)) return progress;
  return { ...progress, currentSceneId: id, finished: false };
}

/** A reload of the current URL must preserve a completed route's finish flag. */
export function restoreSceneFromHash(progress: SceneProgress, hash: string): SceneProgress {
  if (!hash.startsWith('#scene=')) return progress;
  const id = hash.slice('#scene='.length);
  return id === progress.currentSceneId ? progress : replayScene(progress, id);
}

/** Future route owners call this explicitly; visiting a scene does not complete it. */
export function enterTrigger(progress: SceneProgress, triggerId: string): SceneProgress {
  const trigger = registry.triggers.find((t) => t.id === triggerId);
  if (!trigger || !trigger.requiresCompleted.every((id) => progress.completed.includes(id))) return progress;
  return {
    ...progress, currentSceneId: trigger.sceneId,
    visited: add(progress.visited, trigger.sceneId), finished: false,
  };
}
