import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Генерируется один раз при сборке: сайт выкладывается как статика
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ru: new URL(site.paths.ru, site.url).toString(),
    en: new URL(site.paths.en, site.url).toString(),
  };

  return (["ru", "en"] as const).map((locale) => ({
    url: languages[locale],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
