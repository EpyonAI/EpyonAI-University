export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Hero"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow accents */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          Virtual Nonprofit Campus · Atlanta, GA &amp; Beyond
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-balance leading-[1.1]">
          Knowledge{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Made Real
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          EpyonAI University adapts technical content into formats real people
          can understand — making AI, tech skills, and knowledge accessible to
          every community.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="btn-primary text-base px-8 py-4">
            Explore Our Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#mission" className="btn-secondary text-base px-8 py-4">
            Our Story
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '6+', label: 'Active Projects' },
            { value: '100%', label: 'Open Source' },
            { value: 'Nonprofit', label: 'Mission-Driven' },
            { value: 'ATL', label: 'Community Roots' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
