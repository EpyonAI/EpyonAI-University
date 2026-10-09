# AI Crew Guide scene preview

Implemented W08 sub-scope: `/preview/guide-scenes`. This is a **scripted review
preview**, not a public classroom launch, live AI connection, accredited course,
or demonstrated Pathfinder runtime. W02 and Keelforge retain public/homepage
integration. Route metadata requests no indexing; this is **not access control**.
Do not deploy a preview route assuming it is private.

## Implementation contract

- `lib/guide-scenes/types.ts`: Guides, scenes, choices, sources, navigation triggers.
- `registry.ts`: nine branching encounters, versioned draft content and source references.
- `validation.ts`: authoring gate for IDs, references, content, unresolved
  portrayals, reachable scenes, and reachable finish checkpoints.
- `progress.ts`: immutable progression, guarded route triggers, replay, versioned
  allowlisted persistence, and safe storage fallbacks.
- `components/guide-scenes/GuideScenePlayer.tsx`: reusable single-encounter UI;
  native buttons/details/progress, image text alternatives, focus transfer,
  explicit reset confirmation, responsive layout, and reduced-motion CSS.
- `art-manifest.json`: source filenames and SHA-256 for approved originals and
  shipped derivatives. Private machine/archive paths are deliberately omitted.

Mount `<GuideScenePlayer />` to resume the local trail. Optionally pass
`entryTrigger="classroom"`, `"pathways"`, `"libraries"`, or `"arrival"` when a
route owner deliberately requests an encounter. Trigger prerequisites must be
met; a route visit never marks a scene complete. Integrators should change the
prop for a new trigger event, or call the pure `enterTrigger` function in their
own integration. This component does not intercept links or bind to site navigation.

`previewNavigation` adds **simulation buttons**, not links to unfinished pages.
`syncHash` is an optional preview URL enhancement (`#scene=<id>`); only previously
encountered scenes can be replayed from a hash. It does not unlock scenes or grant
progress. Leave it off when embedding in pages that own their own fragment URLs.

The player displays a choice's explanation before the learner acknowledges it.
Retry choices do not complete a checkpoint. Replay keeps the trail; confirmed
reset restarts it. The trail is a set of acknowledged encounters, **not evidence
of competency**. Exercise answers are never entered, stored, or submitted.

## Coverage and content review

| Encounter | Guide | Educational beat |
| --- | --- | --- |
| Arrival | ChatGPT | Epyon / Pathways / Pathfinder context; choose a starting direction |
| AI basics | ChatGPT | Generative output is not verified fact |
| Asking | Copilot | Goal, non-private context, requested format |
| Privacy | Claude | Fictional data; retry feedback for unsafe choice |
| Source check | Perplexity | Original source, date, claim, access conditions |
| Practice | Gemini | Attempt, hint, check feedback |
| Skill map | Copilot | Requirement → skill → practice → evidence |
| Resource desk | Grok | Eligibility, equipment, reservations, cost, accessibility |
| Reflection | Codex & Patch | Keep a habit, finish a route or explore another |

All six clearly identified archived base Guides are in the registry and have an
encounter. They are character portrayals, not claims about vendor endorsement,
model rankings, autonomous teaching, or actual tool capabilities. New dialogue
and teaching assignments are marked **draft awaiting human review**. Sources are
the current launch command/content draft, original fictional activities, and the
public NIST AI risk-management overview/profile reference. Activities paraphrase
general AI literacy practices; no third-party course text is copied.

Captain Campbell, Volta, and Keelforge are **registry-only / needs-review** entries
with explicit identity sources and TODOs. Captain is human, not an AI Guide.
Codex/Keelforge portrayal needs reconciliation before a distinct Keelforge scene.
Legacy lesson model/rank/capability claims have not been reused.

Unidentified/ambiguous avatar candidates (opaque UUIDs, generated-file names,
generic screenshots, Navigator_TrueForm, and uncertain model/role variants) are
excluded pending an identity/canon decision. Clear names alone do not establish
a personality, rank, or teaching assignment. No unrelated avatar-folder files,
legal records, PDFs, spreadsheets, credentials, or personal data are imported.

## Art and tone provenance

Seven still images are resized/encoded WebP derivatives of the six archived
`*_Card.png` base portraits and `EpyonHQ_Codex_Patch_small.png` from the supplied
Avatar collection. No new images are generated, backgrounds composited, faces
altered, or video/audio shipped. Total shipped art is approximately 758 KiB.
Transforms: Pillow RGB conversion, Lanczos thumbnail within 768×1152 (base
portraits), WebP quality 85. The Codex/Patch source retains its 752×752 dimensions.

