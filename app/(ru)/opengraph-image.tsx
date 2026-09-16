import { ru } from "@/content/ru";
import { ogSize, renderOgImage } from "@/lib/og";

// Генерируется один раз при сборке: сайт выкладывается как статика
export const dynamic = "force-static";

export const alt = ru.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage(ru);
}
