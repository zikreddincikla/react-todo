<div align="center">

# React To-Do Project

**A dark, neon-accented to-do list built with React and Vite — component-based, `localStorage`-backed, zero backend.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Backend](https://img.shields.io/badge/backend-none-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

[Live Demo](https://react-todo-gamma-coral.vercel.app/) · [Report a Bug](https://github.com/zikreddincikla) · [Author](https://github.com/zikreddincikla)

</div>

---

## Overview

React To-Do Project is a lightweight task manager built to practice core React fundamentals — component composition, controlled inputs, and state persistence. Every task lives in a `todos` array in React state and is mirrored to `localStorage` on every change, so the list survives refreshes and browser restarts without a backend, a database, or an API call.

The UI leans into a dark, neon-aqua aesthetic on top of a CSS Grid page skeleton, with hover-driven micro-animations throughout.

> [!TIP]
> Since it's a Vite project, there's no manual build step during development — `npm run dev` gives you hot-reload out of the box.

## Features

- **Add tasks** — via a controlled form, capped at 100 characters
- **Complete tasks** — one click toggles a task's completed state (strike-through + faded style)
- **Delete tasks** — remove individual items instantly
- **Persistent storage** — tasks are saved to `localStorage`, so they're still there when you come back
- **Component-based UI** — `Header`, `Footer`, and `Todo` are isolated, reusable components
- **Responsive-minded layout** — `header / main / footer` CSS Grid skeleton with Flexbox inside each region
- **Neon dark theme** — aqua-accented buttons and cards with `box-shadow` glow on hover
- **Social links in header** — quick access to the author's GitHub and LinkedIn
- **SEO-ready markup** — Open Graph and Twitter Card meta tags already wired up for link previews

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Library | React 19 | Function components, `useState`, `useEffect` |
| Build tool | Vite 8 | Dev server + production bundling, sourcemaps disabled in build |
| Linting | oxlint | `react` + `oxc` plugins, `rules-of-hooks` enforced as an error |
| Styling | CSS3 | CSS Grid + Flexbox, no CSS framework |
| Persistence | `localStorage` | No backend, no database |
| Package manager | npm | — |

## Getting started

```bash
git clone https://github.com/zikreddincikla/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

```bash
npm run build     # production build (dist/)
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

<details>
<summary><b>Project structure</b></summary>

```
react-todo/
├── component/
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   └── Header/
│       ├── Header.css
│       └── Header.jsx
├── image/
│   ├── icon.ico         # Favicon
│   └── image.png        # Social preview card image
├── public/
│   └── icons.svg
├── src/
│   ├── App.css          # Main styles
│   ├── App.jsx          # Root component & main state logic
│   ├── index.css        # Global CSS resets
│   ├── main.jsx         # Vite entry point
│   └── Todo.jsx         # Modular Todo item component
├── index.html           # Meta tags, SEO, and viewport setup
├── package.json         # Scripts and dependencies
└── vite.config.js       # Vite build configurations
```

</details>

<details>
<summary><b>How persistence works</b></summary>

`App.jsx` initializes `todos` state by reading the `todos` key from `localStorage` on first render[^1]. Every subsequent change — add, delete, or toggle — updates that state array, and a `useEffect` hook writes the whole array back to `localStorage` as JSON. The task list you see is always a direct reflection of state, and state is always kept in sync with storage — not the other way around.

[^1]: This means clearing your browser's site data will also clear your to-do list — there's currently no cloud sync or export option.

</details>

## Author

Built and maintained by **Zikreddin**.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/zikreddincikla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/)

## License

Distributed under the MIT License. See `LICENSE` for details.

---

<div align="center">

© 2026 Zikreddin — All rights reserved.

</div>
