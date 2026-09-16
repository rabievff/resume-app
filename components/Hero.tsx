import type { Dictionary } from "@/content/types";
import { HeroVisual } from "./HeroVisual";
import { PrintResumeButton } from "./PrintResumeButton";
import { TelegramLink } from "./TelegramLink";

type HeroProps = {
  dict: Dictionary;
};

const fieldColors = ["var(--coral)", "var(--blue)", "var(--mint)", "var(--sun)"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero({ dict }: HeroProps) {
  const { hero } = dict;

  return (
    <div id="top" className="relative overflow-x-clip lg:overflow-x-visible">
      <div
        aria-hidden="true"
        data-print-hidden
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[680px]"
      />

      <div className="relative grid items-center gap-16 pb-10 pt-10 md:pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:pb-16">
        <div>
          <p
            className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink"
            style={delay(0)}
          >
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
            {hero.availability}
          </p>

          <h1
            className="font-heading animate-rise mt-6 text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.08] text-ink"
            style={delay(90)}
          >
            {hero.titleLead}
            <br />
            <span className="marker-highlight text-coral">{hero.titleAccent}</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
            style={delay(180)}
          >
            {hero.lead}
          </p>

          <dl className="animate-rise mt-8 grid max-w-xl grid-cols-2 gap-3" style={delay(270)}>
            {hero.fields.map((field, index) => (
              <div key={field.label} className="rounded-2xl border border-line bg-surface px-4 py-3">
                <dt className="flex items-center gap-2 text-xs font-medium text-muted">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: fieldColors[index % fieldColors.length] }}
                  />
                  {field.label}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink">{field.value}</dd>
              </div>
            ))}
          </dl>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={delay(360)}>
            <TelegramLink label={hero.primaryAction} />
            <PrintResumeButton
              label={hero.printAction}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink/15 bg-surface px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            />
          </div>
        </div>

        <div className="animate-rise px-10 sm:px-12 lg:pl-0 lg:pr-8" style={delay(200)}>
          <HeroVisual photoAlt={hero.photoAlt} />
        </div>
      </div>
    </div>
  );
}
