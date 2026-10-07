import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { localeTags, type Dictionary } from "@/content/types";
import { fontVariables } from "@/lib/fonts";
import { site } from "@/lib/site";

type RootDocumentProps = {
  dict: Dictionary;
  children: ReactNode;
};

/** Общий каркас документа для корневых макетов обоих языков. */
export function RootDocument({ dict, children }: RootDocumentProps) {
  const pageUrl = new URL(site.paths[dict.locale], site.url).toString();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dict.hero.name,
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.description,
    url: pageUrl,
    email: `mailto:${site.email}`,
    image: new URL(site.photo, site.url).toString(),
    sameAs: [site.telegram, site.github, site.linkedin].flatMap((link) => (link ? [link.url] : [])),
    knowsAbout: dict.skills.groups.flatMap((group) => group.items),
  };

  return (
    <html lang={localeTags[dict.locale].htmlLang} className={fontVariables} suppressHydrationWarning>
      <body className="bg-bg font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Данные статические, но "<" всё равно экранируем, чтобы строка не могла закрыть тег script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
