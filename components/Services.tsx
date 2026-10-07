import type { ComponentType, CSSProperties, SVGProps } from "react";
import { CodeBracketIcon, DocumentTextIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { serviceKeys, type Dictionary, type ServiceKey } from "@/content/types";
import { Section } from "./Section";

type ServicesProps = {
  dict: Dictionary;
};

const serviceStyle: Record<ServiceKey, { icon: ComponentType<SVGProps<SVGSVGElement>>; color: string }> = {
  frontend: { icon: CodeBracketIcon, color: "var(--coral)" },
  // Бэкенд окрашен в цвет Go, на котором он пишется
  backend: { icon: ServerStackIcon, color: "#00add8" },
  documents: { icon: DocumentTextIcon, color: "#d99a00" },
};

export function Services({ dict }: ServicesProps) {
  const { services } = dict;

  return (
    <Section id="services" title={services.title} subtitle={services.subtitle}>
      <ul className="grid gap-5 md:grid-cols-3">
        {serviceKeys.map((key) => {
          const service = services.items[key];
          const { icon: Icon, color } = serviceStyle[key];

          return (
            <li
              key={key}
              style={{ "--accent": color } as CSSProperties}
              className="group rounded-3xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] hover:shadow-[0_24px_50px_-28px_rgba(20,35,60,0.45)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-(--accent) transition-transform group-hover:-rotate-6">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading mt-6 text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
