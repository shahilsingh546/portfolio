"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-surface/90 p-7 sm:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Let&apos;s Connect
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Open to backend, full-stack &amp; AI engineering conversations.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              Want to talk distributed systems, FinTech architecture, FastMCP tooling—or challenge
              me to a quick game of chess? Reach out anytime.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-accent">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-muted" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap items-center justify-end gap-4 text-xs text-muted">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
