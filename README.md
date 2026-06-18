# sondvo.github.io

Personal portfolio site for **Duy Son (Jackson) Vo** — PhD student in Cellular & Molecular Biology (ASU / TGen), working in single-cell & spatial-omics and deep learning.

Live at <https://sondvo.github.io>.

## Structure

Multi-page static site — no build step, no dependencies. Edit directly and push to `main`; GitHub Pages serves it automatically.

| File | Page |
| --- | --- |
| [`index.html`](index.html) | Home — hero, about, highlights |
| [`research.html`](research.html) | Research experience (timeline) |
| [`publications.html`](publications.html) | Publications & posters |
| [`cv.html`](cv.html) | Education, skills, teaching, honors |
| [`styles.css`](styles.css) | Shared styling (all pages) |
| [`main.js`](main.js) | Shared theme toggle |

## Editing

- Each page shares the same top **nav bar**; mark the current page's link with `class="active"`.
- **Styling** is centralized in `styles.css`; colors are CSS variables under `:root` (dark) and `:root[data-theme="light"]` (light).
- A theme toggle (🌙 / ☀) switches dark/light and remembers the choice across pages. An inline snippet in each `<head>` applies the saved theme before paint to avoid flicker.
