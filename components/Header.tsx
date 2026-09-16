"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type { Dictionary } from "@/content/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  locale: Dictionary["locale"];
  name: string;
  nav: Dictionary["nav"];
  items: { id: string; label: string }[];
};

const iconButton =
  "flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-coral hover:text-coral";

export function Header({ locale, name, nav, items }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Меню закрывается по Escape и не даёт скроллить страницу под собой
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Если окно расширилось до десктопа, мобильное меню больше не нужно
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1100px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <>
      {/* Затемнение живёт вне <header>: backdrop-blur шапки сделал бы fixed относительным к ней */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-[#0b1322]/40 backdrop-blur-sm transition-opacity duration-200 min-[1100px]:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
          <a href="#top" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral font-heading text-sm font-bold text-white transition-transform group-hover:-rotate-6">
              {initials}
            </span>
            <span className="font-heading hidden text-base font-semibold text-ink sm:inline">{name}</span>
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <nav className="hidden items-center gap-1 min-[1100px]:flex">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <LanguageSwitch locale={locale} label={nav.switchLanguage} />
            <ThemeToggle label={nav.toggleTheme} className={iconButton} />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? nav.closeMenu : nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className={`${iconButton} min-[1100px]:hidden`}
            >
              {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out min-[1100px]:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 pb-4 pt-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
