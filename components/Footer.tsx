import type { Dictionary } from "@/content/types";

type FooterProps = {
  dict: Dictionary;
};

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span>
          © {new Date().getFullYear()} {dict.footer.copyright}
        </span>
        <span data-print-hidden>{dict.footer.builtWith}</span>
      </div>
    </footer>
  );
}
