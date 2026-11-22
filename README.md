# PR 360 Business Solution — Website

A professional, responsive marketing website for **PR 360 Business Solution**, a Software
Testing & Quality Assurance company based in Pune, India. Built with React + Vite, no backend.

> Reliable QA Expertise. Quality You Can Trust.

## Tech stack
- **React 18** + **Vite 5** (JavaScript / JSX)
- **Lucide React** icons
- Plain CSS with a design-token system (`src/index.css`)
- **Netlify Forms** for the contact form (no backend required)

## Getting started
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure
```
pr360-website/
├── public/              # favicon, logo, robots.txt, sitemap.xml, _redirects
├── src/
│   ├── components/      # Navbar, Hero, About, Services, Engagement, Portfolio,
│   │                    # ProjectModal, Approach, WhyChooseUs, Technologies,
│   │                    # Contact, Footer, Logo, Icon
│   ├── data/            # siteContent.js + portfolioData.js (all copy lives here)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # design system + all component styles
├── index.html
├── netlify.toml
└── vite.config.js
```
All text content is in `src/data/` — edit there to update the site without touching layout.

## Editing content
- **Services, engagement models, approach, etc.** → `src/data/siteContent.js`
- **Portfolio / demo projects** → `src/data/portfolioData.js`
- **Contact details** are in `siteContent.js` under `company`.

## Portfolio repositories (important)
Each demo project currently shows **"Repository coming soon"** because no public repo is
linked yet. When you publish a project on GitHub, set its `repo` URL in
`src/data/portfolioData.js`:
```js
repo: 'https://github.com/<your-org>/<repo>',
```
The card and modal will automatically switch to a live "View Source Code" link.
Add real screenshots / report files and reference them the same way.

## Contact form (Netlify)
The form uses **Netlify Forms**:
1. A hidden detection form is in `index.html` (Netlify's build bot needs it).
2. The live React form posts to the same `form-name="contact"`.

After deploying to Netlify:
1. Open **Site settings → Forms** to see submissions.
2. Add a **form notification** to email `pr360business@gmail.com`.
3. Submit a real test enquiry to confirm delivery.

> Note: the form only works once deployed to Netlify (or run through the Netlify CLI).
> On `localhost` the submission will not be captured — that is expected.

## Deploy to Netlify
**Option A — Git (recommended):**
1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import from Git**.
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Deploy. HTTPS is enabled automatically.

**Option B — Drag & drop:** run `npm run build`, then drag the `dist/` folder onto
[Netlify Drop](https://app.netlify.com/drop). (Forms work best with the Git/CLI flow.)

## SEO
Title, meta description, Open Graph tags, `robots.txt`, `sitemap.xml`, favicon and
JSON-LD structured data are included. Update the canonical URL in `index.html` and the
URLs in `sitemap.xml` / `robots.txt` once the final domain is known.
