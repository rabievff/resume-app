import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-14 md:py-20">
      <div className="mb-10 md:mb-12">
        <h2 id={`${id}-title`} className="font-heading text-3xl font-semibold text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-3 text-base text-muted md:text-lg">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}
