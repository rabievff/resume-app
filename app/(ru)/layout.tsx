import type { ReactNode } from "react";
import { ru } from "@/content/ru";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata, viewport as rootViewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata(ru);
export const viewport = rootViewport;

export default function RussianLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument dict={ru}>{children}</RootDocument>;
}
