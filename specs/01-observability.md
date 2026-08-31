# Observability

Production monitoring for [oliveiraswell.github.io](https://oliveiraswell.github.io).

## Sentry (errors)

- **Project:** `wellington-oliveira/wellington-oliveira`
- **Client:** `@sentry/react`, initialized in `src/main.jsx` when `VITE_SENTRY_DSN` is set
- **CI:** GitHub Actions passes `secrets.VITE_SENTRY_DSN` at build time so the DSN is baked into the production bundle without committing it
- **Local:** copy `.env.example` to `.env.local` and set `VITE_SENTRY_DSN` if you need to test error reporting locally

## Google Analytics 4 (traffic)

- **Measurement ID:** `G-XG7QCYN9FM`
- **Integration:** gtag snippet in `index.html` (pageview on load; no React routing)
- Unchanged by Sentry work — both run independently in production

## UptimeRobot (availability)

- External HTTP monitor on the live site URL
- Alerts when the homepage is unreachable; complements Sentry (runtime errors) and GA (usage)
