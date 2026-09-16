import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { CopyEmailButton } from "./CopyEmailButton";
import { TelegramLink } from "./TelegramLink";

type ContactProps = {
  dict: Dictionary;
};

export function Contact({ dict }: ContactProps) {
  const { contact } = dict;

  const profiles = [
    { label: "GitHub", link: site.github },
    { label: "LinkedIn", link: site.linkedin },
  ].flatMap(({ label, link }) => (link ? [{ label, ...link }] : []));

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 md:py-20">
      {/* Панель одинаково тёмная в обеих темах, поэтому цвета здесь заданы явно */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1d3358] to-[#14233c] px-6 py-12 text-white ring-1 ring-white/10 sm:px-10 md:px-14 md:py-16 print:overflow-visible print:rounded-none print:bg-none print:p-0 print:text-black print:ring-0 print:**:text-black">
        <div aria-hidden="true" data-print-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-36 w-36 rounded-full bg-[#ff6b5f] md:-right-16 md:-top-16 md:h-64 md:w-64" />
          <div className="absolute -bottom-16 -right-10 h-28 w-28 rotate-12 rounded-[2rem] bg-[#2a5ee8] md:-bottom-20 md:right-40 md:h-40 md:w-40 md:rounded-[2.5rem]" />
          <div className="absolute right-24 top-48 hidden h-12 w-12 rounded-full bg-[#ffd166] md:block" />
        </div>

        <div className="relative max-w-2xl">
          <h2 id="contact-title" className="font-heading text-3xl font-semibold md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{contact.lead}</p>

          <p className="mt-10 text-sm font-medium text-white/60">{contact.emailLabel}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="font-heading break-all text-[clamp(1.6rem,4.5vw,2.75rem)] font-semibold leading-tight decoration-[#ffd166] decoration-[3px] underline-offset-[6px] hover:underline"
            >
              {site.email}
            </a>
            <CopyEmailButton email={site.email} label={contact.copyEmail} copiedLabel={contact.copied} />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <TelegramLink label={dict.hero.primaryAction} />
            {profiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                data-print-url={profile.url.replace(/^https?:\/\//, "")}
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-white/10"
              >
                {profile.label}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {/* На бумаге кнопки скрыты, поэтому Telegram печатается обычной строкой */}
          <p className="mt-6 hidden text-sm print:block">Telegram: {site.telegram.handle} (t.me/{site.telegram.handle.slice(1)})</p>
        </div>
      </div>
    </section>
  );
}
