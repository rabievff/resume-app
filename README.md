# Firdavs Rabiev — Resume

**[Русский](#русский) · [English](#english)**

🌐 **https://rabiev.web.app** · [English version](https://rabiev.web.app/en)

---

## Русский

![Превью сайта](docs/preview-ru.jpg)

Сайт-резюме fullstack-разработчика: опыт работы, проекты, услуги, навыки, сертификаты и контакты. Две языковые версии — русская (`/`) и английская (`/en`).

### Возможности

- Русская и английская версии с переключателем-тумблером
- Светлая и тёмная тема, по умолчанию — как в системе
- Адаптивная вёрстка под телефон, планшет и компьютер
- Кнопка «Сохранить в PDF» с отдельной вёрсткой для печати
- Превью ссылки для соцсетей (Open Graph) на каждом языке
- Своя страница 404 для неверных адресов и страница ошибки, если что-то сломалось
- Статический сайт на Firebase Hosting, без сервера

### Стек

Next.js 16 (App Router, статический экспорт) · React 19 · TypeScript · Tailwind CSS v4 · next-themes · Firebase Hosting

### Запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:3000

| Команда | Что делает |
| --- | --- |
| `npm run dev` | Режим разработки |
| `npm run build` | Сборка статического сайта в папку `out/` |
| `npm run preview` | Просмотр собранного сайта локально через Firebase |
| `npm run lint` | Проверка кода |
| `npm run deploy` | Сборка и выкладка на Firebase Hosting |

### Где что менять

| Что | Файл |
| --- | --- |
| Тексты, опыт, проекты, навыки, сертификаты (RU) | `content/ru.ts` |
| То же на английском | `content/en.ts` |
| Почта, Telegram, GitHub, LinkedIn, адрес сайта | `lib/site.ts` |
| Цвета и шрифты | `app/globals.css`, `lib/fonts.ts` |
| Страница 404 и страница ошибки | `components/error-page/` |

- Раздел «Проекты» и пункт меню появляются, когда в `projects.items` есть хотя бы один проект.
- GitHub и LinkedIn показываются в контактах, если заполнены в `lib/site.ts`.

### Ошибки и 404

- Любой несуществующий адрес отдаёт статус 404 и страницу из `app/global-not-found.tsx`.
- Ошибка при отображении страницы показывает ту же страницу в варианте «Что-то сломалось» с кнопкой «Попробовать снова».
- Язык страницы ошибки берётся из адреса: `/en/...` — английский.

### Деплой

Сайт выкладывается на Firebase Hosting (проект `rabiev-resume`, сайт `rabiev`):

```bash
npm run deploy
```

Нужен Firebase CLI и вход в аккаунт (`firebase login`). Страницы отдаются с `Cache-Control: no-cache`, поэтому новая версия видна сразу после выкладки.

---

## English

![Site preview](docs/preview-en.jpg)

A fullstack developer resume website: work experience, projects, services, skills, certificates and contacts. Available in Russian (`/`) and English (`/en`).

### Features

- Russian and English versions with a toggle switch
- Light and dark themes, following the system setting by default
- Responsive layout for phones, tablets and desktops
- “Save as PDF” button with a dedicated print layout
- Link previews for social networks (Open Graph) in both languages
- Custom 404 page for wrong URLs and an error page if something breaks
- Static site on Firebase Hosting, no server required

### Tech stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 · next-themes · Firebase Hosting

### Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000

| Command | What it does |
| --- | --- |
| `npm run dev` | Development mode |
| `npm run build` | Builds the static site into `out/` |
| `npm run preview` | Serves the built site locally with Firebase |
| `npm run lint` | Lints the code |
| `npm run deploy` | Builds and deploys to Firebase Hosting |

### Where to edit

| What | File |
| --- | --- |
| Copy, experience, projects, skills, certificates (RU) | `content/ru.ts` |
| The same in English | `content/en.ts` |
| Email, Telegram, GitHub, LinkedIn, site URL | `lib/site.ts` |
| Colours and fonts | `app/globals.css`, `lib/fonts.ts` |
| 404 and error pages | `components/error-page/` |

- The Projects section and its menu item appear once `projects.items` has at least one project.
- GitHub and LinkedIn show up in the contacts once they are set in `lib/site.ts`.

### Errors and 404

- Any unknown URL returns status 404 with the page from `app/global-not-found.tsx`.
- A rendering error shows the same page in its “Something broke” variant with a “Try again” button.
- The error page language follows the URL: `/en/...` is English.

### Deployment

The site is deployed to Firebase Hosting (project `rabiev-resume`, site `rabiev`):

```bash
npm run deploy
```

Requires the Firebase CLI and a signed-in account (`firebase login`). Pages are served with `Cache-Control: no-cache`, so a new version is visible right after deployment.
