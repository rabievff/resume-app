import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Генерируется один раз при сборке: сайт выкладывается как статика
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
