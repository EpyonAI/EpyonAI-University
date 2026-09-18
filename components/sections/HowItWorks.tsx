const steps = [
  {
    number: '01',
    title: 'Identify the Gap',
    description:
      'We surface where knowledge breaks down — which communities are underserved, which topics need translation, and where existing content fails real people.',
    color: 'bg-violet-600',
    lightColor: 'bg-violet-50 text-violet-700',
  },
  {
    number: '02',
    title: 'Adapt the Content',
    description:
      'Through Adaptathons, AI assistance, and community workshops, we transform technical material into accessible formats: guides, videos, interactive modules, and more.',
    color: 'bg-cyan-600',
    lightColor: 'bg-cyan-50 text-cyan-700',
  },
  {
    number: '03',
    title: 'Deploy Where It Counts',
    description:
      'We deploy adapted content through trusted community channels — libraries, workforce programs, online platforms — ensuring it reaches the people who need it most.',
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50 text-teal-700',
  },
  {
    number: '04',
    title: 'Iterate & Grow',
    description:
      'Learner feedback, community input, and real-world results drive continuous improvement. Our open-source model means the whole community contributes to what works.',
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50 text-amber-700',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            The Process
          </span>
          <h2
            id="how-it-works-heading"
            className="section-title mt-2 mb-4"
          >
            How It Works
          </h2>
          <p className="section-subtitle mx-auto">
            From raw technical content to accessible, deployed knowledge — four
            steps that drive everything we do.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-slate-200"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-full ${step.color} text-white text-lg font-bold flex items-center justify-center mb-5 shadow-lg`}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA area */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-violet-50 to-cyan-50 border border-violet-100 p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Ready to participate?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Whether you&apos;re a learner, an educator, a developer, or a
            community partner — there&apos;s a place for you in the process.
          </p>
          <a href="#cta" className="btn-primary">
            Get Involved
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
