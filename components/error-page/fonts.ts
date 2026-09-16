import { Geist, Geist_Mono, Russo_One } from "next/font/google";

// Шрифты страницы ошибок из проекта 404_error; грузятся только там, где эта страница используется
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "cyrillic"] });
const russoOne = Russo_One({ variable: "--font-russo-one", subsets: ["latin", "cyrillic"], weight: "400" });

export const errorFontVariables = `${geistSans.variable} ${geistMono.variable} ${russoOne.variable}`;
