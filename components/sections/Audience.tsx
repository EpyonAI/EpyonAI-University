const audiences = [
  {
    emoji: '📚',
    title: 'Libraries & Library Systems',
    description:
      'We partner with public and community libraries to bring digital literacy and AI education programs directly into the spaces communities already trust and use.',
    highlights: ['Digital literacy workshops', 'AI awareness programs', 'Staff training resources'],
  },
  {
    emoji: '💼',
    title: 'Workforce Programs',
    description:
      'Job seekers, career changers, and workforce development organizations get practical AI and tech skills training designed for the modern job market.',
    highlights: ['Skill gap assessments', 'Career pathways', 'Employer partnerships'],
  },
  {
    emoji: '🎓',
    title: 'Learners Everywhere',
    description:
      'Self-directed learners, students, and curious minds who want to understand AI and technology without a CS degree or corporate training budget.',
    highlights: ['Self-paced lessons', 'Beginner-friendly content', 'Multiple formats'],
  },
  {
    emoji: '🤝',
    title: 'Nonprofits & Community Orgs',
    description:
      'Mission-driven organizations looking to leverage AI tools and data literacy to amplify their impact — without needing an in-house tech team.',
    highlights: ['AI tools overview', 'Grant writing support', 'Capacity building'],
  },
];

export default function Audience() {
  return (
    <section
      id="community"
      className="py-24 sm:py-32 bg-navy-900"
      aria-labelledby="community-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Who We Serve
          </span>
          <h2
            id="community-heading"
            className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4"
          >
            Our Community
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            EpyonAI University is for everyone — but especially for those who
            have historically been left out of tech education.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-200 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0" role="img" aria-label="">
                  {audience.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {audience.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {audience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-slate-300"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Crew section */}
        <div className="text-center rounded-2xl bg-gradient-to-r from-violet-900/60 to-cyan-900/40 border border-violet-500/20 p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Powered by Epyon&apos;s Crew
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Our work is collective. Developers, educators, community organizers,
            designers, and learners — the Crew builds the platform, creates the
            content, and drives the mission forward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/EpyonAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
            <a href="#cta" className="btn-primary">
              Join the Crew
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
