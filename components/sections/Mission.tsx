const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Accessible by Design',
    description:
      'We start with the people who are most often left out of the conversation — not as an afterthought, but as the foundation of everything we build.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Adapt, Don\u2019t Duplicate",
    description:
      'Technical content exists — we transform it. Our adaptation process turns dense, jargon-heavy material into formats that meet learners where they are.',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Community-Powered',
    description:
      'Epyon\'s Crew — learners, educators, technologists, and community partners — collectively build, test, and deploy knowledge for the people who need it most.',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2
            id="mission-heading"
            className="section-title mt-2 mb-4"
          >
            Why EpyonAI University Exists
          </h2>
          <p className="section-subtitle">
            Knowledge has never been the problem. Access has.
          </p>
        </div>

        {/* Story text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              EpyonAI University was born from a simple observation: technical
              knowledge — about AI, about data, about the digital economy — is
              transforming the world, but the people most affected by that
              transformation are often the least equipped to participate in it.
            </p>
            <p>
              We are a <strong className="text-slate-800">virtual nonprofit campus</strong> rooted
              in Atlanta, GA. Our mission is to break down the walls between
              technical expertise and the communities who need it most — through
              adapted content, open-source tools, library partnerships, and
              workforce programs that meet people exactly where they are.
            </p>
            <p>
              We don&apos;t believe in one-size-fits-all education. We believe in{' '}
              <strong className="text-slate-800">adaptation</strong> — taking
              complex ideas and reshaping them until they click for the person
              sitting across from you.
            </p>
          </div>

          {/* Visual accent */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-violet-900 p-8 text-white">
              <blockquote className="text-xl sm:text-2xl font-medium italic leading-relaxed mb-6">
                &ldquo;A virtual nonprofit campus where knowledge is made
                accessible to all who seek it by adapting technical content into
                formats real people can understand.&rdquo;
              </blockquote>
              <cite className="text-violet-300 text-sm not-italic">
                — EpyonAI University Mission Statement
              </cite>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full opacity-80" aria-hidden="true" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-violet-500 rounded-full opacity-80" aria-hidden="true" />
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card group hover:border-violet-200"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} text-white mb-5`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
