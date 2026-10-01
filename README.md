# DTR-07 — Divya Teja Reddy Chekkera

Personal portfolio, laid out as a component datasheet. Live at https://divyatejareddy.vercel.app

Hand-written HTML and one stylesheet: no JavaScript, no framework, no build step, no dependencies.

| File | What it is |
| --- | --- |
| `index.html` | The datasheet. All content lives here. |
| `privacy.html`, `404.html` | Privacy & legal page, and the not-found page. |
| `site.css` | Every style: layout, dark mode, print. |
| `fonts/` | Self-hosted fonts, with their SIL OFL licences. |
| `img/`, `og.png`, `favicon.svg`, `apple-touch-icon.png` | Project plates, social preview image, icons. |
| `vercel.json` | Security headers (strict CSP) and clean URLs. |

**Revising:** edit the text in `index.html`, then update the "Revised" date (top strip and footer) and `<lastmod>` in `sitemap.xml`.

**Deploying:** `npx vercel deploy --prod` from this folder, or push to `main` if the GitHub integration is connected.
