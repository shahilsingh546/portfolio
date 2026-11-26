"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Mindset", href: "#mindset" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
      <div
        style={{ backgroundColor: "var(--nav-bg)" }}
        className={`mx-auto max-w-5xl pointer-events-auto transition-all duration-300 rounded-2xl border backdrop-blur-xl ${
          scrolled ? "border-border shadow-2xl shadow-black/25" : "border-border/60"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 h-14">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 border border-accent/35 text-accent">
              <Terminal className="h-3.5 w-3.5" />
            </span>
            <span>sahil.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:inline-flex p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-xl bg-accent/15 border border-accent/35 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/25 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Say Hi</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-border/70 flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated/70 transition-colors"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-accent/15 border border-accent/35 px-3 py-1.5 text-xs font-medium text-accent"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Say Hi</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
