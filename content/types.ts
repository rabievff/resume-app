export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

/**
 * Теги языка для <html lang> и Open Graph. Выводятся из locale, а не лежат
 * в каждом словаре отдельными строками: иначе английский файл мог объявить
 * себя русским и увести за собой canonical, hreflang и JSON-LD.
 */
export const localeTags = {
  ru: { htmlLang: "ru", ogLocale: "ru_RU" },
  en: { htmlLang: "en", ogLocale: "en_US" },
} as const satisfies Record<Locale, { htmlLang: string; ogLocale: string }>;

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

/** Порядок задаёт и раскладку карточек на странице, и состав ключей услуг */
export const serviceKeys = ["frontend", "backend", "documents"] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export type Service = {
  name: string;
  description: string;
};

/**
 * Словарь одного языка. Параметр L прибивает поле locale к файлу: `ru` объявлен
 * как Dictionary<"ru">, поэтому подставить туда "en" — ошибка компиляции.
 */
export type Dictionary<L extends Locale = Locale> = {
  locale: L;
  meta: {
    title: string;
    jobTitle: string;
    description: string;
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
    /** Record, а не массив: пропущенная или задвоенная услуга не компилируется */
    items: Record<ServiceKey, Service>;
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
