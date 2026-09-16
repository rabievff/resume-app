"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

type ThemeToggleProps = {
  label: string;
  className?: string;
};

export function ThemeToggle({ label, className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={className}
    >
      {/*
        Обе иконки в разметке, нужную показывает CSS по классу темы.
        Так нет ни рассинхрона гидратации, ни пустой кнопки на первом кадре.
      */}
      <MoonIcon className="h-[18px] w-[18px] dark:hidden" />
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  );
}
