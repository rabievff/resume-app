import { en } from "@/content/en";
import { ogSize, renderOgImage } from "@/lib/og";

// Генерируется один раз при сборке: сайт выкладывается как статика
export const dynamic = "force-static";

export const alt = en.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage(en);
}
