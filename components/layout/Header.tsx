"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/#programs", label: "Programs" },
  { href: "/pathways", label: "Pathways" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#070b12]/92 backdrop-blur-xl"
          : "bg-[#070b12]/95"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="EpyonAI University home"
        >
          <Image
            src="/mission/eaiu-logo.png"
            alt=""
            width={36}
            height={40}
            className="h-10 w-9 object-contain"
          />
          <span className="text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">
            EpyonAI
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/#programs"
          className="hidden border border-cyan-300/50 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 md:inline-flex"
        >
          Explore
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="text-xl font-black">{menuOpen ? "X" : "="}</span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#070b12]/96 px-5 py-5 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-3 text-sm font-semibold text-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
