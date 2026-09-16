import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { site } from "@/lib/site";

type TelegramLinkProps = {
  label: string;
  className?: string;
};

/** Главная кнопка связи: узнаваемый синий Telegram, белый текст с контрастом не ниже 4.5:1. */
export function TelegramLink({ label, className = "" }: TelegramLinkProps) {
  return (
    <a
      href={site.telegram.url}
      target="_blank"
      rel="noreferrer"
      data-print-hidden
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-telegram px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(25,118,200,0.8)] transition-all hover:-translate-y-0.5 hover:bg-telegram-hover hover:shadow-[0_16px_36px_-12px_rgba(25,118,200,0.9)] active:translate-y-0 ${className}`}
    >
      <PaperAirplaneIcon className="h-5 w-5 -rotate-12 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      {label}
    </a>
  );
}
