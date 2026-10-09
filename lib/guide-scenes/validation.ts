import type { SceneRegistry } from './types';

/** Authoring gate: references, original text, reachability, and an exit from every scene. */
export function validateRegistry(registry: SceneRegistry): string[] {
  const errors: string[] = [];
  const unique = (ids: string[], label: string) => {
    if (new Set(ids).size !== ids.length) errors.push(`Duplicate ${label} IDs`);
  };
  unique(registry.guides.map((g) => g.id), 'guide');
  unique(registry.scenes.map((s) => s.id), 'scene');
  unique(registry.sources.map((s) => s.id), 'source');
  unique(registry.triggers.map((t) => t.id), 'trigger');
  const guides = new Set(registry.guides.map((g) => g.id));
  const scenes = new Set(registry.scenes.map((s) => s.id));
  const sources = new Set(registry.sources.map((s) => s.id));
  if (!registry.version || !scenes.has(registry.startSceneId)) errors.push('Invalid version/start scene');
  for (const guide of registry.guides) {
    if (!guide.name || !guide.identitySource || !guide.reviewNote) errors.push(`Missing guide provenance: ${guide.id}`);
    if (guide.image && (!guide.image.alt || guide.image.width <= 0 || guide.image.height <= 0 ||
      !guide.image.src.startsWith('/guide-scenes/') || !guide.image.sourceFile)) errors.push(`Invalid guide image: ${guide.id}`);
  }
  for (const source of registry.sources) {
    if (!source.label || (source.href && !source.href.startsWith('https://'))) errors.push(`Invalid source: ${source.id}`);
  }
  for (const scene of registry.scenes) {
    if (!guides.has(scene.guideId)) errors.push(`Unknown guide: ${scene.id}`);
    if (registry.guides.find((g) => g.id === scene.guideId)?.portrayalStatus === 'needs-review') errors.push(`Unresolved portrayal: ${scene.id}`);
    if (!scene.title || !scene.invitation || !scene.takeaway || !scene.location ||
      !scene.paragraphs.length || scene.paragraphs.some((p) => !p.trim()) ||
      !scene.task.label || !scene.task.instruction || !scene.task.evidence ||
      scene.version < 1 || scene.reviewStatus !== 'draft-awaiting-human-review') errors.push(`Missing scene content/review: ${scene.id}`);
    if (scene.sourceIds.length === 0 || scene.sourceIds.some((id) => !sources.has(id))) errors.push(`Invalid sources: ${scene.id}`);
    if (scene.choices.length < 2) errors.push(`Need multiple choices: ${scene.id}`);
    unique(scene.choices.map((c) => c.id), `${scene.id} choice`);
    for (const choice of scene.choices) {
      if (!choice.label || !choice.hint || !choice.feedback ||
        (choice.target !== null && !scenes.has(choice.target))) errors.push(`Invalid choice: ${scene.id}/${choice.id}`);
      if (choice.target === null && !choice.completesScene) errors.push(`Terminal must complete: ${scene.id}`);
    }
  }
  for (const trigger of registry.triggers) {
    if (!trigger.label || !scenes.has(trigger.sceneId) || trigger.requiresCompleted.some((id) => !scenes.has(id))) errors.push(`Invalid trigger: ${trigger.id}`);
  }
  const walk = (id: string, seen: Set<string>, findExit: boolean): boolean => {
    if (seen.has(id)) return false;
    seen.add(id);
    const scene = registry.scenes.find((s) => s.id === id);
    return scene?.choices.reduce((exit, choice) => {
      if (choice.target === null) return findExit || exit;
      return walk(choice.target, seen, findExit) || exit;
    }, false) ?? false;
  };
  const reachable = new Set<string>();
  walk(registry.startSceneId, reachable, false);
  for (const scene of registry.scenes) {
    if (!reachable.has(scene.id)) errors.push(`Unreachable scene: ${scene.id}`);
    if (!walk(scene.id, new Set(), true)) errors.push(`No finish reachable: ${scene.id}`);
  }
  return errors;
}