The supplied `STYLE_SEED_FOR_PATHFINDER_INTERACTION.mp4` tone reference was
inspected locally through representative 0/2/5-second frames: a compass motif
expanding into possible directions. The preview reflects that invitation with
progressive encounters and branching choices, not a copied video or blocking
animation. The source clip contains audio; no audio is reused or autoplayed.
All educational text is immediately readable (no typewriter delay). A short
portrait arrival animation is removed for reduced-motion preferences; reduced
motion also overrides inherited smooth scrolling only while this player is present.

User-provided source art is used for this authorized preview. Final portrayal,
branding/rights, age suitability, editorial acceptance, and public use need the
appropriate human review. Artwork availability is not proof of release approval.

## Local progress and failure behavior

Only `eaiu:guide-scenes:preview:v1` is touched. Stored fields: schema/content
version, current scene ID, unique visited/completed scene IDs, and finish flag.
No names, answers, accounts, model messages, timestamps, identity records, or
analytics. Storage is browser-local, origin-specific and shared by tabs; not an
account or cross-device record. Simultaneous tabs are last-writer-wins.

Malformed, oversized, inconsistent, or old-version data starts a fresh preview
with a notice. Unknown fields are discarded. Browser storage access/write/quota
failures leave interactions usable in memory with a visible notice. Reset only
removes this preview key; blocked deletion is reported. Reset removes no other
site data. Bump the content version when checkpoint meaning changes; this initial
implementation resets incompatible progress instead of silently migrating it.

## Verification

With the existing locked tooling:

```sh
pnpm install --frozen-lockfile
pnpm exec vitest run lib/guide-scenes/guide-scenes.test.ts components/guide-scenes/GuideScenePlayer.test.ts --threads=false
pnpm exec eslint app/preview/guide-scenes components/guide-scenes lib/guide-scenes --max-warnings=0
pnpm typecheck
pnpm build
pnpm dev --port 3100
```

The package's existing `pnpm lint` script also passes. Installed Next 15.5 warns
that `next lint` is deprecated; the scoped ESLint command works directly without
changing shared configuration. Unit tests cover branches, retries, completion, guarded triggers,
visited-only replay, storage failures/corruption/versioning, reset isolation,
registry reachability, provenance checksums, and accessible server-rendered HTML.

Real-browser checks should exercise native keyboard activation and focus transfer,
reload resume, retry, finish, reset cancellation/confirmation, unknown hash handling,
blocked storage, mobile overflow, reduced motion, image loading, and no-index
metadata. Shared Header/Footer are inherited unchanged and have their own review
boundary; this preview does not certify the rest of the site.

Verified locally on October 9, 2026: **26 Vitest tests pass**, scoped ESLint,
repository `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass. The production
preview was served with `pnpm start --port 3100`. **30 real-browser assertions**
passed across two routes, privacy retry, keyboard Enter/Space, visible focus,
heading/feedback focus transfer, reload and finished-state resume, replay,
reset cancellation/Escape/confirmation, reset key isolation, guarded navigation,
unvisited hash rejection, corrupt progress, blocked storage, no-index metadata,
and reduced-motion/mobile layout (320px and 390px).

Browser verification found a finished-route reload bug in the optional hash
restore. `restoreSceneFromHash` now preserves the finish flag when the current URL
is reloaded; a dedicated unit regression and browser reload check both pass.
Desktop (1280px) and mobile (390px) screenshots were captured locally as
`eaiu-guide-preview-desktop.png` and `eaiu-guide-preview-mobile.png`; they are test
evidence, not published assets. No application runtime error was observed.
Inherited `/favicon.ico` returns 404; unchanged Header/Footer retain legacy
fragment/project links. Build warns about parent-directory lockfile/workspace
root inference, and `next lint` emits its existing deprecation notice. Those
unrelated integration/configuration issues were not changed.

## Integration boundaries / exact remaining TODOs

- W02 dependency is unfinished; no homepage, Header/Footer, global layout/CSS,
  configuration, `/classroom`, or public navigation is modified.
- Keelforge chooses real route triggers and integration locations after W02.
  The preview is not W08's six published/reviewed 5–10-minute classroom lessons.
- Captain / editorial and art owners review dialogue, character teaching roles,
  rights/branding, and age suitability. No professor rank or unsupported canon
  has been assigned; characters act as learning Guides in this draft.
- Captain owns public publication. No commit, PR, deployment, outreach, payment,
  or production approval is performed by this task.
- Live AI, authenticated learner progress, analytics, external model calls,
  motion cutscenes, voiceovers/captions, and cross-tab conflict resolution are
  intentionally outside this first reusable foundation.
