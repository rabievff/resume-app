export type Locale = "ru" | "en";

export type ExperienceItem = {
  company: string;
  url?: string;
  context: string;
  role: string;
  period: string;
  /** Формат занятости: снимает вопрос, почему стажировка идёт после должности разработчика */
  format?: string;
  points: string[];
  stack: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Скриншот экрана телефона из public/, например "/projects/iman.jpg" */
  image?: string;
  /** Фирменный цвет проекта: фон под скриншотом и акцент ссылок */
  color?: string;
  /** Ключевые возможности: адаптивность, админ-панель, отчёты — показываются списком с галочками */
  features?: string[];
};

export type Certificate = {
  year: number;
  title: string;
  issuer: string;
  file: string;
};

export type ServiceKey = "frontend" | "backend" | "documents";

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    jobTitle: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  };
  nav: {
    skipToContent: string;
    experience: string;
    services: string;
    projects: string;
    skills: string;
    certificates: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    switchLanguage: string;
  };
  hero: {
    name: string;
    shortName: string;
    availability: string;
    titleLead: string;
    titleAccent: string;
    lead: string;
    fields: { label: string; value: string }[];
    photoAlt: string;
    primaryAction: string;
    printAction: string;
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { key: ServiceKey; name: string; description: string }[];
  };
  projects: {
    title: string;
    subtitle: string;
    liveLabel: string;
    codeLabel: string;
    items: Project[];
  };
  skills: {
    title: string;
    subtitle: string;
    groups: { label: string; items: string[] }[];
  };
  certificates: {
    title: string;
    subtitle: string;
    openLabel: string;
    items: Certificate[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
};
