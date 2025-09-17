# WinBuzzVIP – Single Page Landing (React + CSS)

A pixel-perfect, responsive landing page inspired by the provided reference, built with plain HTML, CSS and React (functional components only). No Next.js.

## Getting Started

1. Put your assets inside `assets/`:
   - `logo-client.svg`
   - `hero-desktop.jpg`, `hero-mobile.jpg`
   - supported site icons: `site-1.png` … `site-9.png` (or .webp)
   - `favicon-32.png`
   - optional section images: `section-1.jpg`, `section-2.jpg`, etc.
2. Open `index.html` in your browser. No build step required.

## Customize

- Update the WhatsApp link in `App.js` (`https://wa.me/91XXXXXXXXXX`).
- Replace Instagram and Telegram `href` values with your links.
- Update CTA wording by replacing text with content from `assets/cta-button-text.txt` if provided.

## Tech

- React 18 via CDN, single file `App.js` with functional components
- Plain CSS in `App.css`; premium gold + indigo theme
- Lightweight animations (bonus counter), accessible semantics

## Accessibility

- Semantic landmarks (`nav`, `header`, `section`, `footer`), ARIA labels, visible focus states
- Sufficient color contrast and keyboard reachable controls

## Notes

- No external UI frameworks; no server-side rendering
- Only your provided images are referenced. Replace any placeholders under `assets/` with your actual files.


