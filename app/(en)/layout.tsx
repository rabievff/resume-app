import type { ReactNode } from "react";
import { en } from "@/content/en";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata, viewport as rootViewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata(en);
export const viewport = rootViewport;

export default function EnglishLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument dict={en}>{children}</RootDocument>;
}
