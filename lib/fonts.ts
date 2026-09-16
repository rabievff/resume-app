import { Geologica, Golos_Text, IBM_Plex_Mono } from "next/font/google";

// Заголовки: выразительный гротеск с осью остроты SHRP
const display = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geologica",
  axes: ["SHRP"],
  display: "swap",
});

// Основной текст: спокойный и хорошо читается мелким кеглем
const body = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-golos",
  display: "swap",
});

// Код, даты и метки технологий
const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
