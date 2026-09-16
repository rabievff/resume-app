import type { Locale } from "@/content/types";

export type ErrorVariant = "not-found" | "error";

type ErrorCopy = {
  title: string;
  code: string;
  eyebrow: [string, string];
  heading: string;
  headingAccent: string;
  description: string;
  primaryAction: string;
  signalTop: [string, string];
  signalBottom: [string, string];
  footerNote: string;
};

type SharedCopy = {
  home: string;
  status: string;
  switchLanguage: string;
  toggleTheme: string;
  awkwardLaugh: string;
  actions: string;
  reportToDeveloper: string;
  visualLabel: string;
  mascotAlt: string;
  role: string;
};

export const sharedCopy: Record<Locale, SharedCopy> = {
  ru: {
    home: "На главную",
    status: "На связи",
    switchLanguage: "Switch to English",
    toggleTheme: "Переключить тему",
    awkwardLaugh: "Неловкий смех",
    actions: "Действия",
    reportToDeveloper: "Сообщить разработчику",
    visualLabel: "Робот потерял маршрут между страницами",
    mascotAlt: "Смущённый цифровой курьер выходит из портала с отсоединённым кабелем",
    role: "FULL-STACK DEVELOPER",
  },
  en: {
    home: "Home",
    status: "Available",
    switchLanguage: "Переключить на русский",
    toggleTheme: "Toggle theme",
    awkwardLaugh: "Awkward laugh",
    actions: "Actions",
    reportToDeveloper: "Tell the developer",
    visualLabel: "The robot lost its route between pages",
    mascotAlt: "Embarrassed digital courier stepping out of a portal with an unplugged cable",
    role: "FULL-STACK DEVELOPER",
  },
};

export const variantCopy: Record<ErrorVariant, Record<Locale, ErrorCopy>> = {
  "not-found": {
    ru: {
      title: "404 — Маршрут потерялся | Firdavs",
      code: "404",
      eyebrow: ["ERROR_404", "ROUTE_LOST"],
      heading: "Маршрут потерялся.",
      headingAccent: "Я делаю вид, что так и должно быть :)",
      description:
        "Кажется, ссылка свернула не туда. Я уже ищу, где она заблудилась — а пока можно вернуться домой или написать мне в Telegram.",
      primaryAction: "Назад к реальности",
      signalTop: ["PATH", "undefined"],
      signalBottom: ["STATUS", "ищем выход…"],
      footerNote: "404 / но контакт работает",
    },
    en: {
      title: "404 — Route lost | Firdavs",
      code: "404",
      eyebrow: ["ERROR_404", "ROUTE_LOST"],
      heading: "Route got lost.",
      headingAccent: "I’m pretending it’s all part of the plan :)",
      description:
        "Looks like this link took a wrong turn. I’m already tracking down where it wandered off — meanwhile, you can head home or message me on Telegram.",
      primaryAction: "Back to reality",
      signalTop: ["PATH", "undefined"],
      signalBottom: ["STATUS", "finding a way out…"],
      footerNote: "404 / but contact still works",
    },
  },
  error: {
    ru: {
      title: "Ошибка — что-то сломалось | Firdavs",
      code: "500",
      eyebrow: ["ERROR_500", "SOMETHING_BROKE"],
      heading: "Что-то сломалось.",
      headingAccent: "Кажется, я что-то уронил :)",
      description:
        "На странице произошла ошибка. Попробуйте ещё раз — если не поможет, вернитесь на главную или напишите мне в Telegram, я разберусь.",
      primaryAction: "Попробовать снова",
      signalTop: ["STATUS", "500"],
      signalBottom: ["FIX", "уже чиню…"],
      footerNote: "ошибка / но контакт работает",
    },
    en: {
      title: "Error — something broke | Firdavs",
      code: "500",
      eyebrow: ["ERROR_500", "SOMETHING_BROKE"],
      heading: "Something broke.",
      headingAccent: "I think I dropped something :)",
      description:
        "Something went wrong on this page. Try again — if that doesn’t help, head home or message me on Telegram and I’ll sort it out.",
      primaryAction: "Try again",
      signalTop: ["STATUS", "500"],
      signalBottom: ["FIX", "on it…"],
      footerNote: "error / but contact still works",
    },
  },
};
