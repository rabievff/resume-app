import type { CSSProperties } from "react";
import { techColor } from "@/lib/tech-colors";

type TechChipProps = {
  name: string;
  size?: "sm" | "md";
};

/** Метка технологии в фирменном цвете её экосистемы. */
export function TechChip({ name, size = "md" }: TechChipProps) {
  const style = { "--tech": techColor(name) } as CSSProperties;

  return (
    <span
      style={style}
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface font-medium text-ink transition-colors hover:border-[color-mix(in_oklab,var(--tech)_55%,transparent)] hover:bg-[color-mix(in_oklab,var(--tech)_10%,var(--surface))] ${
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
      }`}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-(--tech)" />
      {name}
    </span>
  );
}
