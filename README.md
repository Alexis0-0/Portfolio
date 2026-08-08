# John Alexis Dela Cruz — Portfolio

A futuristic, professional personal portfolio built for an IT Support / Technical Support graduate. Dark-first design, an interactive Three.js network-node hero visual, smooth scroll reveals, and a fully working (configurable) contact form.

**Live demo:** _add your GitHub Pages URL here after deploying_

---

## 1. Project overview

This is a single-page portfolio built with React + Vite. Content (name, skills, experience, projects, etc.) lives in one file — `src/data/portfolio.js` — so it can be updated without touching component code. It's designed to be cloned, customized with your own information, and deployed straight to GitHub Pages.

## 2. Features

- Futuristic dark theme with a polished light-mode alternative (toggle persists via `localStorage`, and follows system preference on first visit)
- Interactive 3D network-node hero visual (Three.js), with automatic simplification on low-power/mobile devices, a CSS fallback if WebGL is unavailable, and full `prefers-reduced-motion` support
- Sticky, blurred navigation bar with active-section highlighting and an animated mobile drawer
- Scroll-reveal animations, a top scroll-progress indicator, and a custom cursor (desktop only)
- Filterable project showcase, animated skill cards, and an animated experience timeline
- Contact form that posts to Formspree or Web3Forms if configured, and gracefully falls back to a `mailto:` link if not
- Responsive from 320px mobile up to large desktop; keyboard-accessible; semantic HTML
- SEO metadata (Open Graph, Twitter Card, canonical URL, `robots.txt`, `sitemap.xml`)
- GitHub Actions workflow that builds and deploys to GitHub Pages automatically on push

## 3. Technologies

- HTML5, CSS3 (custom properties / design tokens, no CSS framework)
- React 18 + Vite
- Three.js (hero 3D visual)
- lucide-react (icons)

## 4. Installation

```bash
npm install
```

## 5. Development

```bash
npm run dev
```

Opens the site locally with hot reload (usually at `http://localhost:5173`).

## 6. Build

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 7. GitHub deployment

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

## 8. GitHub Pages configuration

This project deploys via GitHub Actions (`.github/workflows/deploy.yml`), which builds the site and publishes `dist/` automatically on every push to `main`.

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The first successful run publishes the site.
4. Your site will be available at `https://<your-username>.github.io/<your-repo>/`.

**Important — set the base path:** open `vite.config.js` and set `BASE_PATH` to match your repository name, e.g.:

```js
const BASE_PATH = "/portfolio/";
```

If you're deploying to a user/organization site (`<your-username>.github.io`) or a custom domain instead of a project site, set `BASE_PATH` to `"/"`.

Also update the placeholder URLs (`https://your-username.github.io/portfolio/`) in `index.html`, `public/robots.txt`, and `public/sitemap.xml` to your real deployed URL.

## 9. How to customize content

Edit **`src/data/portfolio.js`**. It contains everything shown on the site:

- `personal` — name, role, tagline, intro, resume path, profile image path
- `socialLinks` — GitHub / LinkedIn / Facebook / email
- `quickFacts`, `experience`, `education`, `skillCategories`, `services`
- `projects` and `projectCategories`
- `certifications` (empty by default — see below)
- `navItems`

No other file needs to change for a normal content update.

## 10. How to add images

Place image files in `public/images/`:

- `profile.jpg` — your headshot, referenced by `personal.profileImage`
- `project-1.jpg` — screenshot for the featured project, referenced by each project's `image` field

If an image file is missing, the site automatically shows a text fallback instead of a broken image icon — so it still works without them, just less polished. See `public/images/README.txt`.

For the social preview image, add `public/images/og-cover.jpg` (recommended size 1200×630).

## 11. How to add your resume

Place your resume PDF at:

```
public/resume.pdf
```

The "Download Resume" and "View Resume" buttons already point to `/resume.pdf`. If the file isn't present, those links will 404 — add it before deploying live.

## 12. How to configure the contact form

GitHub Pages is static and has no backend, so the contact form uses a third-party form service. Configure **one** of the following via environment variables (copy `.env.example` to `.env` for local development, and add the same variable as a **repository secret** for the GitHub Actions build):

**Option A — Formspree**
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

**Option B — Web3Forms**
```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

If neither is set, submitting the form opens the visitor's email client with a pre-filled `mailto:` link instead — the form still works, just without in-page delivery.

To add the secrets for automated deploys: **Settings → Secrets and variables → Actions → New repository secret**, using the same variable names as above.

## 13. Placeholder values to replace before going live

- `src/data/portfolio.js` → `personal.email`, `socialLinks` (GitHub/LinkedIn/Facebook), `projects[].liveUrl` / `githubUrl` (currently `#PROJECT-LINK` / `#GITHUB-LINK`)
- `vite.config.js` → `BASE_PATH`
- `index.html`, `public/robots.txt`, `public/sitemap.xml` → the placeholder `https://your-username.github.io/portfolio/` URL
- `public/resume.pdf`, `public/images/profile.jpg`, `public/images/project-1.jpg`, `public/images/og-cover.jpg` → add your real files
- `certifications` in `src/data/portfolio.js` → currently empty; add entries once you have certifications to list

---

Built with HTML, CSS, and JavaScript (React + Vite + Three.js).
