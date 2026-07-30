# CoreG Website

Public website for **CoreG**, an authorized intermediary serving private capital markets.

The site presents CoreG's institutional identity, transaction process, governance standard, participant categories, partnership pathways, leadership, and frequently asked questions. It is intentionally written from the perspective of the intermediary. The underlying Trust Infrastructure and Autonomous Execution Governance capabilities are owned and operated by CoreIdentity Technologies.

## Technology

- React 19
- React Router
- Vite 6
- Tailwind CSS
- Cloudflare Pages

## Local development

```bash
npm ci
npm run dev
```

Vite will print the local development URL.

## Production build

```bash
npm ci
npm run build
```

The production output is written to `dist/`.

## Deployment

The production site is deployed through Cloudflare Pages from the GitHub repository's `main` branch.

Recommended Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

The `public/_redirects` file supports client-side routing by directing route requests to the React application.

## Page architecture

| Route | Purpose |
| --- | --- |
| `/` | CoreG identity, purpose, operating standard, and pathways to deeper pages |
| `/platform` | The governed transaction process from intake through completion |
| `/governance` | The standard under which transaction activity is verified and recorded |
| `/who-we-serve` | Capital providers, transaction principals, transaction participants, and digital asset participants |
| `/partners` | Referral and integration partnership pathways |
| `/company` | Firm identity, mission, vision, and relationship to CoreIdentity Technologies |
| `/leadership` | Executive leadership |
| `/faq` | Market, participant, verification, sanctions, broker, asset, and digital-asset questions |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |

## Project structure

```text
src/
  assets/       Brand images
  components/   Shared navigation, footer, pipeline, buttons, and route behavior
  data/         Page-specific structured content
  pages/        Route-level React components
public/         Static deployment files
```

## Content standards

The site follows these rules:

1. CoreG is described as an authorized private capital markets intermediary.
2. CoreG does not claim ownership of the governance infrastructure beneath it.
3. CoreIdentity Technologies is identified as the owner and operator of Trust Infrastructure and Autonomous Execution Governance.
4. Technology details should support—not replace—CoreG's institutional identity.
5. Participant and regulatory statements must avoid implying that access to CoreG grants a license, registration, approval, or transaction guarantee.
6. Digital assets are held to the same governed operating standard as traditional assets, with additional wallet, custody, provenance, and forensic considerations where supported.

See `docs/CONTENT_GUIDE.md` for detailed editorial guidance.

## Route scrolling

`src/components/ScrollToTop.jsx` resets the browser to the top whenever the route pathname changes. This prevents internal navigation from retaining the scroll position of the prior page.

## Versioning

Current content baseline: **CoreG Website v2.2**.

See [CHANGELOG.md](CHANGELOG.md) for release history.
