export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  title: string;
  tagline: string;
  category: string;
  period: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SportItem {
  name: string;
  role: string;
  vibe: string;
  stat: string;
  iconName: "cricket" | "football" | "badminton" | "tabletennis";
}

export const PERSONAL_INFO = {
  name: "Sahil Singh",
  role: "Software Engineer",
  company: "MediaTek",
  location: "Noida, India",
  email: "shahilsingh456@gmail.com",
  github: "https://github.com/shahilsingh546",
  linkedin: "https://www.linkedin.com/in/sahil-singh-1474b1228",
  headline: "I build resilient backends, AI automation, and products from zero to one.",
  subheadline:
    "Software Engineer with 2+ years of experience at MediaTek shipping Python & TypeScript systems, FastMCP AI tools adopted by 10+ teams, and real-time dashboards for 50+ concurrent users. Currently building CareerOS—a Chrome Extension & job-search dashboard—and unwinding after office with chess and sports.",
};

export const HERO_METRICS = [
  { value: "80%", label: "Fewer customer issues via PyTest & fixes" },
  { value: "99%+", label: "Faster config & script authoring with AI" },
  { value: "10+", label: "Teams using FastMCP AI marketplace tools" },
  { value: "300+", label: "DSA problems solved across platforms" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "MediaTek India Pvt. Ltd.",
    role: "Software Engineer",
    period: "July 2024 – Present",
    location: "Noida / Bengaluru, India",
    current: true,
    summary:
      "Architecting high-reliability Python backends, AI/LLM automation platforms, and real-time global monitoring dashboards.",
    highlights: [
      "Architected and maintained a 10K+ line Python backend exposing 15+ REST APIs; cut customer-reported issues by 80% through bug fixes and PyTest unit testing (85% code coverage).",
      "Designed an AI-powered automation platform on FastMCP with reusable API architecture; shipped STDIO and Streamable HTTP transports to the internal AI marketplace, adopted by 10+ teams.",
      "Engineered an AI-assisted script generator converting natural-language test scenarios into executable scripts, slashing authoring time from 8 hours to 3–4 minutes (~99% faster).",
      "Automated network configuration profile generation with a Flask web app parsing large log files, compressing a 3–4 hour manual process to seconds.",
      "Integrated enterprise LLM services to automate parameter validation and optimization recommendations, eliminating 70% of manual review.",
      "Launched a global KPI monitoring dashboard (Python, React, Node.js, MySQL) serving 50+ concurrent users with real-time network metrics across 4+ regions, plus a React/Express verification analytics dashboard saving 10+ hrs/week.",
    ],
    stack: ["Python", "FastMCP", "Flask", "React", "Node.js", "Express.js", "MySQL", "PyTest", "LLM APIs"],
  },
  {
    company: "Ericsson",
    role: "Software Development Engineer",
    period: "March 2023 – September 2023",
    location: "Noida, India",
    summary:
      "Full-stack engineering and automation lifecycle integration across telecom software workflows.",
    highlights: [
      "Delivered front-end and back-end features using JavaScript, ReactJS, Styled Components, EXT JS, Groovy, and SQL.",
      "Collaborated on API integrations, data verification pipelines, and Agile/waterfall automation lifecycle delivery.",
    ],
    stack: ["ReactJS", "JavaScript", "EXT JS", "Groovy", "SQL", "Styled Components"],
  },
  {
    company: "Octro Inc.",
    role: "Software Engineer Intern",
    period: "August 2022 – October 2022",
    location: "Noida, India",
    summary:
      "Built client-side multiplayer game systems and architecture documentation for mobile and web.",
    highlights: [
      "Implemented client-side features for multiplayer games using the C++-based Cocos2dx engine across mobile and web.",
      "Built interactive UI components, handled real-time server data, and authored comprehensive HLD/API documentation.",
    ],
    stack: ["C++", "Cocos2dx", "Multiplayer Systems", "UI Architecture"],
  },
  {
    company: "Desi QnA",
    role: "Software Engineer Intern",
    period: "March 2022 – June 2022",
    location: "Remote",
    summary:
      "Solved production anti-abuse and bot-mitigation challenges at scale.",
    highlights: [
      "Mitigated 1,000+ spam registrations and fake bot posts by combining HashMap-based detection with Google reCAPTCHA.",
      "Improved request filtering reliability through data-structure optimization and situational analysis.",
    ],
    stack: ["Data Structures", "HashMap", "Google reCAPTCHA", "Anti-Spam"],
  },
  {
    company: "ALTTC (Advanced Level Telecom Training Center)",
    role: "Summer Intern",
    period: "July 2022 – August 2022",
    location: "Greater Noida, India",
    summary:
      "Hands-on telecom systems and networking fundamentals training.",
    highlights: [
      "Explored core telecom infrastructure, network protocols, and enterprise switching systems.",
    ],
    stack: ["Telecom Systems", "Networking"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "CareerOS",
    tagline: "Chrome Extension + Job Search Dashboard (Currently Building · Beta Cohort #1)",
    category: "Currently Building · Full-Stack",
    period: "Beta Waitlist",
    featured: true,
    description:
      "A human-in-the-loop Chrome Extension and web dashboard that automates job-search busywork—1-click form autofill, 100% honest resume tailoring from your verified career bank & GitHub repos, referral/cold-email drafting, and Gmail interview tracking.",
    metrics: [
      { label: "Job Portals", value: "6+ Supported" },
      { label: "Resume", value: "100% Verified" },
      { label: "Stage", value: "Beta Cohort #1" },
    ],
    highlights: [
      "1-Click Form Autofill built for Indian & global hiring (Naukri, Instahyre, Wellfound, Workday, Greenhouse, Lever), including Notice Period, Current/Expected CTC, and relocation fields.",
      "Verified Resume Tailoring that reorders & rewords bullets strictly from your saved career bank and GitHub repos with source attribution—never hallucinating skills or metrics.",
      "LinkedIn referral note generator, recruiter cold email drafts with 7-day follow-up reminders, resume keyword-gap scoring, and automatic Gmail interview invite detection.",
    ],
    stack: ["Next.js", "TypeScript", "Chrome Extension", "Tailwind CSS", "PostgreSQL", "Gmail & GitHub APIs"],
    githubUrl: "https://github.com/shahilsingh546",
    liveUrl: "https://career-os-neon.vercel.app/waitlist",
  },
  {
    title: "PaisaFlow",
    tagline: "Full-Stack Digital Wallet & Payment Reconciliation Platform",
    category: "FinTech · Full-Stack",
    period: "Featured Project",
    featured: true,
    description:
      "A production-grade digital wallet and merchant payments platform engineered for strict transactional consistency, concurrent transfer safety, and automated bank webhook reconciliation.",
    metrics: [
      { label: "REST Endpoints", value: "15+" },
      { label: "Concurrent Tests", value: "100 req · 0 errors" },
      { label: "Consistency", value: "Atomic ACID" },
    ],
    highlights: [
      "Built on Next.js with NextAuth authentication and 15+ REST endpoints powered by Express.js, Prisma, and PostgreSQL.",
      "Guaranteed zero balance inconsistencies using atomic PostgreSQL transactions verified under 100 concurrent transfer tests.",
      "Implemented a bank webhook handler that auto-reconciles external payment events; actively extending with a Merchant App for net-banking reconciliation.",
      "Hardened with JWT authorization, bcrypt hashing, and Zod schema validation; containerized with Docker and deployed to Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "NextAuth", "Zod", "Docker"],
    githubUrl: "https://github.com/shahilsingh546",
    liveUrl: "https://paisa-flow-user-app-88zd.vercel.app",
  },
  {
    title: "WriteFlow",
    tagline: "Edge-Native Private Publishing Platform",
    category: "Edge · Full-Stack",
    period: "Featured Project",
    featured: true,
    description:
      "A high-speed private publishing platform running on Cloudflare Workers with end-to-end type safety via a shared TypeScript/Zod monorepo package.",
    metrics: [
      { label: "Avg Latency", value: "<200 ms" },
      { label: "REST APIs", value: "15+" },
      { label: "Rate Limit", value: "100 req/min" },
    ],
    highlights: [
      "Exposed 15+ REST endpoints using Hono on Cloudflare Workers with Prisma ORM and PostgreSQL, achieving sub-200ms average response times.",
      "Authored a shared TypeScript & Zod validation package unifying contracts across frontend and backend codebases.",
      "Implemented role-based access control (2 user roles), owner-only content management, centralized error handling, and 100 req/min rate limiting.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Hono", "Cloudflare Workers", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/shahilsingh546",
    liveUrl: "https://writeflow-bjyt.vercel.app/",
  },
  {
    title: "FastMCP AI Automation Platform",
    tagline: "Enterprise AI Tooling & Natural-Language Script Generator",
    category: "AI / MCP · MediaTek",
    period: "Production @ MediaTek",
    description:
      "Reusable Model Context Protocol platform deployed to MediaTek's internal AI marketplace, empowering 10+ engineering teams to automate test authoring and parameter optimization.",
    metrics: [
      { label: "Adoption", value: "10+ Teams" },
      { label: "Authoring Time", value: "8h → 3–4m" },
      { label: "Transports", value: "STDIO + HTTP" },
    ],
    highlights: [
      "Built reusable Python API architecture and boilerplate supporting both STDIO and Streamable HTTP MCP transports.",
      "Converted natural-language test scenarios into executable automation scripts, cutting authoring time by ~99%.",
      "Integrated enterprise LLM services for automated parameter validation, eliminating 70% of manual review.",
    ],
    stack: ["Python", "FastMCP", "Streamable HTTP", "STDIO", "Enterprise LLMs", "OpenAPI"],
  },
  {
    title: "Global KPI & Verification Dashboards",
    tagline: "Real-Time Telemetry Across 4+ Global Regions",
    category: "Systems & Analytics · MediaTek",
    period: "Production @ MediaTek",
    description:
      "Real-time analytics and KPI monitoring suite replacing manual Excel workflows with live backend parsers and anomaly visibility.",
    metrics: [
      { label: "Concurrent Users", value: "50+" },
      { label: "Regions", value: "4+ Global" },
      { label: "Time Saved", value: "10+ hrs/wk" },
    ],
    highlights: [
      "Built backend log/data parsers and REST APIs in Python & Node.js backed by MySQL.",
      "Delivered interactive React visualizations for verification stats and live network health monitoring.",
    ],
    stack: ["React", "Python", "Node.js", "Express.js", "MySQL", "Flask"],
  },
];

export const SPORTS_AFTER_OFFICE: SportItem[] = [
  {
    name: "Cricket",
    role: "Strategy & Clutch Finishes",
    vibe: "Reading the pitch, rotating strike, and thriving in tight chases after work.",
    stat: "Weekend & Evening Matches",
    iconName: "cricket",
  },
  {
    name: "Football",
    role: "Pace & Team Transitions",
    vibe: "High-tempo turf sessions—quick one-twos, spatial awareness, and non-stop stamina.",
    stat: "Turf 5v5 / 7v7",
    iconName: "football",
  },
  {
    name: "Badminton",
    role: "Reflexes & Court Coverage",
    vibe: "Deceptive drops, fast net exchanges, and footwork drills to reset after deep coding.",
    stat: "Singles & Doubles",
    iconName: "badminton",
  },
  {
    name: "Table Tennis",
    role: "Spin & Micro-Second Reads",
    vibe: "Office break-room rallies—rapid topspin loops and split-second reaction speed.",
    stat: "After-Hours Rallies",
    iconName: "tabletennis",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS", "Context API", "Recoil", "Vite"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "Hono", "Flask", "REST APIs", "FastMCP", "JWT / NextAuth", "Zod"],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Neon DB"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "AWS EC2", "Nginx", "Cloudflare Workers", "Vercel"],
  },
  {
    title: "Engineering & AI",
    items: ["System Design", "API Design", "DSA (300+)", "PyTest", "LLM Integration", "OpenAPI", "Git"],
  },
];

export const ACHIEVEMENTS = [
  "Won 2 WE Awards (MediaTek internal awards) for innovation and creativity",
  "Won MediaTek's internal AI Hackathon with my AI tool (10,000 NTD prize)",
  "5-Star HackerRank rating; solved 300+ DSA coding questions across LeetCode & GeeksforGeeks",
  "Ranked 713 in GeeksforGeeks Job-a-thon 8.0 hiring contest (2022)",
  "Ranked 822 in Codathon by NIT Bhopal",
];

export const EDUCATION = {
  school: "GL Bajaj Institute of Technology and Management",
  location: "Greater Noida, U.P.",
  degree: "B.Tech in Electronics and Communication Engineering",
  period: "2019 – 2023",
  cgpa: "8.17",
};
