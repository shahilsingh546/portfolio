"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Flame,
  Trophy,
  Zap,
  CircleDot,
  Shield,
  Wind,
  Disc,
} from "lucide-react";
import { SPORTS_AFTER_OFFICE, ACHIEVEMENTS, type SportItem } from "@/data/portfolio";
import { ChessPuzzle } from "./ChessPuzzle";

function SportIcon({ name }: { name: SportItem["iconName"] }) {
  switch (name) {
    case "cricket":
      return <Flame className="h-4 w-4 text-accent" />;
    case "football":
      return <CircleDot className="h-4 w-4 text-accent-2" />;
    case "badminton":
      return <Wind className="h-4 w-4 text-accent" />;
    case "tabletennis":
      return <Disc className="h-4 w-4 text-accent-2" />;
  }
}

export function BentoPersonality() {
  const [activeSport, setActiveSport] = useState<string>(SPORTS_AFTER_OFFICE[0].name);
  const currentSport =
    SPORTS_AFTER_OFFICE.find((s) => s.name === activeSport) ?? SPORTS_AFTER_OFFICE[0];

  return (
    <section id="mindset" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Builder Mindset &amp; After 6 PM
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            How I think, build, and recharge.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
            Whether it&apos;s designing atomic database transactions, debugging a 10K-line Python
            service, or playing a blitz endgame after work—I love hard problems and clean execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1: Builder & Problem Solver */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 rounded-2xl border border-border bg-surface/80 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-accent">
                <BrainCircuit className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Problem Solving &amp; Craft
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Turning manual bottlenecks into fast, reliable systems.
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                I enjoy building products from scratch—from schema design and atomic transactions to
                AI-assisted developer tooling. Right now, I&apos;m actively building{" "}
                <a
                  href="https://career-os-neon.vercel.app/waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
                >
                  CareerOS
                </a>
                , a Chrome Extension &amp; job-search dashboard for 1-click autofill, verified
                resume tailoring, referrals, and Gmail interview tracking.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-elevated/70 px-3.5 py-2.5 text-xs sm:text-sm text-foreground/90"
                >
                  <Trophy className="h-4 w-4 text-accent-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Interactive Chess Puzzle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="md:col-span-5 rounded-2xl border border-border bg-surface/80 p-6"
          >
            <ChessPuzzle />
          </motion.div>

          {/* Card 3: After-Office Sports Arena */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="md:col-span-7 rounded-2xl border border-border bg-surface/80 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-accent">
                  <Zap className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    After Office · Sports Arena
                  </span>
                </div>
                <span className="font-mono text-xs text-muted">6:30 PM onwards</span>
              </div>

              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Off the keyboard, onto the pitch &amp; court.
              </h3>

              {/* Interactive Sport Tabs */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SPORTS_AFTER_OFFICE.map((sport) => {
                  const isActive = sport.name === activeSport;
                  return (
                    <button
                      key={sport.name}
                      type="button"
                      onClick={() => setActiveSport(sport.name)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "border-accent/60 bg-accent/15 text-foreground"
                          : "border-border bg-surface-elevated/60 text-muted hover:text-foreground hover:border-accent/30"
                      }`}
                    >
                      <SportIcon name={sport.iconName} />
                      <span>{sport.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-surface-elevated/80 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {currentSport.name} — {currentSport.role}
                </span>
                <span className="font-mono text-[11px] rounded-md bg-surface border border-border px-2 py-0.5 text-muted">
                  {currentSport.stat}
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                {currentSport.vibe}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Architecture Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="md:col-span-5 rounded-2xl border border-border bg-surface/80 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-accent-2">
                <Code2 className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Engineering DNA
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Chess thinking in system design.
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Just like chess, great backend engineering is about calculating edge cases 3 moves
                ahead—idempotent webhooks, atomic transactions, strict Zod contracts, and high
                test coverage.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-border bg-surface-elevated/70 p-3">
                <Shield className="h-4 w-4 text-accent mb-1.5" />
                <div className="text-xs font-semibold text-foreground">Zero-Drift Types</div>
                <div className="text-[11px] text-muted">Shared TS + Zod contracts</div>
              </div>
              <div className="rounded-xl border border-border bg-surface-elevated/70 p-3">
                <Zap className="h-4 w-4 text-accent-2 mb-1.5" />
                <div className="text-xs font-semibold text-foreground">AI-First Workflows</div>
                <div className="text-[11px] text-muted">FastMCP &amp; LLM tooling</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
