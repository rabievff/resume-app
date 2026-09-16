"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type PrintResumeButtonProps = {
  label: string;
  className?: string;
};

/**
 * Печать страницы по print-стилям из globals.css.
 * В диалоге печати браузера доступен пункт «Сохранить как PDF».
 */
export function PrintResumeButton({ label, className = "" }: PrintResumeButtonProps) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      <ArrowDownTrayIcon className="h-5 w-5" />
      {label}
    </button>
  );
}
