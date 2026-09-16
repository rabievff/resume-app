import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Firdavs Rabiev — Fullstack Developer (React, Next.js, Go)",
    jobTitle: "Fullstack Developer",
    description:
      "End-to-end web apps: React and Next.js on the front, Go on the back. Developer at Dushanbe City Bank since 2022.",
    ogLocale: "en_US",
    keywords: [
      "Firdavs Rabiev",
      "fullstack developer",
      "React developer",
      "Next.js developer",
      "Go developer",
      "web applications",
      "fintech",
      "freelance",
    ],
  },
  nav: {
    skipToContent: "Skip to content",
    experience: "Experience",
    services: "Services",
    projects: "Projects",
    skills: "Skills",
    certificates: "Certificates",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    switchLanguage: "Русская версия",
  },
  hero: {
    name: "Firdavs Rabiev",
    shortName: "Firdavs Rabiev",
    availability: "Open to projects",
    titleLead: "Fullstack developer",
    titleAccent: "with fintech experience",
    lead:
      "I build web apps end to end: responsive React and Next.js interfaces for any device, a Go backend and admin panels with reports. Since 2022 I’ve been working at Dushanbe City Bank on a mini app for DC NEXT, Telegram bots and document automation. I take on projects in any industry.",
    fields: [
      { label: "Frontend", value: "React, Next.js, TypeScript" },
      { label: "Backend", value: "Go, PHP, Python" },
      { label: "Industries", value: "Fintech, web services" },
      { label: "Time zone", value: "UTC+5, Dushanbe" },
    ],
    photoAlt: "Firdavs Rabiev",
    primaryAction: "Message on Telegram",
    printAction: "Save as PDF",
  },
  experience: {
    title: "Experience",
    subtitle: "Where I work and what I’ve built",
    items: [
      {
        company: "Dushanbe City Bank",
        url: "https://dc.tj",
        context: "Commercial bank, Tajikistan",
        role: "Fullstack Developer",
        period: "Since 2022",
        points: [
          "A mini app inside the DC NEXT mobile app that lets customers pay bills.",
          "An admin panel where staff check customer status and lift account locks.",
          "Services that automatically prepare loan contracts, applications and customer forms.",
          "An admin tool for working with reports and statements.",
          "A Telegram bot for managing customer access to services.",
          "A QR portal for managing the bank’s partner QR codes.",
          "A meeting room booking system with email notifications.",
        ],
        stack: ["React", "TypeScript", "Go", "PHP", "PostgreSQL", "MySQL", "SQLite", "Telegram Bot API"],
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "How I can help",
    items: [
      {
        key: "frontend",
        name: "Frontend with React and Next.js",
        description:
          "Interfaces for web services, customer dashboards and websites that work equally well on phones, tablets and desktops: layout, components, API integration, SSR and SEO.",
      },
      {
        key: "backend",
        name: "Go backend",
        description:
          "APIs, databases and admin panels with an activity log and report exports, so one person owns both frontend and backend.",
      },
      {
        key: "documents",
        name: "Document automation",
        description: "Generating contracts, reports and invoices as PDF instead of doing it by hand.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Projects outside my day job",
    liveLabel: "Visit site",
    codeLabel: "Code",
    items: [
      {
        name: "iman — prayer times",
        description:
          "A prayer times web app where users can adjust the times by hand, with a Qibla compass and a feedback form. I built the first version in Go with an Excel database, then moved it to Firebase.",
        features: [
          "Responsive on phones, tablets and desktops",
          "Installs on a phone like a native app",
          "Admin panel for managing users",
          "User report and sign-in log with Excel export",
        ],
        stack: ["JavaScript", "Go", "Firebase", "PWA"],
        liveUrl: "https://iman-tj.web.app",
        image: "/projects/iman.jpg",
        color: "#1f7a4d",
      },
      {
        name: "Winners",
        description:
          "A prize draw styled as case opening: the reel spins and stops on the prize, with a flash and confetti in the colour of its rarity.",
        features: [
          "Responsive on phones, tablets and desktops",
          "Admin panel: prizes, drop chances, users",
          "Full activity log with filters and Excel report export",
          "Keeps events when the connection drops and syncs them later",
        ],
        stack: ["React", "React Router", "Firebase"],
        liveUrl: "https://winners-tj.web.app",
        image: "/projects/winners.jpg",
        color: "#6d28d9",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I work with",
    groups: [
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "React Router", "TanStack Query", "Ant Design", "Chart.js"] },
      { label: "Layout", items: ["HTML", "CSS", "Tailwind CSS", "Responsive design", "PWA"] },
      { label: "Backend", items: ["Go", "PHP", "Python", "Node.js"] },
      { label: "APIs and integrations", items: ["REST API", "Telegram Bot API", "Firebase", "SSO"] },
      { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Firestore"] },
      { label: "Tooling", items: ["Git", "Vite"] },
    ],
  },
  certificates: {
    title: "Certificates",
    subtitle: "Completed courses",
    openLabel: "Open PDF",
    items: [
      { year: 2025, title: "JavaScript course — 100%, with distinction", issuer: "Stepik", file: "/certificate/Certificate_JS.pdf" },
      { year: 2023, title: "Programming fundamentals lectures", issuer: "GeekBrains", file: "/certificate/Основы программирования.pdf" },
      { year: 2023, title: "“Write your first program” workshop", issuer: "GeekBrains", file: "/certificate/Напиши программу.pdf" },
      { year: 2023, title: "“Path to IT” event", issuer: "GeekBrains", file: "/certificate/Мероприятия.pdf" },
      { year: 2022, title: "“JavaScript deep dive” diploma", issuer: "Way Up", file: "/certificate/JavaScript.pdf" },
      { year: 2022, title: "Web layout basics", issuer: "Way Up", file: "/certificate/Верстальщик.pdf" },
    ],
  },
  contact: {
    title: "Let’s talk about your project",
    lead: "Message me on Telegram or by email. Tell me about the task and I’ll suggest how to solve it.",
    emailLabel: "Email",
    copyEmail: "Copy",
    copied: "Copied",
  },
  footer: {
    copyright: "Firdavs Rabiev",
    builtWith: "Built with Next.js and Tailwind CSS",
  },
};
