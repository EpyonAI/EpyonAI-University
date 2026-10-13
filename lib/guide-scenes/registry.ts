import type { Guide, GuideScene, SceneRegistry } from './types';

const baseGuide = (
  id: string,
  name: string,
  alt: string,
  height = 768,
): Guide => ({
  id, name, kind: 'base-guide',
  identitySource: `${name}_Card.png (approved archived Guides collection)`,
  portrayalStatus: 'preview-only',
  reviewNote: 'Identity from approved filename; dialogue and teaching assignment need human review. No vendor endorsement or relative model-capability claim.',
  image: {
    src: `/guide-scenes/${id}.webp`, alt, width: 768, height,
    sourceFile: `${name}_Card.png`,
  },
});

const scene = (
  value: Omit<GuideScene, 'version' | 'reviewStatus'>,
): GuideScene => ({
  ...value, version: 1, reviewStatus: 'draft-awaiting-human-review',
});

export const guideSceneRegistry: SceneRegistry = {
  version: 'guide-preview-1',
  startSceneId: 'arrival',
  guides: [
    baseGuide('chatgpt', 'ChatGPT', 'ChatGPT Guide: a white and green robot holding a tablet.', 1152),
    baseGuide('claude', 'Claude', 'Claude Guide: a gold-lit robot holding a small light bulb.'),
    baseGuide('copilot', 'Copilot', 'Copilot Guide: a white and blue robot holding a globe and tablet.'),
    baseGuide('gemini', 'Gemini', 'Gemini Guide: a multicolored robot with a blue globe.', 1152),
    baseGuide('grok', 'Grok', 'Grok Guide: a dark robot holding an orange globe.'),
    baseGuide('perplexity', 'Perplexity', 'Perplexity Guide: a dark and silver robot holding a blue tablet.'),
    {
      id: 'codex-patch', name: 'Codex & Patch', kind: 'crew',
      identitySource: 'EpyonHQ_Codex_Patch_small.png; README.md; WEBSITE_CONTENT_DRAFT.md',
      portrayalStatus: 'preview-only',
      reviewNote: 'Codex the Coder and Patch are identified in repository content. Joint teaching scene is a draft; no new story canon.',
      image: {
        src: '/guide-scenes/codex-patch.webp',
        alt: 'Codex the Coder, a friendly robot with a laptop, beside Patch the robotic dog.',
        width: 752, height: 752, sourceFile: 'EpyonHQ_Codex_Patch_small.png',
      },
    },
    {
      id: 'captain', name: 'Captain Campbell', kind: 'crew',
      identitySource: 'WEBSITE_LAUNCH_COMMAND.md; CaptainBase.png',
      portrayalStatus: 'needs-review',
      reviewNote: 'Human release owner, not an AI Guide. TODO: approve public portrayal and scene before adding an encounter. No portrait copied.',
    },
    {
      id: 'volta', name: 'Volta', kind: 'crew',
      identitySource: 'VOLTA.jpeg; lib/classroom/lessons/crew-intro/introduction.md',
      portrayalStatus: 'needs-review',
      reviewNote: 'Name is clear; legacy lesson model/role claims are not reused. TODO: confirm current canon and teaching role. No portrait copied.',
    },
    {
      id: 'keelforge', name: 'Keelforge', kind: 'crew',
      identitySource: 'WEBSITE_LAUNCH_COMMAND.md; README.md',
      portrayalStatus: 'needs-review',
      reviewNote: 'Technical integration ownership is current. TODO: reconcile Codex/Keelforge depiction before a separate scene. No inferred portrait.',
    },
  ],
  sources: [
    { id: 'launch', label: 'Epyon website launch command, October 9, 2026 (repository)' },
    { id: 'content', label: 'Epyon first-release content draft (repository; not publication approval)' },
    {
      id: 'nist', label: 'NIST: AI Risk Management Framework and Generative AI Profile',
      href: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
    { id: 'activity', label: 'Original EAIU preview activity; fictional examples, no personal data' },
  ],
  triggers: [
    { id: 'arrival', label: 'Arrival', sceneId: 'arrival', requiresCompleted: [] },
    { id: 'classroom', label: 'Classroom', sceneId: 'ai-basics', requiresCompleted: ['arrival'] },
    { id: 'pathways', label: 'Pathways', sceneId: 'skill-map', requiresCompleted: ['arrival'] },
    { id: 'libraries', label: 'Resource desk', sceneId: 'resource-desk', requiresCompleted: ['arrival'] },
  ],
  scenes: [
    scene({
      id: 'arrival', guideId: 'chatgpt', location: 'Arrival / first encounter',
      title: 'One question opens a pathway.',
      invitation: 'Welcome aboard. You do not need to meet the whole Crew at once. Start with what you want to understand.',
      paragraphs: [
        'Epyon AI University is building approachable AI education and practical learning pathways. Epyon Pathways is the workforce program; Pathfinder is the application in development.',
        'Here, the Crew are illustrated learning Guides. These encounters are written examples, not a live AI chat. People remain responsible for teaching, review, and decisions.',
      ],
      takeaway: 'You choose a direction. A Guide helps you practice one small step.',
      task: {
        label: 'Find your starting point',
        instruction: 'Think of one everyday thing you would like help learning. Keep it general; you do not need to type or share anything.',
        evidence: 'A learning goal you can say in one sentence.',
      },
      choices: [
        { id: 'ask', label: 'Help me ask a useful question', hint: 'Start at the practice desk.', feedback: 'A small, specific request gives you something you can check. Copilot is at the next desk.', target: 'asking', completesScene: true },
        { id: 'basics', label: 'First, what does AI actually do?', hint: 'Stay here for the foundations.', feedback: 'Curiosity is enough to begin. Let’s separate a useful draft from a verified answer.', target: 'ai-basics', completesScene: true },
      ],
      sourceIds: ['launch', 'content', 'activity'],
    }),
    scene({
      id: 'ai-basics', guideId: 'chatgpt', location: 'Classroom / foundations',
      title: 'A fluent answer is not proof.',
      invitation: 'A generative AI system makes new text, images, or other content from patterns learned during training and the input it receives.',
      paragraphs: [
        'A text model produces a response based on patterns and context. It can produce useful drafts, but it can also invent details, repeat biases, or misunderstand your request.',
        'Some tools can search or use documents; do not assume every answer was checked against a current source. For important decisions, consult reliable sources and a qualified person.',
      ],
      takeaway: 'Treat an AI answer as a starting point to examine, not authority to obey.',
      task: {
        label: 'Try a two-minute check',
        instruction: 'Imagine an AI says “Every library has a free recording studio.” What would you need to verify before going?',
        evidence: 'One question about equipment, eligibility, cost, or booking.',
      },
      choices: [
        { id: 'verify', label: 'Find out how to check a claim', hint: 'Meet a Guide at the source desk.', feedback: 'Confidence and evidence are different. Next, look for the original source.', target: 'source-check', completesScene: true },
        { id: 'privacy', label: 'What should I keep out of a prompt?', hint: 'Take the privacy route.', feedback: 'You can practice without sharing real records. Claude has a fictional example ready.', target: 'privacy', completesScene: true },
      ],
      sourceIds: ['nist', 'launch', 'activity'],
    }),
    scene({
      id: 'asking', guideId: 'copilot', location: 'Classroom / practice desk',
      title: 'Give your question a shape.',
      invitation: 'Try a goal, useful context, and the form of answer you need.',
      paragraphs: [
        'For example: “I am new to spreadsheets. Explain what a row and a column are, then give me one fictional practice task. Use three short steps.”',
        'You can ask for simpler language, an example, or a smaller step. A clearer request can help, but it does not guarantee a correct answer.',
      ],
      takeaway: 'Ask for a manageable task and a way to check your work.',
      task: {
        label: 'Shape a request',
        instruction: 'Say your goal, one non-private detail about your starting point, and your preferred format. No AI account is needed.',
        evidence: 'A sample request with a goal, context, and format.',
      },
      choices: [
        { id: 'practice', label: 'Use AI as a practice partner', hint: 'Try a small fictional exercise.', feedback: 'Practice works best when you attempt the task, then check the feedback.', target: 'practice', completesScene: true },
        { id: 'privacy', label: 'Check my privacy boundaries first', hint: 'Practice safely before using a tool.', feedback: 'Keep real identities and records out of a practice request.', target: 'privacy', completesScene: true },
      ],
      sourceIds: ['nist', 'activity'],
    }),
    scene({
      id: 'privacy', guideId: 'claude', location: 'Classroom / privacy checkpoint',
      title: 'Keep the practice. Leave the private data.',
      invitation: 'An imaginary example can teach the same skill without exposing a real person.',
      paragraphs: [
        'Do not paste passwords, banking details, private health records, or someone else’s personal information into a general AI tool. Check the tool’s data settings and your organization’s rules.',
        'Instead of a real client record, use a made-up task: “A fictional shop has 12 orders. Help me organize a simple table.” This preview has no chat box and collects no exercise answers.',
      ],
      takeaway: 'Use fictional examples and the minimum information needed.',
      task: {
        label: 'Choose a safer example',
        instruction: 'Which would you use to practice organizing a table?',
        evidence: 'A fictional task rather than a private record.',
      },
      choices: [
        { id: 'real', label: 'A real client’s private record', hint: 'Consider what it could expose.', feedback: 'Pause. A real record can reveal someone’s private information. Use made-up data instead; you can try again.', target: 'privacy', completesScene: false },
        { id: 'fictional', label: 'Made-up orders for a fictional shop', hint: 'No names or private details.', feedback: 'That keeps the learning task without exposing a person. Next, try a practice exchange.', target: 'practice', completesScene: true },
      ],
      sourceIds: ['nist', 'activity'],
    }),
    scene({
      id: 'source-check', guideId: 'perplexity', location: 'Classroom / source desk',
      title: 'Follow the claim to its source.',
      invitation: 'A link is a lead, not a guarantee. Open the original source and check what it actually says.',
      paragraphs: [
        'Check who published it, when it was updated, and whether it supports the exact claim. AI-generated citations can be wrong or point to a page that says something different.',
        'For a local resource, use the provider’s current information and confirm unclear details with staff. A place on a map is not proof that a service is available to you.',
      ],
      takeaway: 'Check the source, the date, and the fit for your situation.',
      task: {
        label: 'Build a checking habit',
        instruction: 'For “This library offers recording equipment,” name the source you would check and one detail you would ask staff to confirm.',
        evidence: 'An official source plus a question about actual access.',
      },
      choices: [
        { id: 'resources', label: 'Take that habit to the resource desk', hint: 'Plan access before a visit.', feedback: 'A useful referral includes what is known and what still needs confirmation.', target: 'resource-desk', completesScene: true },
        { id: 'practice', label: 'Practice checking AI feedback', hint: 'Learn without relying on the answer.', feedback: 'Feedback is another claim to examine. Bring your checking habit to a practice task.', target: 'practice', completesScene: true },
      ],
      sourceIds: ['nist', 'launch', 'activity'],
    }),
    scene({
      id: 'practice', guideId: 'gemini', location: 'Classroom / practice corner',
      title: 'Try first. Ask for a hint.',
      invitation: 'A practice partner can offer questions and examples. Your own attempt is still the important part.',
      paragraphs: [
        'A sample request is: “Give me one fictional customer-service question. Wait for my attempt, then offer one improvement and explain why.”',
        'AI feedback may be mistaken. Compare it with the task instructions or ask a human coach. This scripted preview does not evaluate your work or award a credential.',
      ],
      takeaway: 'Use hints to build a skill, not to skip understanding it.',
      task: {
        label: 'Rehearse a reply',
        instruction: 'Imagine a customer asks where to find an order number. Say a polite reply without requesting private information.',
        evidence: 'Your own short reply and one thing you would check.',
      },
      choices: [
        { id: 'skills', label: 'Connect practice to a job skill', hint: 'Visit the Pathways desk.', feedback: 'A task from a job posting can become a small, safe practice exercise.', target: 'skill-map', completesScene: true },
        { id: 'check', label: 'Revisit the source-checking habit', hint: 'Look more closely at feedback.', feedback: 'You can take another route whenever you want. Let’s return to evidence.', target: 'source-check', completesScene: true },
      ],
      sourceIds: ['nist', 'activity'],
    }),
    scene({
      id: 'skill-map', guideId: 'copilot', location: 'Pathways / skills desk',
      title: 'Turn a requirement into a next step.',
      invitation: 'A job posting is a list of tasks to understand, not a verdict about your potential.',
      paragraphs: [
        'Fictional requirement: “Organize orders in a spreadsheet.” Skill: create a simple table, use clear headings, and check entries. Practice: arrange five made-up orders.',
        'Epyon Pathways is developing workforce learning routes. Human coaching and practical access matter alongside AI practice. Training does not guarantee employment or a professional license.',
      ],
      takeaway: 'Requirement → skill → small practice task → evidence of your work.',
      task: {
        label: 'Make a mini skill map',
        instruction: 'Choose one ordinary task, name the skill behind it, and suggest a fictional practice example. Do not upload a résumé or client record.',
        evidence: 'A skill and a sample task you can explain.',
      },
      choices: [
        { id: 'access', label: 'What if I need equipment or time?', hint: 'Explore practical access questions.', feedback: 'A missing tool or booking window can change the next step. Plan around access, not just the lesson.', target: 'resource-desk', completesScene: true },
        { id: 'reflection', label: 'Bring the learning back to the Crew', hint: 'Finish with a short reflection.', feedback: 'What you can explain matters more than how many buttons you have pressed.', target: 'reflection', completesScene: true },
      ],
      sourceIds: ['launch', 'content', 'activity'],
    }),
    scene({
      id: 'resource-desk', guideId: 'grok', location: 'Resource desk / planning a visit',
      title: 'Check the door before you travel.',
      invitation: 'A library may offer useful tools. Find out what this particular location actually provides.',
      paragraphs: [
        'Ask about card eligibility, public access, costs, opening hours, equipment, software, reservations, training, and accessibility. A university library can have different visitor rules from a public library.',
        'Epyon is planning library outreach and resource assessment. Outreach targets are not confirmed partners. This preview does not verify facilities, make bookings, or show live availability.',
      ],
      takeaway: 'A good plan names both the resource and the conditions for using it.',
      task: {
        label: 'Prepare three questions',
        instruction: 'Pick three things to confirm before a fictional library visit, such as “Can I use this computer?” and “Do I need a reservation?”',
        evidence: 'Three access questions, not an assumed promise of equipment.',
      },
      choices: [
        { id: 'reflect', label: 'I have questions ready. Wrap up.', hint: 'Meet Codex and Patch for a reflection.', feedback: 'You now have a way to check a resource instead of relying on a broad claim.', target: 'reflection', completesScene: true },
        { id: 'skill', label: 'Return to the skill I want to practice', hint: 'Connect access with your goal.', feedback: 'Knowing the task helps you ask which equipment or support is actually needed.', target: 'skill-map', completesScene: true },
      ],
      sourceIds: ['launch', 'content', 'activity'],
    }),
    scene({
      id: 'reflection', guideId: 'codex-patch', location: 'Crew / reflection',
      title: 'Keep one useful habit.',
      invitation: 'Codex the Coder and Patch appear in Epyon’s learning stories. Here, they invite you to carry one habit into your next task.',
      paragraphs: [
        'You might choose a clearer question, a fictional practice example, or a check against an original source. You can replay another route to meet a different Guide.',
        'This is a preview checkpoint, not a completed course or proof of skill. New scenes and program content still need human review before publication.',
      ],
      takeaway: 'Stay curious. Protect private information. Check important answers.',
      task: {
        label: 'Explain it in your own words',
        instruction: 'Name one habit you will use and one situation where you would ask a person for help. Nothing is submitted.',
        evidence: 'A personal reflection you keep for yourself.',
      },
      choices: [
        { id: 'finish', label: 'Finish this preview route', hint: 'Keep local progress and replay later.', feedback: 'Route finished. Your checkpoints only record the choices you acknowledged—not an assessment of your skills.', target: null, completesScene: true },
        { id: 'another', label: 'Try the question-building route', hint: 'Keep progress; explore another branch.', feedback: 'There is more than one way through. Copilot will help shape a small request.', target: 'asking', completesScene: true },
      ],
      sourceIds: ['content', 'activity'],
    }),
  ],
};
