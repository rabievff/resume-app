import type { Dictionary } from "@/content/types";
import { Certificates } from "./Certificates";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Skills } from "./Skills";

type ResumePageProps = {
  dict: Dictionary;
};

export function ResumePage({ dict }: ResumePageProps) {
  const hasProjects = dict.projects.items.length > 0;

  const navItems = [
    { id: "experience", label: dict.nav.experience },
    ...(hasProjects ? [{ id: "projects", label: dict.nav.projects }] : []),
    { id: "services", label: dict.nav.services },
    { id: "skills", label: dict.nav.skills },
    { id: "certificates", label: dict.nav.certificates },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        {dict.nav.skipToContent}
      </a>

      <Header locale={dict.locale} name={dict.hero.shortName} nav={dict.nav} items={navItems} />

      <main id="main" className="mx-auto max-w-6xl px-5 md:px-8">
        <Hero dict={dict} />
        <Experience dict={dict} />
        {hasProjects && <Projects dict={dict} />}
        <Services dict={dict} />
        <Skills dict={dict} />
        <Certificates dict={dict} />
        <Contact dict={dict} />
      </main>

      <Footer dict={dict} />
    </>
  );
}
