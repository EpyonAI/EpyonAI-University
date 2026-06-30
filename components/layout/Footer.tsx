import Link from 'next/link';

const footerLinks = {
  Projects: [
    { label: 'Adaptathon', href: '#projects' },
    { label: 'AI Skills & Agents', href: '#projects' },
    { label: 'Workforce Dev', href: '#projects' },
    { label: 'Library Systems', href: '#projects' },
    { label: 'Knowledge Curation', href: '#projects' },
    { label: 'Interactive Learning', href: '#projects' },
  ],
  Community: [
    { label: 'Join the Crew', href: '#cta' },
    { label: 'Our Mission', href: '#mission' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who We Serve', href: '#community' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/EpyonAI', external: true },
    { label: 'epyonai.org', href: 'https://www.epyonai.org', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="EpyonAI University home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-white text-lg leading-tight">
                EpyonAI{' '}
                <span className="text-cyan-400 font-light">University</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              A virtual nonprofit campus where knowledge is made accessible to
              all who seek it.
            </p>
            <p className="text-xs text-slate-500">
              🌎 Atlanta, GA &amp; Beyond
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} EpyonAI University. Licensed under{' '}
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Apache 2.0
            </a>
            .
          </p>
          <p className="text-slate-500">
            Built by{' '}
            <a
              href="https://github.com/EpyonAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Epyon&apos;s Crew
            </a>{' '}
            🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
