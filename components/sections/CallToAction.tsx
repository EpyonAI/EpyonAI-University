export default function CallToAction() {
  return (
    <section
      id="cta"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-800 to-navy-900"
      aria-labelledby="cta-heading"
    >
      {/* Background dots pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          Open & Free for Everyone
        </span>

        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-balance leading-tight"
        >
          Ready to Join the{' '}
          <span className="text-cyan-300">Crew?</span>
        </h2>

        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you want to learn, contribute, partner, or build — there&apos;s
          a role for you at EpyonAI University. All knowledge, all community, all
          accessible.
        </p>

        {/* Action cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: '🎓',
              label: 'Learn',
              desc: 'Access free lessons and adapted content',
              href: '#projects',
            },
            {
              icon: '🛠️',
              label: 'Build',
              desc: 'Contribute to open-source projects',
              href: 'https://github.com/EpyonAI',
              external: true,
            },
            {
              icon: '🤝',
              label: 'Partner',
              desc: 'Bring EpyonAI University to your community',
              href: '#community',
            },
          ].map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            >
              <span className="text-3xl mb-3" role="img" aria-label={card.label}>
                {card.icon}
              </span>
              <span className="text-white font-bold text-lg mb-1">{card.label}</span>
              <span className="text-white/70 text-sm">{card.desc}</span>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="https://github.com/EpyonAI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-violet-800 text-lg bg-white hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Star Us on GitHub
        </a>
      </div>
    </section>
  );
}
