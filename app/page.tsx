const projectLinks = {
  patch: {
    live: 'https://epyonai.github.io/patch/',
    github: 'https://github.com/EpyonAI/patch',
  },
  pathfinder: {
    live: 'https://project-dq4w2.vercel.app',
    github: 'https://github.com/EpyonAI/Pathfinder',
  },
  compass: {
    live: 'https://compass.epyonai.org',
    github: 'https://github.com/EpyonAI/Compass-News-Network-',
  },
  kirby: {
    live: 'https://chef-kirby.vercel.app',
    github: 'https://github.com/EpyonAI/ChefKirby',
  },
  classroom: {
    live: '#classroom',
    github: 'https://github.com/EpyonAI/EpyonAI-University',
  },
};

const projects = [
  {
    name: 'Patch & Friends',
    status: 'Kids AI safety',
    summary:
      'A multimedia learning world where Codex the Coder and Patch help children understand AI safety, privacy, bias, creativity, and ethical collaboration.',
    links: projectLinks.patch,
  },
  {
    name: 'Pathfinder',
    status: 'Career navigation demo',
    summary:
      'A guide system for learners who need a practical path to skills, jobs, local resources, and next steps that meet them where they are.',
    links: projectLinks.pathfinder,
  },
  {
    name: 'Compass News Network',
    status: 'Context-first news',
    summary:
      'A news and knowledge project focused on reducing spin, preserving source context, and making current events easier to understand.',
    links: projectLinks.compass,
  },
  {
    name: 'Chef Kirby',
    status: 'Hands-on skills',
    summary:
      'A cooking and life-skills pathway for people who learn best by doing, with room to grow into food, hospitality, and small business education.',
    links: projectLinks.kirby,
  },
  {
    name: 'The Classroom',
    status: 'Open learning hub',
    summary:
      'The EpyonAI University lesson base: adapted modules, plain-language explainers, and project-based learning for real communities.',
    links: projectLinks.classroom,
  },
];

const leaders = [
  {
    name: 'Michael "Captain" Campbell, CPA',
    role: 'Founder and Executive Director',
    bio: 'Michael Campbell founded EpyonAI University to make AI education, technical knowledge, and opportunity pathways accessible to learners who are too often left out of traditional systems.',
  },
  {
    name: 'KeelForge',
    role: 'Lead Engineer and Codex the Coder',
    bio: 'KeelForge helps turn EpyonAI University ideas into working software, classroom experiences, and public project infrastructure for the Epyon crew.',
  },
  {
    name: 'Patch',
    role: 'Youth AI Safety Guide',
    bio: 'Patch is the public story guide for Patch & Friends, helping younger learners explore AI safety and ethics through friendly, age-appropriate adventures.',
  },
];

