"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { PROJECTS } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Systems &amp; products built end-to-end.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
              From concurrent FinTech wallets and edge-native publishing platforms to enterprise
              FastMCP AI tooling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                project.featured
                  ? "border-border bg-surface/90 hover:border-accent/50"
                  : "border-border bg-surface/70 hover:border-accent/35"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                    <Layers className="h-3.5 w-3.5 shrink-0" />
                    {project.category}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-muted">{project.period}</span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="inline-flex items-center gap-1 rounded-lg bg-accent px-2.5 py-1 text-xs font-medium text-on-accent hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-elevated px-2.5 py-1 text-xs text-foreground hover:border-accent/50 transition-colors"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>Code</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-muted mt-0.5">{project.tagline}</p>

                <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Row */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-border bg-surface-elevated/80 px-3 py-2"
                    >
                      <div className="font-mono text-xs sm:text-sm font-semibold text-foreground">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-muted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-border/70 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface-elevated border border-border px-2 py-0.5 font-mono text-[11px] text-foreground/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
