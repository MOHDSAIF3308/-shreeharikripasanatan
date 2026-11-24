# Shree Hari Kripa Sanatan Seva Trust — Next.js Website

A Hindi-first, bilingual spiritual website for Shree Hari Kripa Sanatan Seva Trust, with a dedicated biography section for Acharya Dr. Indu Prakash Ji Maharaj.

## Features

- Hindi is the default language, with an English language switch.
- Responsive Next.js App Router page for desktop, tablet and mobile.
- Sections for the Trust, Katha/Yajna/Yoga services, the Acharya's biography, education and teaching, recognitions, international programmes, event gallery and contact.
- Acharya portrait and event images cropped from the supplied PDF.
- A devotional temple-at-sunrise hero visual created for this website.
- Phone, email, YouTube and WhatsApp enquiry links. The enquiry form prepares a WhatsApp message to the primary contact number.
- Basic SEO metadata and Open Graph metadata.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

The production build creates static files in `out/`, ready for Cloudflare Pages.

## Deploy to Cloudflare Pages

### Automatic deployment (recommended)

1. Push this `site/` directory to a GitHub, GitLab or Cloudflare-managed Git repository.
2. In Cloudflare Dashboard, open **Workers & Pages > Create application > Pages > Connect to Git**.
3. Select the repository and use these settings:
   - Root directory: `site`
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: `20` or newer
4. Add `NEXT_PUBLIC_SITE_URL` as an environment variable after the custom domain is known, for example:
   `https://www.example.org`
5. Deploy. Cloudflare provides a free `*.pages.dev` URL immediately. A custom domain can be connected from the project's **Custom domains** page.

### Direct upload

```bash
npm run deploy:pages
```

The first run asks you to authenticate and choose or create a Cloudflare Pages project.

## Content notes

The biography, education, teaching affiliations, services, honours, international programme locations and contact details are adapted from the supplied PDF. The temple hero image is an original generated visual. The image gallery uses photos found on the first page of the supplied PDF.

Before publishing, confirm the preferred official website name/domain and verify all phone numbers, email and social profile URLs. Set `NEXT_PUBLIC_SITE_URL` to the final domain when it is confirmed; the current fallback is `https://shreeharikripasanatanseva.org`.