const donationOptions = [
  {
    name: 'GoFundMe',
    description:
      'Support launch costs, youth AI safety materials, community workshops, and nonprofit education infrastructure.',
    href: '#contact',
    note: 'Add campaign link',
  },
  {
    name: 'PayPal',
    description:
      'Make a direct contribution once the official EpyonAI University nonprofit payment link is connected.',
    href: '#contact',
    note: 'Add PayPal link',
  },
  {
    name: 'GitHub',
    description:
      'Contribute code, issues, documentation, design feedback, or project review through the EpyonAI organization.',
    href: 'https://github.com/EpyonAI',
    note: 'Open source help',
  },
];

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{children}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-[#070b12] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,18,0.98)_0%,rgba(7,11,18,0.84)_42%,rgba(7,11,18,0.42)_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070b12] to-transparent" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[92svh] items-center px-5 py-28 sm:px-8 lg:px-12">
          <div className="max-w-6xl">
            <p className="mb-6 inline-flex border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">
              501(c)(3) nonprofit education studio
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              EpyonAI University
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200 sm:text-2xl">
              We adapt AI, technology, and opportunity knowledge into forms real
              people can use: kid-safe stories, career pathways, plain-language
              news, hands-on skills, and open classroom tools.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#projects">
                Explore projects <ArrowIcon />
              </a>
              <a className="btn-secondary" href="#donate">
                Support the mission
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-[#070b12] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionIntro eyebrow="Mission" title="Access is the work.">
            EpyonAI University exists to democratize knowledge for learners who
            are blocked by format, cost, literacy gaps, disability, time, trauma,
            or lack of institutional access. We do not just publish information;
            we reshape it into pathways people can actually finish.
          </SectionIntro>
          <div className="border-l border-cyan-300/40 pl-7 text-slate-300">
            <p className="text-2xl font-semibold leading-9 text-white">
              EpyonAI University is recognized as a 501(c)(3) nonprofit
              organization.
            </p>
            <p className="mt-5 leading-7">
              Our public benefit mission centers on AI safety education,
              workforce access, content adaptation, and human-machine
              collaboration for communities that need practical opportunity.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-100 px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
              Project summaries
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Five doors into the campus.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Each project serves a different learner moment, from early AI
              safety to adult reskilling. The common thread is adaptation:
              translating useful knowledge into formats that match real lives.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                  {project.status}
                </p>
                <h3 className="mt-4 text-2xl font-black">{project.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="text-link" href={project.links.live} target={project.links.live.startsWith('http') ? '_blank' : undefined} rel={project.links.live.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    Visit <ArrowIcon />
                  </a>
                  <a className="text-link" href={project.links.github} target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="classroom" className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div
            className="min-h-[420px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
            }}
            role="img"
            aria-label="A laptop in a learning workspace"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              The Classroom
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Built for learners who need a different route.
            </h2>
            <div className="mt-8 grid gap-6 text-slate-700 sm:grid-cols-2">
              <p className="leading-7">
                We turn long courses, technical documents, and complex tools
                into short lessons, checklists, games, dialogue scripts, and
                guided pathways.
              </p>
              <p className="leading-7">
                The goal is not easier knowledge. The goal is fairer access to
                hard knowledge, with enough support for more people to use it.
              </p>
            </div>
            <a className="btn-dark mt-10" href="https://github.com/EpyonAI/EpyonAI-University" target="_blank" rel="noopener noreferrer">
              View classroom source <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-[#080e1a] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Leadership" title="Human led. AI assisted. Mission accountable.">
            EpyonAI University is organized around a simple operating belief:
            humans and intelligent systems can build better public-interest
            tools together when the mission stays visible.
          </SectionIntro>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.name} className="bio-card">
                <h3 className="text-xl font-black">{leader.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {leader.role}
                </p>
                <p className="mt-5 leading-7 text-slate-300">{leader.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="bg-slate-100 px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
                Donations
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Help us make useful knowledge reachable.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Donations support child-safe AI literacy, learner-centered
                career pathways, open-source education infrastructure, and
                community programs. Official GoFundMe and PayPal links can be
                dropped into this section as soon as they are ready.
              </p>
            </div>
            <div className="grid gap-4">
              {donationOptions.map((option) => (
                <a key={option.name} className="donation-row" href={option.href} target={option.href.startsWith('http') ? '_blank' : undefined} rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span>
                    <span className="block text-xl font-black">{option.name}</span>
                      <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {option.description}
                    </span>
                  </span>
                  <span className="text-sm font-bold text-violet-700">{option.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#070b12] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <SectionIntro eyebrow="Contact" title="Bring us a learner, partner, project, or problem.">
            EpyonAI University is building in public where we can and in service
            of the communities that need practical tools now.
          </SectionIntro>
          <div className="contact-panel">
            <a href="mailto:contact@epyonai.org" className="contact-link">
              contact@epyonai.org
            </a>
            <a href="https://github.com/EpyonAI" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/EpyonAI
            </a>
            <a href="https://www.epyonai.org" className="contact-link">
              www.epyonai.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
