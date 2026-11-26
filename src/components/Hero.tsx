"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { HERO_METRICS, PERSONAL_INFO } from "@/data/portfolio";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[780px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {PERSONAL_INFO.role} @ {PERSONAL_INFO.company}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted">
            <MapPin className="h-3 w-3 text-accent-2" />
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-5"
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-accent">
            {PERSONAL_INFO.name} · Builder &amp; Problem Solver
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
            {PERSONAL_INFO.headline}
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {PERSONAL_INFO.subheadline}
          </p>
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 max-w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface-elevated transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-accent">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 sm:ml-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/70 px-3.5 py-2.5 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/70 px-3.5 py-2.5 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Impact Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface/80 p-4 sm:p-5 backdrop-blur-sm hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  {metric.value}
                </span>
                <Sparkles className="h-4 w-4 text-accent-2/80" />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
