# react-pages-demo

A small React + Vite single-page app, deployed to static hosting.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deployment

The built site in `dist/` is a plain static bundle and can be served anywhere.

### GitHub Pages

Live at https://animeshdinda12-netizen.github.io/react-pages-demo/

`vite.config.js` sets `base: '/react-pages-demo/'` so assets resolve under the
project subpath. The build output is published to the `gh-pages` branch, and
Pages is configured to serve from that branch.

### Cloudflare Pages

Two options.

**CLI (from your machine):**

```bash
npm run build
npx wrangler pages project create react-pages-demo --production-branch=main
npx wrangler pages deploy dist --project-name=react-pages-demo
```

Requires a Cloudflare API token with **Cloudflare Pages: Edit** and your account
ID, provided via the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
environment variables. Do not commit these values.

**CI (GitHub Actions):**

`.github/workflows/deploy-cloudflare.yml` builds and deploys on every push to
`main`. Add these repository secrets (Settings -> Secrets and variables ->
Actions):

- `CLOUDFLARE_API_TOKEN` — a token with Cloudflare Pages: Edit
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Then push to `main`, or run the workflow manually from the Actions tab.

> Note: `vite.config.js` defaults `base` to `/react-pages-demo/` for GitHub
> Pages' project subpath. Cloudflare Pages serves from the domain root, so the
> build there sets `BASE_PATH=/`. For a local Cloudflare build use
> `BASE_PATH=/ npm run build`.
