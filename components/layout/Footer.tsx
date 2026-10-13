import Image from "next/image";
import Link from "next/link";

const projectLinks = [
  { label: "Epyon Pathways", href: "/pathways" },
  { label: "PATCH & Friends", href: "/patch" },
  { label: "Compass News", href: "/compass-news" },
];

const siteLinks = [
  { label: "Mission", href: "/#mission" },
  { label: "About us", href: "/about" },
  { label: "Our progress", href: "/#progress" },
  { label: "Contact", href: "/#contact" },
  { label: "GitHub", href: "https://github.com/EpyonAI" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#050812] px-5 py-16 text-slate-400 sm:px-8 lg:px-12"
      role="contentinfo"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Epyon AI University home"
          >
            <Image
              src="/mission/eaiu-logo.png"
              alt=""
              width={36}
              height={40}
              className="h-10 w-9 object-contain"
            />
            <span className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Epyon AI University
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7">
            A Georgia 501(c)(3) educational nonprofit making learning accessible
            and helping people turn potential into opportunity.
          </p>
          <p className="mt-4 text-sm leading-7">EIN: 41-3985129</p>
          <p className="text-sm leading-7">Atlanta, Georgia, United States</p>
          <p className="mt-6 text-xs">
            Copyright {new Date().getFullYear()} Epyon AI University. Built by
            the Epyon crew.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Site
          </h2>
          <ul className="mt-5 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Programs
          </h2>
          <ul className="mt-5 space-y-3">
            {projectLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm transition hover:text-white"
                  href={link.href}
                >
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
