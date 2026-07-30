# Site Architecture

## Application structure

The website is a client-rendered React application using React Router. `src/App.jsx` defines all public routes. Each route renders a page component that composes shared navigation and footer components with page-specific content.

## Content placement

- Route-level composition belongs in `src/pages`.
- Reusable site elements belong in `src/components`.
- Structured page copy that maps over cards, stages, or FAQ entries belongs in `src/data`.
- Brand images belong in `src/assets`.

## Routing and scroll behavior

`ScrollToTop` observes `location.pathname` and moves the browser viewport to the top after every route change. It is mounted once inside `BrowserRouter` and before `Routes`.

## Deployment model

GitHub `main` is the production source branch. Cloudflare Pages builds the Vite application and publishes `dist/`. The redirect rule in `public/_redirects` ensures direct requests to client routes resolve to the SPA entry point.

## Institutional architecture represented by the site

```text
Trust Infrastructure
  Architectural discipline

Autonomous Execution Governance
  Governance discipline

CoreIdentity Technologies
  Owner and operator of the technology and infrastructure

CoreG
  Authorized private capital markets intermediary governed by those capabilities
```

The public site should communicate this relationship without exposing internal product implementation unless a page specifically requires it.
