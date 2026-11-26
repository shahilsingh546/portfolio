"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Shipping production systems at scale.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
            From 10K+ line Python backends and enterprise FastMCP AI tools at MediaTek to
            full-stack telecom automation at Ericsson and C++ multiplayer games at Octro.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:left-[15px] before:top-3 before:bottom-3 before:w-px before:bg-border">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-10 sm:pl-12"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full border-2 ${
                  exp.current
                    ? "border-accent bg-accent/30 shadow-[0_0_12px_var(--accent)]"
                    : "border-border bg-background"
                }`}
              />

              <div className="rounded-2xl border border-border bg-surface/75 p-5 sm:p-6 hover:border-accent/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      {exp.current && (
                        <span className="rounded-full bg-accent/15 border border-accent/35 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-medium text-accent">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-muted font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-muted/80" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-muted/80" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{exp.summary}</p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border bg-surface-elevated/80 px-2.5 py-1 font-mono text-[11px] text-foreground/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
