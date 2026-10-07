"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  // Положение бегунка считаем от пропса, а не храним отдельной копией языка:
  // переход перезагружает страницу целиком, и возврат по «Назад» достаёт её из
  // bfcache вместе с уцелевшим состоянием. Копия пришла бы оттуда уже устаревшей.
  const [pending, setPending] = useState(false);
  const shown: Locale = pending ? target : locale;
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Возврат из bfcache компонент не перемонтирует, поэтому флаг сбрасываем сами
    const reset = (event: PageTransitionEvent) => {
      if (event.persisted) setPending(false);
    };

    window.addEventListener("pageshow", reset);
    return () => {
      window.removeEventListener("pageshow", reset);
      window.clearTimeout(timer.current);
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Открытие в новой вкладке и прочие клики с модификаторами оставляем браузеру
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    event.preventDefault();
    if (pending) return;

    setPending(true);
    const href = `${site.paths[target]}${window.location.hash}`;
    timer.current = window.setTimeout(() => router.push(href), SLIDE_MS);
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
        shown === "ru" ? "bg-[#cf3526]" : "bg-[#2a5ee8]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full bg-white shadow-[0_2px_6px_rgba(20,35,60,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          shown === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {(["ru", "en"] as const).map((code) => (
        <span
          key={code}
          aria-hidden="true"
          className={`relative z-10 flex items-center justify-center font-mono text-xs font-medium transition-colors duration-300 ${
            code === shown ? "text-[#14233c]" : "text-white/90"
          }`}
        >
          {code.toUpperCase()}
        </span>
      ))}
    </a>
  );
}
