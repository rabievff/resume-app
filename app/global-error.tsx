"use client";

import { ThemeProvider } from "next-themes";
import { RouteError } from "@/components/error-page/RouteError";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Последний рубеж: ошибка в самом корневом макете. Должен рендерить свой <html>. */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-bg font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <RouteError error={error} reset={reset} withTitle />
        </ThemeProvider>
      </body>
    </html>
  );
}
