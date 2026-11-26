# Virtucom Front

Next.js marketing site for **UAB GKSvirtucom**, migrated from **Vercel** to **Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Local development

```bash
npm install
cp .env.example .env.local   # or use the committed .dev.vars for Workers preview
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Workers (production)

| Script | Purpose |
| --- | --- |
| `npm run preview` | Build and run locally in the Workers runtime |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run upload` | Build and upload a new Worker version (gradual deploy) |
| `npm run cf-typegen` | Generate Cloudflare binding types |

### Deploy

1. Create an API token in the [Cloudflare dashboard](https://dash.cloudflare.com/profile/api-tokens) with **Workers Scripts Edit** + **Account Settings Read**.
2. Set credentials locally (or in CI):

   ```bash
   export CLOUDFLARE_API_TOKEN=...
   export CLOUDFLARE_ACCOUNT_ID=...
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

The Worker name is `virtucom-front` (see `wrangler.jsonc`). After the first deploy you get a `*.workers.dev` URL; attach a custom domain in the Cloudflare dashboard if needed.

You can also connect this GitHub repo under **Workers → Create → Git integration** so production deploys on every merge to `main`.

### Leaving Vercel

- This repo includes `vercel.json` that **skips Vercel builds** (`ignoreCommand` exits 0).
- Disconnect the project in the [Vercel dashboard](https://vercel.com/dashboard) so the blocked-account check stops failing on PRs.
- Point DNS / custom domains at Cloudflare instead of `virtucom-front.vercel.app`.

## Environment variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Yes (for the map) | Google Maps Embed API key |

Local: `.env.local` or `.dev.vars` (both gitignored).  
Production: `vars` in `wrangler.jsonc` (or Cloudflare dashboard → Worker → Settings → Variables).
