/**
 * Фирменные цвета технологий. Каждый навык на странице окрашен в цвет своей экосистемы,
 * поэтому цвет здесь несёт смысл, а не просто украшает.
 */
const techColors: Record<string, string> = {
  React: "#149eca",
  "Next.js": "var(--ink)",
  TypeScript: "#3178c6",
  JavaScript: "#e2b714",
  "TanStack Query": "#ff4154",
  HTML: "#e34f26",
  CSS: "#1572b6",
  "HTML/CSS": "#e34f26",
  "Tailwind CSS": "#06b6d4",
  "Адаптивная вёрстка": "var(--coral)",
  "Responsive design": "var(--coral)",
  Go: "#00add8",
  PHP: "#777bb4",
  Python: "#3776ab",
  "REST API": "var(--mint)",
  SQL: "#e38c00",
  Git: "#f05032",
  Vite: "#646cff",
  "React Router": "#ca4245",
  "Ant Design": "#1677ff",
  "Chart.js": "#ff6384",
  PWA: "#5a0fc8",
  "Node.js": "#5fa04e",
  "Telegram Bot API": "#26a5e4",
  Firebase: "#f58220",
  Firestore: "#f58220",
  SSO: "var(--mint)",
  PostgreSQL: "#4169e1",
  MySQL: "#00758f",
  SQLite: "#0f80cc",
};

export function techColor(name: string): string {
  return techColors[name] ?? "var(--blue)";
}
