import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import type { Dictionary } from "@/content/types";
import { Section } from "./Section";
import { TechChip } from "./TechChip";

type ProjectsProps = {
  dict: Dictionary;
};

export function Projects({ dict }: ProjectsProps) {
  const { projects } = dict;

  const links = (liveUrl?: string, codeUrl?: string) =>
    [
      { url: liveUrl, label: projects.liveLabel },
      { url: codeUrl, label: projects.codeLabel },
    ].flatMap(({ url, label }) => (url ? [{ url, label }] : []));

  return (
    <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
      <ul className="grid gap-6">
        {projects.items.map((project) => {
          const projectLinks = links(project.liveUrl, project.codeUrl);
          const style = { "--project": project.color ?? "var(--blue)" } as CSSProperties;

          return (
            <li key={project.name}>
              <article
                style={style}
                className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(20,35,60,0.45)] md:grid-cols-[340px_1fr]"
              >
                {project.image && (
                  // Скриншоты сняты с телефона, поэтому показываем экран целиком, как на устройстве
                  <div className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,color-mix(in_oklab,var(--project)_70%,#050713),var(--project))] px-10 py-9">
                    <div
                      aria-hidden="true"
                      data-print-hidden
                      className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10"
                    />
                    <div
                      aria-hidden="true"
                      data-print-hidden
                      className="absolute -bottom-10 -left-10 h-32 w-32 rotate-12 rounded-[2rem] bg-black/15"
                    />
                    <div className="relative w-[190px] rotate-[2deg] overflow-hidden rounded-[1.75rem] border-[5px] border-[#0b1322] bg-[#0b1322] shadow-[0_30px_60px_-20px_rgba(5,7,19,0.7)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={640}
                        height={1308}
                        sizes="190px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-col p-7 md:p-9">
                  <h3 className="font-heading text-2xl font-semibold text-ink md:text-3xl">{project.name}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-[15px] font-medium leading-snug text-ink">
                          <CheckCircleIcon aria-hidden="true" className="mt-px h-5 w-5 shrink-0 text-(--project) dark:text-[color-mix(in_oklab,var(--project)_55%,white)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <TechChip key={technology} name={technology} size="sm" />
                    ))}
                  </div>

                  {projectLinks.length > 0 && (
                    <div className="mt-auto flex gap-5 pt-8">
                      {projectLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          data-print-url={link.url.replace(/^https?:\/\//, "")}
                          className="group/link inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-(--project) hover:text-(--project)"
                        >
                          {link.label}
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
