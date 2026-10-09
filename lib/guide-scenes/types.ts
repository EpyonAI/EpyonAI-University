/** Scripted educational scenes, not live model conversations or canon declarations. */
export interface Guide {
  id: string;
  name: string;
  kind: 'base-guide' | 'crew';
  identitySource: string;
  portrayalStatus: 'preview-only' | 'needs-review';
  reviewNote: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    sourceFile: string;
  };
}

export interface SceneChoice {
  id: string;
  label: string;
  hint: string;
  feedback: string;
  target: string | null;
  completesScene: boolean;
}

export interface GuideScene {
  id: string;
  guideId: string;
  location: string;
  title: string;
  invitation: string;
  paragraphs: string[];
  takeaway: string;
  task: { label: string; instruction: string; evidence: string };
  choices: SceneChoice[];
  sourceIds: string[];
  version: number;
  reviewStatus: 'draft-awaiting-human-review';
}

export interface SceneSource {
  id: string;
  label: string;
  /** Only public references go in client data; no private archive paths. */
  href?: string;
}

export interface NavigationTrigger {
  id: string;
  label: string;
  sceneId: string;
  requiresCompleted: string[];
}

export interface SceneRegistry {
  version: string;
  startSceneId: string;
  guides: Guide[];
  scenes: GuideScene[];
  sources: SceneSource[];
  triggers: NavigationTrigger[];
}

export interface SceneProgress {
  schemaVersion: 1;
  contentVersion: string;
  currentSceneId: string;
  visited: string[];
  completed: string[];
  finished: boolean;
}

export interface ProgressStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
