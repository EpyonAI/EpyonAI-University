import { describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { guideSceneRegistry as registry } from './registry';
import { validateRegistry } from './validation';
import {
  advance, clearProgress, enterTrigger, freshProgress, parseProgress,
  PROGRESS_KEY, readProgress, replayScene, restoreSceneFromHash, saveProgress,
} from './progress';
import type { ProgressStorage } from './types';
import artManifest from './art-manifest.json';

function memoryStorage(): ProgressStorage {
  const data = new Map<string, string>();
  return {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => { data.set(key, value); },
    removeItem: (key) => { data.delete(key); },
  };
}

describe('scene authoring gate', () => {
  it('validates content, sources, references, reachability and exits', () => {
    expect(validateRegistry(registry)).toEqual([]);
    expect(registry.scenes).toHaveLength(9);
    expect(registry.guides.filter((g) => g.kind === 'base-guide').map((g) => g.name))
      .toEqual(['ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Grok', 'Perplexity']);
    for (const guide of registry.guides.filter((g) => g.kind === 'base-guide')) {
      expect(registry.scenes.some((scene) => scene.guideId === guide.id)).toBe(true);
    }
  });

  it('rejects unknown guides, bad targets, missing review, dead ends and unreachable scenes', () => {
    const bad = structuredClone(registry);
    bad.scenes[0].guideId = 'unknown';
    bad.scenes[0].choices[0].target = 'missing';
    bad.scenes[0].choices[1].target = 'arrival';
    bad.scenes[0].sourceIds = ['missing'];
    bad.scenes[0].task.evidence = '';
    const errors = validateRegistry(bad).join('\n');
    expect(errors).toContain('Unknown guide');
    expect(errors).toContain('Invalid choice');
    expect(errors).toContain('Invalid sources');
    expect(errors).toContain('Missing scene content/review');
    expect(errors).toContain('Unreachable scene');
    expect(errors).toContain('No finish reachable');
  });

  it('rejects duplicate identifiers and unresolved portrayals', () => {
    const bad = structuredClone(registry);
    bad.scenes[0].guideId = 'volta';
    bad.guides.push(bad.guides[0]);
    expect(validateRegistry(bad)).toContain('Duplicate guide IDs');
    expect(validateRegistry(bad)).toContain('Unresolved portrayal: arrival');
  });

  it('ships only the seven allowlisted art derivatives with exact checksums', () => {
    const folder = path.join(process.cwd(), 'public/guide-scenes');
    expect(readdirSync(folder).sort()).toEqual(artManifest.map((a) => a.file).sort());
    for (const asset of artManifest) {
      expect(createHash('sha256').update(readFileSync(path.join(folder, asset.file))).digest('hex')).toBe(asset.sha256);
      const image = registry.guides.find((g) => g.image?.sourceFile === asset.sourceFile)?.image;
      expect(image?.src).toBe(`/guide-scenes/${asset.file}`);
      expect(image?.alt.length).toBeGreaterThan(10);
      expect(asset.sourceSha256).toMatch(/^[a-f0-9]{64}$/);
    }
  });
});

describe('progression and future navigation', () => {
  it('introduces one Guide, branches, and only completes an acknowledged choice', () => {
    const initial = freshProgress();
    expect(initial.visited).toEqual(['arrival']);
    expect(initial.completed).toEqual([]);
    const questions = advance(initial, 'ask');
    const basics = advance(initial, 'basics');
    expect(questions.currentSceneId).toBe('asking');
    expect(basics.currentSceneId).toBe('ai-basics');
    expect(questions.completed).toEqual(['arrival']);
    expect(initial.completed).toEqual([]);
    expect(advance(initial, 'unknown')).toBe(initial);
  });

  it('keeps retry feedback from completing a scene', () => {
    const privacy = advance(advance(freshProgress(), 'basics'), 'privacy');
    const retry = advance(privacy, 'real');
    expect(retry.currentSceneId).toBe('privacy');
    expect(retry.completed).not.toContain('privacy');
    expect(advance(retry, 'fictional').completed).toContain('privacy');
  });

  it('finishes a route, counts unique checkpoints, and replays without erasing the trail', () => {
    let p = freshProgress();
    for (const choice of ['ask', 'practice', 'skills', 'reflection', 'finish']) p = advance(p, choice);
    expect(p.finished).toBe(true);
    expect(p.completed).toEqual(['arrival', 'asking', 'practice', 'skill-map', 'reflection']);
    expect(advance(p, 'another')).toBe(p);
    p = replayScene(p, 'arrival');
    expect(p.finished).toBe(false);
    expect(advance(p, 'ask').completed).toEqual(p.completed);
    expect(replayScene(p, 'privacy')).toBe(p); // A hash/replay cannot unlock an unseen scene.
    expect(replayScene(p, 'unknown')).toBe(p);
  });

  it('guards trigger prerequisites and never treats route arrival as completion', () => {
    const p = freshProgress();
    expect(enterTrigger(p, 'libraries')).toBe(p);
    expect(enterTrigger(p, 'unknown')).toBe(p);
    const unlocked = advance(p, 'ask');
    const libraries = enterTrigger(unlocked, 'libraries');
    expect(libraries.currentSceneId).toBe('resource-desk');
    expect(libraries.visited).toContain('resource-desk');
    expect(libraries.completed).not.toContain('resource-desk');
  });

  it('preserves finished routes when the current preview URL reloads', () => {
    let p = freshProgress();
    for (const choice of ['ask', 'practice', 'skills', 'reflection', 'finish']) p = advance(p, choice);
    expect(restoreSceneFromHash(p, '#scene=reflection')).toBe(p);
    expect(restoreSceneFromHash(p, '#guide-preview')).toBe(p);
    expect(restoreSceneFromHash(p, '#scene=privacy')).toBe(p);
    const replay = restoreSceneFromHash(p, '#scene=arrival');
    expect(replay.finished).toBe(false);
    expect(replay.currentSceneId).toBe('arrival');
    expect(replay.completed).toEqual(p.completed);
  });
});

describe('non-sensitive, defensive local persistence', () => {
  it('round-trips allowlisted fields and strips any unrelated data', () => {
    const p = advance(freshProgress(), 'basics');
    const parsed = parseProgress(JSON.stringify({ ...p, privateText: 'never retain', timestamps: [1] }));
    expect(parsed).toEqual(p);
    expect(JSON.stringify(parsed)).not.toContain('privateText');
    const store = memoryStorage();
    expect(readProgress(store).status).toBe('new');
    expect(saveProgress(store, p)).toBe(true);
    expect(readProgress(store)).toEqual({ progress: p, status: 'resumed' });
  });

  it.each([
    '{broken', 'null', '[]', JSON.stringify({ ...freshProgress(), schemaVersion: 99 }),
    JSON.stringify({ ...freshProgress(), contentVersion: 'outdated' }),
    JSON.stringify({ ...freshProgress(), currentSceneId: 'unknown' }),
    JSON.stringify({ ...freshProgress(), visited: [] }),
    JSON.stringify({ ...freshProgress(), visited: [2] }),
    JSON.stringify({ ...freshProgress(), completed: ['privacy'] }),
    JSON.stringify({ ...freshProgress(), finished: true }),
    'x'.repeat(10001),
  ])('recovers malformed/obsolete storage safely (%#)', (raw) => {
    const store = memoryStorage();
    store.setItem(PROGRESS_KEY, raw);
    expect(parseProgress(raw)).toBeNull();
    expect(readProgress(store)).toEqual({ progress: freshProgress(), status: 'recovered' });
  });

  it('accepts a valid finish checkpoint and rejects an inconsistent one', () => {
    let p = freshProgress();
    for (const c of ['basics', 'verify', 'resources', 'reflect', 'finish']) p = advance(p, c);
    expect(parseProgress(JSON.stringify(p))).toEqual(p);
    expect(parseProgress(JSON.stringify({ ...p, completed: [] }))).toBeNull();
  });

  it('falls back if storage access or writes throw (private mode/quota)', () => {
    const broken: ProgressStorage = {
      getItem() { throw new Error('blocked'); },
      setItem() { throw new Error('quota'); },
      removeItem() { throw new Error('blocked'); },
    };
    for (const storage of [null, broken]) {
      expect(readProgress(storage).status).toBe('memory');
      expect(saveProgress(storage, freshProgress())).toBe(false);
      expect(clearProgress(storage)).toBe(false);
    }
  });

  it('reset touches only the preview key and invalid progress cannot be written', () => {
    const store = memoryStorage();
    store.setItem('another-feature', 'keep');
    saveProgress(store, freshProgress());
    expect(clearProgress(store)).toBe(true);
    expect(store.getItem(PROGRESS_KEY)).toBeNull();
    expect(store.getItem('another-feature')).toBe('keep');
    expect(saveProgress(store, { ...freshProgress(), currentSceneId: 'unknown' })).toBe(false);
  });
});
