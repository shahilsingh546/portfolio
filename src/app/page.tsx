import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoPersonality } from "@/components/BentoPersonality";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SkillsAndEducation } from "@/components/SkillsAndEducation";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground bg-dot-grid">
      <Navbar />
      <main>
        <Hero />
        <BentoPersonality />
        <Experience />
        <Projects />
        <SkillsAndEducation />
      </main>
      <ContactFooter />
    </div>
  );
}
