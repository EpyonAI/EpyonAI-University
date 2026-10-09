---
status: current
owner: Vela / Sol
authority_scope: eaiu.website-launch
last_verified: 2026-10-09
review_after: 2026-10-16
supersedes: "earlier chat-only launch assignments"
---

# Epyon website launch — GPT construction handoff

**Control:** [Launch control #8](https://github.com/EpyonAI/EpyonAI-University/issues/8)

Captain's October 9 instruction authorizes this execution plan and its work orders. The first objective is a professional EpyonAI.org that people can use to volunteer, donate, understand the mission and request a library partnership. Website readiness is urgent; PATCH production and the Pathfinder application continue in parallel.

## Start here — any GPT surface

1. Open this document and control issue #8 in the connected repository. ChatGPT Desktop, Copilot Desktop/cloud and Keelforge's VS Insiders use the same GitHub record; a chat does not automatically transfer into another running session.
2. Select **GPT-6.1 Sol** for implementation, **GPT-6 Astra** for independent release/security review, or **GPT-6 Luna** for bounded inventory/community cleanup. Explicitly select the model. Do not use Auto or an Anthropic/Gemini agent for this sprint.
3. Read the work order and the target repository's AGENTS/instructions. Claim exactly one ready scope and record actual model, surface, branch, session receipt and intended files. An issue or named worker is not evidence of a launched session.
4. Work on a branch/PR. PR title starts **[EAIU-LAUNCH][Wxx]**. Run checks appropriate to changed behavior; attach logs and screenshots/preview when relevant. Do not claim a local build proves live deployment.
5. Update the same issue: **DONE / NEXT / BLOCKER / EVIDENCE**. A blocker names the exact missing credential, system permission, source, decision or dependency. Never create another daily maintenance handoff issue.
6. Keelforge integrates overlapping app/page.tsx, Header/Footer and configuration changes. Maximum three concurrent implementation sessions; one active session per work order. Independent GPT reviewer evaluates results.
7. Captain approves the concrete public release. Preparing code, docs, work orders, test builds and previews is authorized. Saige provides governance review; Captain is the current final publisher.

### Cloud launch receipt

The connector available during this handoff can create issues/files and manage PRs, but exposes no task-model or session-launch selector. Ordinary API issue assignment can use Auto; do not use it to bypass the GPT-only instruction. All work orders are initially QUEUED. Launch through a GPT model picker in Copilot Desktop/GitHub, or through a verified authenticated tasks API that explicitly pins the supported GPT model.

After launch, record:
```text
CLAIMED Wxx
worker:
actual_model:
surface:
repo/base:
branch:
session_url_or_id:
started_at:
files_owned:
next_checkpoint:
```

## Domain and repository map

| Public purpose | Domain | Repository / status |
| --- | --- | --- |
| Nonprofit front door | epyonai.org | EpyonAI/EpyonAI-University; default DUO |
| Pathways program | epyonai.org/pathways | University site |
| Pathfinder app | pathfinder.epyonai.org | EpyonAI/Odyssey; default DUO; confirm live Vercel wiring |
| PATCH | link verified current PATCH host; future subdomain only after DNS verified | EpyonAI/patch; static site, default DUO |
| Libraries | epyonai.org/libraries | University page; resources in EpyonAI/Pathfinder.Compass.ATL |
| Classroom | epyonai.org/classroom | University lesson library; current repo link is insufficient |
| Ecosystem | epyon-unlimited.com | The-3pyon/Epyon.UNLTD is candidate; W18 verifies |
| Legacy quarry | no new public app identity | EpyonAI/Pathfinder; salvage, no wholesale import |

Epion in earlier voice transcription always means Epyon.

## Organizational truth

- Epyon AI University is the legal Georgia educational nonprofit trust, 501(c)(3), with DBA Epyon Pathways. It is not presently a degree-accredited university.
- Epyon Pathways is the workforce program/team; Pathfinder is the app.
- PATCH and Compass News are related nonprofit programs. The classroom connects learning content across them.
- EON is the current opportunity-creation build phase. EEON is the planned **Epyon Employment Opportunity Network**, connecting graduates to jobs/contracts/business opportunities and developing opportunities where none exist. Employment is not guaranteed.
- Epyon Unlimited DUO is a conceptual ecosystem with no legal form. Epyon Limited is the separate for-profit entity. Do not infer legal ownership from a conceptual chart.
- Do not publish Epyon Foundation; it is a future plan.
- Official legal/banking records stay in authorized private archives. Prepare specific public disclosure artifacts for Captain; do not copy raw trust documents or identifiers into public planning files.

## Release stages

**Gate A — outreach-ready, target first preview in 48 hours (October 11):**
Real mission/program content, three tracks, working volunteer intake, direct PayPal, transparency/privacy, library proposal/contact, verified navigation and deployment preview. This is a target, not an assertion that the work is finished.

**Gate B — content/community-ready:**
Working Discussions/contribution path, six short classroom lessons, one complete PATCH story package, accessible formats and donor/library briefing.

**Gate C — operating pipeline:**
Sources -> GPT draft -> validation -> human review -> versioned publish; bounded GPT dispatch, receipts, independent reviews and repeatable previews. Pathfinder runtime follows its own contracts and gates.

Missing GoFundMe Pro access, optional video rendering or the full Pathfinder app must not hide otherwise ready website work. A functioning volunteer destination and truthful published content remain required.

## Work orders

| Order | Priority | Scope | GPT worker | Dependencies |
| --- | --- | --- | --- | --- |
| [W01](https://github.com/EpyonAI/EpyonAI-University/issues/9) | P0 | Verify Vercel/domain wiring and establish a reproducible website build | gpt-publishing | Ready |
| [W02](https://github.com/EpyonAI/EpyonAI-University/issues/10) | P0 | Publish mission, three pathways and Career Compass content | gpt-web-content | W01 |
| [W03](https://github.com/EpyonAI/EpyonAI-University/issues/11) | P0 | Build a functioning volunteer application and coordinator portal | gpt-volunteer-portal | W01 |
| [W04](https://github.com/EpyonAI/EpyonAI-University/issues/12) | P0 | Connect volunteer/developer hub to GitHub Discussions | gpt-community | Ready |
| [W05](https://github.com/EpyonAI/EpyonAI-University/issues/13) | P0 | Wire direct PayPal and reconcile all fundraiser links | gpt-donations | Ready |
| [W06](https://github.com/EpyonAI/EpyonAI-University/issues/18) | P0 | Add governance, privacy and nonprofit transparency pages | gpt-web-content | Ready |
| [W07](https://github.com/EpyonAI/EpyonAI-University/issues/14) | P0 | Create library partnership page and grant/donor briefing kit | gpt-libraries | W02 |
| [W08](https://github.com/EpyonAI/EpyonAI-University/issues/15) | P1 | Open a real classroom and seed approachable AI learning library | gpt-learning | W02 |
| [W09](https://github.com/EpyonAI/EpyonAI-University/issues/16) | P0 | Establish GPT worker dispatch, publishing and scheduled progress checks | gpt-publishing | W01 |
| [W10](https://github.com/EpyonAI/EpyonAI-University/issues/17) | P0 | Qualify website for public outreach and Google Ad Grants review | gpt-release-review | W01, W02, W03, W04, W05, W06, W07 |
| [W11](https://github.com/EpyonAI/patch/issues/5) | P1 | Lock professional PATCH canon and ten reusable story briefs | gpt-patch-studio | Ready |
| [W12](https://github.com/EpyonAI/patch/issues/6) | P1 | Produce one complete PATCH comic-to-short pilot and publishing pipeline | gpt-patch-studio | W11 |
| [W13](https://github.com/EpyonAI/Pathfinder.Compass.ATL/issues/1) | P0 | Replace unverified library claims and prepare field resource inventory | gpt-libraries | Ready |
| [W14](https://github.com/EpyonAI/Odyssey/issues/3) | P0 | Repair current command plan and route Pathfinder work to GPT owners | gpt-publishing | Ready |
| [W15](https://github.com/EpyonAI/Odyssey/issues/4) | P1 | Integrate Career Compass resources and staged Google Maps access | gpt-libraries | W13, W14 |
| [W16](https://github.com/EpyonAI/Pathfinder/issues/127) | P0 | Stop duplicate maintenance and consolidate salvage decisions | gpt-salvage | Ready |
| [W17](https://github.com/EpyonAI/Pathfinder/issues/128) | P0 | Verify old credential rotation and deployment security findings | gpt-release-review | Ready |
| [W18](https://github.com/The-3pyon/Epyon.UNLTD/issues/25) | P1 | Verify ecosystem domain source and synchronize nonprofit links | gpt-web-content | W01, W02 |
| [W19](https://github.com/EpyonAI/Odyssey/issues/5) | P1 | Implement GPT content adaptation with review and publication controls | gpt-learning | W14 |

Dependencies refer to the stable Wxx identifiers. Tasks without dependencies can be claimed now. Each issue contains detailed acceptance criteria. Use links to private/internal repositories only with authorized access.

## Ownership

| Human / GPT role | Accountability |
| --- | --- |
| Captain | Executive narrative, partnerships, access/payment decisions, final public release |
| Saige Campbell | Executive Director, Trustee, governance and publication review |
| Louise Campbell | Grant narrative, funding evidence, grant pipeline |
| Charlie Paul Hill | Community liaison, library fieldwork with Captain, music pilot and audience feedback |
| Heather Thompson | Volunteer coordination, PATCH storytelling/editorial calendar |
| Tai Sei | Professional art direction, character canon and art approval |
| Martin Perry | Security/access, secret rotation, application privacy and deployment review |
| Vela / Sol | System map, priority/dependency control, check-ins and implementation coordination |
| Keelforge | Technical integration from VS Insiders; verifies cloud worker receipts |
| GPT Copilot workers | Scoped construction and test evidence |
| Astra review worker | Independent cross-system/release/security review |
| Luna workers | Bounded audit, community setup and repeatable cleanup |

AI collaborators get credit; humans own editorial, legal, financial and public-release decisions. Previous Claude/Gemini assignments are superseded for this sprint. Choosing GPT models does not require abandoning Google Workspace/Drive, existing Cloud hosting or Maps.

## Professional visual direction

Prefer durable typography, spacing, accessible contrast, real program content and a small reusable design system. Target a design that remains useful for three to five years while content evolves. Preserve approved logos/character references; avoid a wholesale animated or trendy redesign that blocks launch.

PATCH art uses **ChatGPT image generation/editing + Tai's direction**. Google/Gemini and Anthropic art are excluded from this sprint. Reference-driven editing, canonical model sheets and human repair/layout produce consistency; a repeated text prompt alone does not guarantee it.

Reconcile the existing Patch robotic-dog canon and Ms. Foxy Wiggles before new art. Start with one approved story as comic, readable story, workshop activity and short motion-comic export. Then scale to ten foundational stories. Video needs an actual compositor/renderer, audio and captions; image capability alone is not a video pipeline.

## Libraries — fieldwork before referrals

Captain and Charlie plan outreach during **October 12–18** to Fulton, Cobb and Gwinnett county systems and Georgia Tech, Emory, Georgia State and other university libraries. These are outreach targets, not established partners. University facilities may have distinct public-access rules.

Assess before referring a student:
- card/eligibility, age/public-access requirements and fees;
- equipment model, software/license and recording/animation/podcasting functions;
- booking windows, staff training/supervision, consumables and availability;
- accessibility, transit, hours and reservation/cancellation process;
- contact/permission, confirmation source, verified date and next review date.

A mapped place is not proof of equipment or access. Distinguish public-source, staff-confirmed, visit-confirmed and formal partner status. Unknown facts remain unknown. The Compass prototype exists but requires W13's data/security/coordinate fixes.

Do not send library emails or meeting invitations from this handoff; prepare the briefing and contact route for Captain.

## Where material lives

| System | Responsibility |
| --- | --- |
| Notion | Source index, editorial research, opportunities, private official/donation records |
| Google Drive | Editable source art, masters, contracts/releases and private documents |
| GitHub | Code, schemas, prompts, versioned manifests, work orders, decisions and approved small assets |
| Vercel | Website/app previews and deployments, verified domain mapping |
| Cloud/object storage | Approved large video/audio/media objects, optional workers and orchestration |
| Product data store | Reviewed resource/content metadata and private application/learner state per approved contracts |
| GitHub / Secret Manager | Credentials through approved secret stores; never committed values |

Volunteer PII belongs in a private, access-controlled collection with an actual coordinator retrieval path, not public issues/Discussions. No fake form success. Retention/privacy text must describe the implemented system.

## Donation path

Direct PayPal approved by Captain's source page:
https://www.paypal.com/ncp/payment/SXDWW8U3FGZAW

Use a plain external link initially; verify destination/beneficiary without making a payment. The source is a hosted payment link, so do not infer charitable checkout/receipt behavior. GoFundMe campaign changes wait on account recovery and destination checks; admin /manage URLs never reach donor CTAs. Do not publicly assert a new bank account until confirmed.

## Checkpoints and review evidence

Morning/evening asynchronous launch watch, including weekends:
- current PR/commit/session evidence;
- ready / claimed / review / blocked / done;
- no evidence of progress for 24 hours -> explicit stalled owner/next action;
- one compact Captain brief; routine progress updates reuse the control issue;
- stop duplicate sessions and status loops.

Event-based PR review is scoped to [EAIU-LAUNCH] changes. Build, accessibility, privacy, content provenance, real links/forms and visual consistency are reviewed independently. Reviews may prepare requested fixes; they do not grant production-release approval or make payments.

A schedule is not a guarantee of continuous desktop compute. Local sessions need an online machine; cloud execution needs a verified session/credential/budget path. Check-ins report whether workers actually ran.

## Evidence from October 9 audit

- University root page has placeholder donation links and no volunteer intake. It does not render old components/sections. Founder name in old page is unverified; use Captain Campbell pending confirmation.
- PATCH already has approved art, a character bible, eight story seeds and a Magic Painter script; reuse and correct them.
- Legacy Pathfinder now has 123 branches, including 113 Copilot task branches. Repeated reports are not 113 completed improvements. W16 deduplicates and stops the external routine.
- PR40 onboarding persistence may reset existing progress; PR81 XP is a useful reference. Import only with Odyssey salvage records.
- Odyssey current command plan contains unresolved merge markers and outdated owner routing; W14 repairs it. Database choice requires an explicit decision rather than an incidental migration.
- Compass has Maps code and generated-institution prototype. W13 replaces unsupported verification, client generative calls and coordinate fallback.
- Existing content-pipeline scaffold validates checksums; W19 implements actual adaptation/review/publishing.

## Release handoff

```text
RELEASE CANDIDATE
preview_url:
repo/branch/commit:
verified_routes:
volunteer_submission_and_retrieval:
donation_destination:
official_public_disclosure:
mobile_keyboard_accessibility:
build_and_security_evidence:
remaining_blockers:
rollback:
independent_reviewer:
Captain_publication_decision:
```
