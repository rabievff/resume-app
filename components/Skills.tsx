import type { Dictionary } from "@/content/types";
import { Section } from "./Section";
import { TechChip } from "./TechChip";

type SkillsProps = {
  dict: Dictionary;
};

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;

  return (
    <Section id="skills" title={skills.title} subtitle={skills.subtitle}>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.label} className="rounded-3xl border border-line bg-surface p-6 md:p-7">
            <h3 className="font-heading text-lg font-semibold text-ink">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li key={item}>
                  <TechChip name={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
