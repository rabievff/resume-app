import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ErrorPage } from "@/components/error-page/ErrorPage";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

// Заголовок вкладки выводит сама страница — на языке из адреса
export const metadata: Metadata = {
  description: "Страница не найдена. Вернитесь на главную или напишите в Telegram.",
  robots: { index: false, follow: true },
};

/** 404 для любого несуществующего адреса, включая пропавшие файлы из public. */
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={fontVariables} suppressHydrationWarning>
      <body className="bg-bg font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorPage variant="not-found" withTitle />
        </ThemeProvider>
      </body>
    </html>
  );
}
