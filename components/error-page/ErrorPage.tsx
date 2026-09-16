"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowUpRightIcon,
  HomeIcon,
  MoonIcon,
  PaperAirplaneIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import type { Locale } from "@/content/types";
import { site } from "@/lib/site";
import { sharedCopy, variantCopy, type ErrorVariant } from "./copy";
import { errorFontVariables } from "./fonts";
import "./error-page.css";

type ErrorPageProps = {
  variant: ErrorVariant;
  /** Для ошибок: повторить рендер сегмента (reset из error boundary) */
  onRetry?: () => void;
  /**
   * Выводить свой <title> на языке страницы. Нужно там, где нет метаданных сайта:
   * в глобальной 404 и глобальной ошибке. Внутри макетов заголовок уже задан сайтом.
   */
  withTitle?: boolean;
};

/**
 * Страница 404 и ошибок в дизайне проекта 404_error.
 * Язык берётся из адреса (/en/... — английский) и переключается прямо на странице,
 * тема общая с сайтом через next-themes.
 */
// Адрес страницы не меняется, пока она открыта, поэтому подписка пустая
const subscribeToNothing = () => () => {};

function localeFromLocation(): Locale {
  const { pathname } = window.location;
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}

export function ErrorPage({ variant, onRetry, withTitle = false }: ErrorPageProps) {
  // На сервере адрес недоступен: там и на первом кадре — русский, затем язык из адреса.
  // useSyncExternalStore делает это без рассинхрона гидратации.
  const pathLocale = useSyncExternalStore(subscribeToNothing, localeFromLocation, () => "ru" as Locale);
  const [chosenLocale, setChosenLocale] = useState<Locale | null>(null);
  const locale: Locale = chosenLocale ?? pathLocale;

  const { resolvedTheme, setTheme } = useTheme();
  const shared = sharedCopy[locale];
  const t = variantCopy[variant][locale];
  const telegramHandle = site.telegram.handle.replace(/^@/, "");

  // lang документа следует за выбранным языком
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handlePrimary = () => {
    if (onRetry) {
      onRetry();
      return;
    }
    if (window.history.length > 1) window.history.back();
    else window.location.href = site.paths[locale];
  };

  return (
    <main className={`error-page ${errorFontVariables}`}>
      {/* React 19 поднимает <title> в <head> и обновляет его при смене языка */}
      {withTitle && <title>{t.title}</title>}
      <div className="grid-noise" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href={site.paths[locale]} aria-label={shared.home}>
          <span className="brand-mark" aria-hidden="true">
            FR
          </span>
          <span>
            <strong>FIRDAVS</strong>
            <small>{shared.role}</small>
          </span>
        </a>
        <div className="header-actions">
          <span className="status-pill">
            <i aria-hidden="true" />
            {shared.status}
          </span>
          <button
            className="lang-switch"
            type="button"
            data-lang={locale}
            onClick={() => setChosenLocale(locale === "ru" ? "en" : "ru")}
            lang={locale === "ru" ? "en" : "ru"}
            aria-label={shared.switchLanguage}
            title={shared.switchLanguage}
          >
            <span className="lang-switch-thumb" aria-hidden="true" />
            {(["ru", "en"] as const).map((code) => (
              <span
                key={code}
                className={`lang-switch-option${code === locale ? " is-active" : ""}`}
                aria-hidden="true"
              >
                {code.toUpperCase()}
              </span>
            ))}
          </button>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={shared.toggleTheme}
            title={shared.toggleTheme}
          >
            {/* Обе иконки в разметке, нужную показывает класс темы — без рассинхрона гидратации */}
            <SunIcon className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
            <MoonIcon className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="error-layout">
        <div className="copy-column">
          <div className="eyebrow">
            <span>{t.eyebrow[0]}</span>
            <span className="eyebrow-line" aria-hidden="true" />
            <span>{t.eyebrow[1]}</span>
          </div>
          <p className="giant-code" aria-hidden="true">
            {t.code}
          </p>
          <h1>
            {t.heading}
            <br />
            <span>{t.headingAccent}</span>
          </h1>
          <p className="description">
            {t.description}
            <span aria-label={shared.awkwardLaugh}> 😅</span>
          </p>

          <div className="actions" aria-label={shared.actions}>
            <button className="primary-action" type="button" onClick={handlePrimary}>
              {onRetry ? (
                <ArrowPathIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              ) : (
                <ArrowLeftIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              )}
              {t.primaryAction}
            </button>
            <a className="secondary-action" href={site.paths[locale]}>
              <HomeIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              {shared.home}
            </a>
          </div>

          <a className="telegram-card" href={site.telegram.url} target="_blank" rel="noreferrer">
            <span className="telegram-icon" aria-hidden="true">
              <PaperAirplaneIcon className="h-5 w-5" />
            </span>
            <span>
              <small>{shared.reportToDeveloper}</small>
              <strong>@{telegramHandle}</strong>
            </span>
            <ArrowUpRightIcon className="telegram-arrow h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="visual-column" aria-label={shared.visualLabel}>
          <p className="visual-404" aria-hidden="true">
            {t.code[0]}
            <span>{t.code[1]}</span>
            {t.code[2]}
          </p>
          <div className="mascot-glow" aria-hidden="true" />
          <Image
            className="mascot"
            src="/errors/route-lost-mascot.webp"
            alt={shared.mascotAlt}
            width={820}
            height={1230}
            sizes="(max-width: 900px) 540px, 670px"
            loading="eager"
            fetchPriority="high"
          />
          <div className="signal-card signal-top" aria-hidden="true">
            <span>{t.signalTop[0]}</span>
            <strong>{t.signalTop[1]}</strong>
          </div>
          <div className="signal-card signal-bottom" aria-hidden="true">
            <span>{t.signalBottom[0]}</span>
            <strong>{t.signalBottom[1]}</strong>
          </div>
        </div>
      </section>

      <footer className="error-footer">
        <span>{t.footerNote}</span>
        <span>© {new Date().getFullYear()} FIRDAVS</span>
      </footer>
    </main>
  );
}
