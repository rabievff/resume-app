# Резюме Фирдавса Рабиева

Сайт-резюме на Next.js 16 и Tailwind CSS v4. Две версии: русская (`/`) и английская (`/en`).

**Сайт:** https://rabiev.web.app

## Запуск

```bash
npm install
npm run dev
```

## Где что менять

| Что | Файл |
| --- | --- |
| Тексты, опыт, навыки, сертификаты, проекты (RU) | `content/ru.ts` |
| То же на английском | `content/en.ts` |
| Почта, Telegram, GitHub, LinkedIn, адрес сайта | `lib/site.ts` |
| Цвета и шрифты | `app/globals.css`, `lib/fonts.ts` |

- Раздел «Проекты» и пункт меню появятся, когда в `projects.items` будет хотя бы один проект.
- GitHub и LinkedIn появятся в контактах, когда будут заполнены в `lib/site.ts`.
- У записи опыта есть необязательное поле `format` (например, «Полная занятость», «Контракт»).

## Ошибки и 404

- Любой несуществующий адрес (и пропавший файл из `public`) отдаёт статус 404 и страницу из `app/global-not-found.tsx`.
- Ошибка при рендере страницы показывает ту же страницу в варианте «Что-то сломалось» с кнопкой «Попробовать снова» (`app/(ru)/error.tsx`, `app/(en)/error.tsx`, `app/global-error.tsx`).
- Вёрстка и тексты — в `components/error-page/`. Язык берётся из адреса: `/en/...` — английский.

## Деплой

Сайт статический и живёт на Firebase Hosting: **https://rabiev.web.app**
(проект `rabiev-resume`, сайт `rabiev`).

```bash
npm run deploy
```

Команда собирает сайт в папку `out/` и выкладывает его. Нужен Firebase CLI с входом в аккаунт `rabievff@gmail.com` (`firebase login`).
