type ProfileLink = {
  handle: string;
  url: string;
};

/** Факты, которые не зависят от языка страницы. */
export const site: {
  url: string;
  email: string;
  photo: string;
  telegram: ProfileLink;
  github?: ProfileLink;
  linkedin?: ProfileLink;
  paths: { ru: string; en: string };
} = {
  // Боевой адрес на Firebase Hosting; для другого домена задайте NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rabiev.web.app",
  email: "rabievff@gmail.com",
  photo: "/photo.jpg",
  telegram: { handle: "@Rab1ev", url: "https://t.me/Rab1ev" },
  // Ссылки появятся на сайте, как только будут заполнены
  github: { handle: "rabievff", url: "https://github.com/rabievff" },
  linkedin: undefined,
  paths: { ru: "/", en: "/en" },
};
