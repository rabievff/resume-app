"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { site } from "@/lib/site";
import { techColor } from "@/lib/tech-colors";

type HeroVisualProps = {
  photoAlt: string;
};

/** Слой сдвигается за курсором сильнее или слабее — отсюда ощущение глубины. */
const layer = (depth: number): CSSProperties => ({
  transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
  transition: "transform 0.25s ease-out",
});

const floatingChips = [
  { name: "React", position: "left-[-6%] top-[12%]", depth: 22, delay: "0s" },
  { name: "Go", position: "right-[-8%] top-[42%]", depth: 28, delay: "0.8s" },
  { name: "TypeScript", position: "right-[4%] bottom-[-4%]", depth: 18, delay: "1.6s" },
];

export function HeroVisual({ photoAlt }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Параллакс за мышью. Работает всегда: системная настройка «меньше анимаций» в Windows
  // выключена у многих ПК по умолчанию, и тогда сайт выглядел бы застывшим
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const clamp = (value: number) => Math.max(-1, Math.min(1, value));

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      // На тач-экранах палец не «водит» курсор — там слои не дёргаем
      if (event.pointerType === "touch") return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        // Курсор далеко от фото не должен уводить слои за край — ограничиваем сдвиг
        const x = clamp((event.clientX - rect.left) / rect.width - 0.5);
        const y = clamp((event.clientY - rect.top) / rect.height - 0.5);
        element.style.setProperty("--px", x.toFixed(3));
        element.style.setProperty("--py", y.toFixed(3));
      });
    };
    const onLeave = () => {
      element.style.setProperty("--px", "0");
      element.style.setProperty("--py", "0");
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/5] w-full max-w-[340px]">
      {/* Цветные фигуры за фото */}
      <div data-print-hidden aria-hidden="true" className="absolute inset-0" style={layer(-14)}>
        <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-coral" />
        <div className="absolute -bottom-6 -left-10 h-32 w-32 rotate-12 rounded-[2rem] bg-blue" />
        <div className="absolute -left-4 top-1/3 h-10 w-10 rounded-full bg-sun" />
      </div>

      {/* Фото в рамке с лёгким наклоном */}
      <div className="absolute inset-0" style={layer(8)}>
        <div className="relative h-full w-full rotate-[2.5deg] overflow-hidden rounded-[2rem] border-[6px] border-surface bg-surface-muted shadow-[0_30px_60px_-20px_rgba(20,35,60,0.45)] transition-transform duration-500 hover:rotate-0">
          <Image
            src={site.photo}
            alt={photoAlt}
            fill
            sizes="(max-width: 768px) 80vw, 340px"
            className="object-cover"
            preload
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b1322]/50 to-transparent" />
        </div>
      </div>

      {/* Метки технологий вокруг фото */}
      {floatingChips.map((chip) => (
        <div
          key={chip.name}
          data-print-hidden
          aria-hidden="true"
          className={`absolute ${chip.position}`}
          style={layer(chip.depth)}
        >
          <div
            className="animate-float flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-ink shadow-[0_10px_25px_-10px_rgba(20,35,60,0.35)]"
            style={{ animationDelay: chip.delay }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: techColor(chip.name) }} />
            {chip.name}
          </div>
        </div>
      ))}

      {/* Карточка с кодом: вместо слов показывает, что это резюме разработчика */}
      <div
        data-print-hidden
        aria-hidden="true"
        className="absolute -bottom-10 -left-12 hidden sm:block"
        style={layer(34)}
      >
        <div className="rounded-2xl border border-white/10 bg-code-bg p-4 font-mono text-[12px] leading-relaxed text-[#c8d3e6] shadow-[0_20px_40px_-15px_rgba(11,19,34,0.6)]">
          <div className="mb-2.5 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3ddbb2]" />
          </div>
          <div>
            <span className="text-[#ff8a7a]">const</span> <span className="text-[#8fb4ff]">firdavs</span> = {"{"}
          </div>
          <div className="pl-4">
            stack: [<span className="text-[#7ee0c3]">&quot;React&quot;</span>, <span className="text-[#7ee0c3]">&quot;Go&quot;</span>],
          </div>
          <div className="pl-4">
            openToWork: <span className="text-[#ffd166]">true</span>,
          </div>
          <div>{"};"}</div>
        </div>
      </div>
    </div>
  );
}
