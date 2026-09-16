"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, Square2StackIcon } from "@heroicons/react/24/outline";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
};

export function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Буфер обмена недоступен (например, без HTTPS) — остаётся ссылка mailto рядом
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
    >
      {copied ? <CheckIcon className="h-4 w-4 text-[#3ddbb2]" /> : <Square2StackIcon className="h-4 w-4" />}
      {copied ? copiedLabel : label}
    </button>
  );
}
