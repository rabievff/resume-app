"use client";

import { useState, type MouseEvent } from "react";
import type { Locale } from "@/content/types";
import { site } from "@/lib/site";

type LanguageSwitchProps = {
  locale: Locale;
  /** Подпись для скринридера на языке, на который ведёт переключатель */
  label: string;
};

// Сколько ждём, чтобы бегунок успел доехать до переключения страницы
const SLIDE_MS = 280;

/**
 * Переключатель языка в виде тумблера. Вся капсула — одна ссылка на другую версию:
 * клик в любом месте двигает бегунок, после чего открывается страница на другом языке.
 */
export function LanguageSwitch({ locale, label }: LanguageSwitchProps) {
  const target: Locale = locale === "ru" ? "en" : "ru";
  const [active, setActive] = useState<Locale>(locale);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Открытие в новой вкладке и прочие клики с модификаторами оставляем браузеру
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    event.preventDefault();
    if (active === target) return;

    setActive(target);
    const href = `${site.paths[target]}${window.location.hash}`;
    window.setTimeout(() => window.location.assign(href), SLIDE_MS);
  };

  return (
    <a
      href={site.paths[target]}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
      onClick={handleClick}
      className={`relative grid h-9 w-[92px] shrink-0 cursor-pointer select-none grid-cols-2 rounded-full p-1 shadow-inner transition-colors duration-300 ${
        // Цвета трека фиксированы и не зависят от темы: белый текст на них держит контраст 4.5:1
        active === "ru" ? "bg-[#cf3526]" : "bg-[#2a5ee8]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full bg-white shadow-[0_2px_6px_rgba(20,35,60,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          active === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {(["ru", "en"] as const).map((code) => (
        <span
          key={code}
          aria-hidden="true"
          className={`relative z-10 flex items-center justify-center font-mono text-xs font-medium transition-colors duration-300 ${
            code === active ? "text-[#14233c]" : "text-white/90"
          }`}
        >
          {code.toUpperCase()}
        </span>
      ))}
    </a>
  );
}
