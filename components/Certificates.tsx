import { AcademicCapIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

type CertificatesProps = {
  dict: Dictionary;
};

const issuerColors: Record<string, string> = {
  Stepik: "var(--blue)",
  GeekBrains: "#7b61ff",
  "Way Up": "var(--coral)",
};

export function Certificates({ dict }: CertificatesProps) {
  const { certificates } = dict;

  return (
    <Section id="certificates" title={certificates.title} subtitle={certificates.subtitle}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.items.map((certificate) => {
          const color = issuerColors[certificate.issuer] ?? "var(--mint)";

          return (
            <li key={certificate.file}>
              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,35,60,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ background: color }}
                  >
                    <AcademicCapIcon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-muted">{certificate.year}</span>
                </div>
                <p className="mt-5 text-[15px] font-semibold leading-snug text-ink">{certificate.title}</p>
                <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue">
                  {certificates.openLabel}
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
