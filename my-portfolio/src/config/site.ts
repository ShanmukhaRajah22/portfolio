export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type FreelanceProject = {
  title: string;
  category: string;
  description: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  fullStack: string[];
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type OpenSourceContribution = {
  title: string;
  repo: string;
  prNumber: number;
  url: string;
  status: "Merged";
  description: string;
  technologies: string[];
};

export const site = {
  name: "Shanmukha Rajah",
  firstName: "Shanmukha",
  url: "https://anuragdotdev.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: [
    "/profile.jpg",
    "/profile2.jpg",
  ],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "SR",
  role: "AI Full Stack Developer",
  location: "India",
  timezone: "Asia/Kolkata",
  email: "shanmukharajah22@gmail.com",
  greeting: "Hey, I'm Shanmukha",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Shanmukha, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend, not because I don't like frontend, but because I enjoy making polished things actually hold up.",
    "I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Backend Engineering • System Design • DSA • DevOps",
    nowBuilding: "",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/ShanmukhaRajah22",
    twitter: "https://x.com/anuragdotdev",
    linkedin: "https://www.linkedin.com/in/shanmukharajah22/",
    email: "mailto:shanmukharajah22@gmail.com",
    resume: "",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@anuragdotdev",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Backend & Full-Stack Developer",
      period: "2025 – Present",
      blurb:
        "Building and shipping full-stack applications, SaaS products, and backend systems for real-world use cases. Working across APIs, authentication, databases, real-time systems, and modern web infrastructure.",
      url: "",
    },
  ] as Job[],
  freelanceProjects: [] as FreelanceProject[],
  projects: [] as Project[],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Shadcn UI",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Supabase",
    "Firebase",
    "REST APIs",
    "JWT",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Figma",
    "C++",
    "Python",
  ],
  writing: [
    {
      title: "Authentication & Authorization for Backend Engineers: A Complete Guide",
      summary: "A comprehensive guide on authentication and authorization architectures, covering passwords, sessions at scale, JWTs, OAuth, WebAuthn, and zero-trust security for backend systems.",
      date: "Sep 11, 2026",
      readingTime: "25 min read",
      url: "https://medium.com/@anuragdotdev/authentication-authorization-for-backend-engineers-a-complete-guide-f8844e97bddf?sharedUserId=anuragdotdev",
    },
    {
      title: "Serialization and Deserialization: The Universal Language of Backend Engineering",
      summary: "A deep dive into serialization formats from JSON and XML to Protocol Buffers, exploring schema validation, backward compatibility, and network serialization bottlenecks.",
      date: "Aug 29, 2026",
      readingTime: "14 min read",
      url: "https://medium.com/@anuragdotdev/serialization-and-deserialization-the-universal-language-of-backend-engineering-8df8ce03d257",
    },
    {
      title: "The Ultimate Guide to Routing: From Network Packets to Backend Handlers",
      summary: "A comprehensive exploration of routing across layers, tracing IP packets, hardware routing tables, HTTP multiplexing, and frontend routers.",
      date: "Aug 26, 2026",
      readingTime: "20 min read",
      url: "https://medium.com/@anuragdotdev/the-ultimate-guide-to-routing-from-network-packets-to-backend-handlers-64cc4f7fdbfa",
    },
    {
      title: "Understanding HTTP: The Backbone of the Web",
      summary: "A deep dive into the Hypertext Transfer Protocol, exploring header lifecycle, request methods, statelessness, and connection optimization from HTTP/1.1 to HTTP/3.",
      date: "Aug 22, 2026",
      readingTime: "15 min read",
      url: "https://medium.com/@anuragdotdev/understanding-http-the-backbone-of-the-web-3d2109d0facd",
    },
    {
      title: "API Rate Limiting: I thought it was just counting requests...",
      summary: "An analysis of rate limiting algorithms from Token Bucket to Sliding Window logs, detailing how distributed systems protect API infrastructure under load.",
      date: "Jul 12, 2026",
      readingTime: "14 min read",
      url: "https://medium.com/@anuragdotdev/api-rate-limiting-i-thought-it-was-just-counting-requests-682cefa2f56c",
    },
    {
      title: "The JWT Storage Debate is Over: Here's the Production-Grade Architecture Your App Actually Needs",
      summary: "A definitive guide to JWT storage in frontend applications, detailing why standard localStorage fails and how to implement secure memory-session architecture with HTTP-only cookies.",
      date: "Jun 24, 2026",
      readingTime: "8 min read",
      url: "https://medium.com/@anuragdotdev/the-jwt-storage-debate-is-over-heres-the-production-grade-architecture-your-app-actually-needs-9ab284da065f",
    }
  ] as Post[],
  openSourceContributions: [
    {
      title: "UI: Restyle hero buttons to custom Neo-Brutalist spec",
      repo: "fossasia/voxbento",
      prNumber: 370,
      url: "https://github.com/fossasia/voxbento/pull/370",
      status: "Merged",
      description:
        "Restyled hero CTA buttons with custom Neo-Brutalist design, thicker borders, hard-offset shadows, hover lift, and active press states while resolving CSS specificity issues with Tailwind preflight.",
      technologies: ["Tailwind CSS", "CSS", "UI/UX", "Neo-Brutalism"],
    },
    {
      title: "UI: Restyle navbar login buttons to custom Neo-Brutalist spec",
      repo: "fossasia/voxbento",
      prNumber: 358,
      url: "https://github.com/fossasia/voxbento/pull/358",
      status: "Merged",
      description:
        "Standardized landing page navbar authentication actions (Sign In, Register, Dashboard) into unified Neo-Brutalist button components with standardized borders, shadows, hover lift, and active states.",
      technologies: ["CSS", "HTML", "UI/UX", "Neo-Brutalism"],
    },
    {
      title: "Bug fix: speaker image blue overlay",
      repo: "fossasia/voxbento",
      prNumber: 389,
      url: "https://github.com/fossasia/voxbento/pull/389",
      status: "Merged",
      description:
        "Resolved an image rendering bug on the landing page where the speaker visual was obscured by an unwanted blue overlay and blend mode, restoring full color clarity.",
      technologies: ["HTML", "Tailwind CSS", "Bug Fix"],
    },
    {
      title: "UI: Restyle navbar logout button to match Brutalist outline style",
      repo: "fossasia/voxbento",
      prNumber: 395,
      url: "https://github.com/fossasia/voxbento/pull/395",
      status: "Merged",
      description:
        "Restyled the Logout action in the homepage header navbar from a plain text link into a responsive Neo-Brutalist outline button matching adjacent dashboard controls.",
      technologies: ["HTML", "CSS", "UI/UX", "Neo-Brutalism"],
    },
    {
      title: "Refactor(activity): Remove redundant Touch.enable call",
      repo: "sugarlabs/musicblocks",
      prNumber: 8126,
      url: "https://github.com/sugarlabs/musicblocks/pull/8126",
      status: "Merged",
      description:
        "Cleaned up redundant touch initialization on the stage instance in EaselJS/CreateJS canvas rendering loop, optimizing event handler registration without breaking mobile interactions.",
      technologies: ["JavaScript", "EaselJS", "Performance", "Refactoring"],
    },
  ] as OpenSourceContribution[],
  github: {
    username: "ShanmukhaRajah22",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork"
} as const;

export type Site = typeof site;
