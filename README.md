# Virtucom Front

Next.js marketing site for **UAB GKSvirtucom**, deployed to **Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Getting started

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Workers

| Script | Purpose |
| --- | --- |
| `npm run preview` | Build and run locally in the Workers runtime |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run upload` | Build and upload a new Worker version (gradual deploy) |
| `npm run cf-typegen` | Generate Cloudflare binding types |

### First-time deploy

1. Install the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) (already a project dependency).
2. Log in: `npx wrangler login`
3. Optionally set secrets / vars for production:

   ```bash
   npx wrangler secret put NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   ```

   For public `NEXT_PUBLIC_*` values you can also put them under `[vars]` in `wrangler.jsonc` or configure them in the Cloudflare dashboard.
4. Deploy:

   ```bash
   npm run deploy
   ```

You can also connect this GitHub repo in the [Cloudflare dashboard](https://dash.cloudflare.com/) so each merge to your production branch builds and deploys automatically.

## Environment variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Recommended | Google Maps Embed API key for the location map |

Copy `.env.example` to `.env.local` for local Next.js development, and `.dev.vars.example` to `.dev.vars` for `npm run preview`.
