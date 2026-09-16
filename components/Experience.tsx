import { CheckIcon } from "@heroicons/react/20/solid";
import type { Dictionary } from "@/content/types";
import { Section } from "./Section";
import { TechChip } from "./TechChip";

type ExperienceProps = {
  dict: Dictionary;
};

const accents = ["var(--coral)", "var(--blue)"];

/** «Dushanbe City Bank» → «DC» */
function monogram(company: string) {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function Experience({ dict }: ExperienceProps) {
  const { experience } = dict;

  return (
    <Section id="experience" title={experience.title} subtitle={experience.subtitle}>
      <ol
        className={`relative space-y-6 ${
          // Линия таймлайна имеет смысл, только когда мест работы больше одного
          experience.items.length > 1
            ? "md:before:absolute md:before:bottom-6 md:before:left-[27px] md:before:top-6 md:before:w-0.5 md:before:rounded-full md:before:bg-line"
            : ""
        }`}
      >
        {experience.items.map((item, index) => {
          const accent = accents[index % accents.length];

          return (
            <li key={item.company} className="relative md:pl-20">
              <span
                aria-hidden="true"
                className="font-heading absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-[0_10px_20px_-10px_rgba(20,35,60,0.6)] md:flex"
                style={{ background: accent }}
              >
                {monogram(item.company)}
              </span>

              <article className="rounded-3xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(20,35,60,0.45)] md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  {/* На телефоне таймлайна нет, поэтому монограмма переезжает в карточку */}
                  <span
                    aria-hidden="true"
                    className="font-heading flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white md:hidden"
                    style={{ background: accent }}
                  >
                    {monogram(item.company)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-ink md:text-[1.7rem]">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          data-print-url={item.url.replace(/^https?:\/\//, "")}
                          className="decoration-coral decoration-2 underline-offset-4 hover:underline"
                        >
                          {item.company}
                          <span aria-hidden="true" className="ml-1 text-lg text-muted">
                            ↗
                          </span>
                        </a>
                      ) : (
                        item.company
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.context}</p>
                  </div>
                  <span className="rounded-full bg-surface-muted px-3 py-1 font-mono text-sm font-medium text-ink">
                    {item.period}
                  </span>
                </div>

                <p className="mt-5 flex items-center gap-2.5 text-[15px] font-semibold text-ink">
                  <span aria-hidden="true" className="h-4 w-1 rounded-full" style={{ background: accent }} />
                  {item.role}
                  {item.format && <span className="font-normal text-muted">· {item.format}</span>}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <CheckIcon aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" style={{ color: accent }} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <TechChip key={technology} name={technology} size="sm" />
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
