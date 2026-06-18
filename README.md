# sondvo.github.io

Personal portfolio site for **Duy Son (Jackson) Vo** — PhD student in Cellular & Molecular Biology (ASU / TGen), working in single-cell & spatial-omics and deep learning.

Live at <https://sondvo.github.io>.

## Editing

Everything lives in a single self-contained [`index.html`](index.html) — no build step, no dependencies. Edit it directly and push to `main`; GitHub Pages serves it automatically.

- **Content** is in plain HTML sections (`#about`, `#research`, `#publications`, `#skills`, `#education`, `#awards`).
- **Styling** is in the `<style>` block at the top; colors are CSS variables under `:root` (dark) and `:root[data-theme="light"]` (light).
- A theme toggle (🌙 / ☀) switches dark/light and remembers the choice.
