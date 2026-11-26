"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu } from "lucide-react";
import { EDUCATION, SKILL_CATEGORIES } from "@/data/portfolio";

export function SkillsAndEducation() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Technical Stack &amp; Education
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Tools I reach for when building.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-2xl border border-border bg-surface/80 p-5"
            >
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm mb-3">
                <Cpu className="h-4 w-4 text-accent" />
                <span>{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface-elevated/80 px-2.5 py-1 font-mono text-xs text-foreground/85 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-2xl border border-border bg-surface/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 border border-accent/35 text-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {EDUCATION.school}
              </h3>
              <p className="text-sm text-muted mt-0.5">{EDUCATION.degree}</p>
              <p className="text-xs font-mono text-muted/80 mt-1">
                {EDUCATION.location} · {EDUCATION.period}
              </p>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="inline-flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0 rounded-xl border border-border bg-surface-elevated px-4 py-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                CGPA
              </span>
              <span className="font-mono text-xl font-bold text-accent">
                {EDUCATION.cgpa}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
