import Link from 'next/link';

const projectLinks = [
  { label: 'Patch', href: 'https://epyonai.github.io/patch/' },
  { label: 'Pathfinder', href: 'https://project-dq4w2.vercel.app' },
  { label: 'Compass News', href: 'https://compass.epyonai.org' },
  { label: 'Chef Kirby', href: 'https://chef-kirby.vercel.app' },
  { label: 'The Classroom', href: 'https://github.com/EpyonAI/EpyonAI-University' },
];

const siteLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050812] px-5 py-16 text-slate-400 sm:px-8 lg:px-12" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="EpyonAI University home">
            <span className="grid h-9 w-9 place-items-center bg-cyan-300 text-sm font-black text-slate-950">
              E
            </span>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-white">
              EpyonAI University
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7">
            A 501(c)(3) nonprofit adapting AI, technology, and opportunity
            knowledge into accessible learning pathways.
          </p>
          <p className="mt-6 text-xs">
            Copyright {new Date().getFullYear()} EpyonAI University. Built by
            the Epyon crew.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Site</h2>
          <ul className="mt-5 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.label}>
                <a className="text-sm transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Projects</h2>
          <ul className="mt-5 space-y-3">
            {projectLinks.map((link) => (
              <li key={link.label}>
                <a className="text-sm transition hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
