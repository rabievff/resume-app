import type { Dictionary } from "./types";

export const ru: Dictionary = {
  locale: "ru",
  htmlLang: "ru",
  meta: {
    title: "Фирдавс Рабиев — fullstack-разработчик (React, Next.js, Go)",
    jobTitle: "Fullstack-разработчик",
    description:
      "Веб-приложения целиком: интерфейсы на React и Next.js, бэкенд на Go. С 2022 года — разработчик в Dushanbe City Bank.",
    ogLocale: "ru_RU",
    keywords: [
      "Фирдавс Рабиев",
      "fullstack-разработчик",
      "React разработчик",
      "Next.js",
      "Go разработчик",
      "веб-приложения",
      "финтех",
      "фриланс",
    ],
  },
  nav: {
    skipToContent: "Перейти к содержанию",
    experience: "Опыт",
    services: "Услуги",
    projects: "Проекты",
    skills: "Навыки",
    certificates: "Сертификаты",
    contact: "Контакты",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    toggleTheme: "Переключить тему",
    switchLanguage: "English version",
  },
  hero: {
    name: "Фирдавс Рабиев",
    shortName: "Фирдавс Рабиев",
    availability: "Открыт к проектам",
    titleLead: "Fullstack-разработчик",
    titleAccent: "с опытом в финтехе",
    lead:
      "Делаю веб-приложения целиком: адаптивный интерфейс на React и Next.js под любые устройства, бэкенд на Go и админ-панели с отчётами. С 2022 года работаю в Dushanbe City Bank: мини-приложение для DC NEXT, Telegram-боты и автоматизация документов. Берусь за проекты из любой сферы.",
    fields: [
      { label: "Фронтенд", value: "React, Next.js, TypeScript" },
      { label: "Бэкенд", value: "Go, PHP, Python" },
      { label: "Сферы", value: "Финтех, веб-сервисы" },
      { label: "Часовой пояс", value: "UTC+5, Душанбе" },
    ],
    photoAlt: "Фирдавс Рабиев",
    primaryAction: "Написать в Telegram",
    printAction: "Сохранить в PDF",
  },
  experience: {
    title: "Опыт",
    subtitle: "Где я работаю и что сделал",
    items: [
      {
        company: "Dushanbe City Bank",
        url: "https://dc.tj",
        context: "Коммерческий банк, Таджикистан",
        role: "Fullstack-разработчик",
        period: "с 2022",
        points: [
          "Мини-приложение внутри мобильного приложения DC NEXT, через которое клиенты оплачивают счета.",
          "Админ-панель, в которой сотрудники проверяют статус клиентов и снимают блокировки.",
          "Сервисы, которые автоматически оформляют кредитные договоры, заявления и анкеты клиентов.",
          "Админка для работы с отчётами и ведомостями.",
          "Telegram-бот для управления доступом клиентов к сервисам.",
          "QR-портал для управления QR-кодами партнёров банка.",
          "Система бронирования переговорных комнат с уведомлениями на почту.",
        ],
        stack: ["React", "TypeScript", "Go", "PHP", "PostgreSQL", "MySQL", "SQLite", "Telegram Bot API"],
      },
    ],
  },
  services: {
    title: "Услуги",
    subtitle: "Чем могу быть полезен",
    items: [
      {
        key: "frontend",
        name: "Фронтенд на React и Next.js",
        description:
          "Интерфейсы веб-сервисов, личных кабинетов и сайтов, которые одинаково удобны на телефоне, планшете и компьютере: вёрстка, компоненты, подключение к API, SSR и SEO.",
      },
      {
        key: "backend",
        name: "Бэкенд на Go",
        description:
          "API, базы данных и админ-панели с журналом действий и выгрузкой отчётов — фронтенд и бэкенд ведёт один человек.",
      },
      {
        key: "documents",
        name: "Автоматизация документов",
        description: "Генерация договоров, отчётов и счетов в PDF вместо ручной работы.",
      },
    ],
  },
  projects: {
    title: "Проекты",
    subtitle: "Проекты вне основной работы",
    liveLabel: "Открыть сайт",
    codeLabel: "Код",
    items: [
      {
        name: "iman — время намаза",
        description:
          "Веб-приложение с временем намаза: время можно поправить вручную, есть компас Киблы и обратная связь. Первую версию сделал на Go с базой в Excel, затем перенёс на Firebase.",
        features: [
          "Адаптивно под телефон, планшет и компьютер",
          "Устанавливается на телефон как приложение",
          "Админ-панель для управления пользователями",
          "Отчёт по пользователям и журнал входов с выгрузкой в Excel",
        ],
        stack: ["JavaScript", "Go", "Firebase", "PWA"],
        liveUrl: "https://iman-tj.web.app",
        image: "/projects/iman.jpg",
        color: "#1f7a4d",
      },
      {
        name: "Winners",
        description:
          "Розыгрыш призов в формате открытия кейса: лента прокручивается и останавливается на выигрыше, вспышка и конфетти окрашиваются в цвет редкости.",
        features: [
          "Адаптивно под телефон, планшет и компьютер",
          "Админ-панель: призы, шансы выпадения, пользователи",
          "Журнал всех действий с фильтрами и выгрузкой отчёта в Excel",
          "При обрыве связи события сохраняются и отправляются позже",
        ],
        stack: ["React", "React Router", "Firebase"],
        liveUrl: "https://winners-tj.web.app",
        image: "/projects/winners.jpg",
        color: "#6d28d9",
      },
    ],
  },
  skills: {
    title: "Навыки",
    subtitle: "Технологии, с которыми я работаю",
    groups: [
      { label: "Фронтенд", items: ["React", "Next.js", "TypeScript", "JavaScript", "React Router", "TanStack Query", "Ant Design", "Chart.js"] },
      { label: "Вёрстка", items: ["HTML", "CSS", "Tailwind CSS", "Адаптивная вёрстка", "PWA"] },
      { label: "Бэкенд", items: ["Go", "PHP", "Python", "Node.js"] },
      { label: "API и интеграции", items: ["REST API", "Telegram Bot API", "Firebase", "SSO"] },
      { label: "Базы данных", items: ["PostgreSQL", "MySQL", "SQLite", "Firestore"] },
      { label: "Инструменты", items: ["Git", "Vite"] },
    ],
  },
  certificates: {
    title: "Сертификаты",
    subtitle: "Пройденные курсы",
    openLabel: "Открыть PDF",
    items: [
      { year: 2025, title: "Твой JavaScript — 100%, с отличием", issuer: "Stepik", file: "/certificate/Certificate_JS.pdf" },
      { year: 2023, title: "Лекции по основам программирования", issuer: "GeekBrains", file: "/certificate/Основы программирования.pdf" },
      { year: 2023, title: "Практикум «Напиши свою первую программу»", issuer: "GeekBrains", file: "/certificate/Напиши программу.pdf" },
      { year: 2023, title: "Мероприятие «Путь в IT»", issuer: "GeekBrains", file: "/certificate/Мероприятия.pdf" },
      { year: 2022, title: "Диплом «JavaScript: погружение»", issuer: "Way Up", file: "/certificate/JavaScript.pdf" },
      { year: 2022, title: "Веб-верстальщик: начало", issuer: "Way Up", file: "/certificate/Верстальщик.pdf" },
    ],
  },
  contact: {
    title: "Обсудим ваш проект?",
    lead: "Напишите в Telegram или на почту: расскажите о задаче, и я предложу, как её решить.",
    emailLabel: "Почта",
    copyEmail: "Скопировать",
    copied: "Скопировано",
  },
  footer: {
    copyright: "Фирдавс Рабиев",
    builtWith: "Сайт сделан на Next.js и Tailwind CSS",
  },
};
