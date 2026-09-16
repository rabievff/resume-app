import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Dictionary } from "@/content/types";
import { techColor } from "./tech-colors";

export const ogSize = { width: 1200, height: 630 };

const palette = {
  bg: "#f5f6fa",
  ink: "#14233c",
  muted: "#56617a",
  line: "#e2e6ef",
  coral: "#f2503f",
  blue: "#2a5ee8",
  sun: "#ffc845",
  mint: "#12a883",
};

const chips = ["React", "Next.js", "TypeScript", "Go"];

/** Превью ссылки в стиле страницы: заголовок, метки технологий и фото с цветными фигурами. */
export async function renderOgImage(dict: Dictionary) {
  const photo = await readFile(join(process.cwd(), "public", "photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 48,
          padding: "0 72px",
          background: palette.bg,
          color: palette.ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              border: `1px solid ${palette.line}`,
              background: "#ffffff",
              fontSize: 22,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 5, background: palette.mint }} />
            {dict.hero.name}
          </div>

          <div style={{ marginTop: 26, fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5 }}>
            {dict.hero.titleLead}
          </div>
          <div style={{ display: "flex", marginTop: 4 }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: palette.coral,
                backgroundImage: `linear-gradient(transparent 62%, ${palette.sun}b3 62%, ${palette.sun}b3 92%, transparent 92%)`,
              }}
            >
              {dict.hero.titleAccent}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
            {chips.map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: `1px solid ${palette.line}`,
                  background: "#ffffff",
                  fontSize: 24,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: chip === "Next.js" ? palette.ink : techColor(chip),
                  }}
                />
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 330, height: 410 }}>
          <div
            style={{
              position: "absolute",
              right: -40,
              top: -30,
              width: 190,
              height: 190,
              borderRadius: 95,
              background: palette.coral,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -40,
              bottom: -20,
              width: 130,
              height: 130,
              borderRadius: 32,
              background: palette.blue,
              transform: "rotate(12deg)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={330}
            height={410}
            style={{
              position: "absolute",
              inset: 0,
              width: 330,
              height: 410,
              objectFit: "cover",
              borderRadius: 32,
              border: "8px solid #ffffff",
              transform: "rotate(2.5deg)",
            }}
          />
        </div>
      </div>
    ),
    ogSize,
  );
}
