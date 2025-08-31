
# Next.js Social Login (Google, Microsoft Entra ID, LinkedIn)

A minimal Next.js (App Router) starter with **Auth.js (NextAuth)** configured for **Google**, **Microsoft Entra ID (Azure AD)**, and **LinkedIn** OAuth.

## Quick start

```bash
npm install
cp .env.example .env.local
# Fill in your OAuth client IDs/secrets in .env.local
npm run dev
```

Open http://localhost:3000 and try the sign-in buttons.

## Environment variables

Copy `.env.example` to `.env.local` and set the values:

- `AUTH_SECRET` — generate with `npx auth secret`
- `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`
- `AUTH_LINKEDIN_ID`, `AUTH_LINKEDIN_SECRET`
- `AUTH_MICROSOFT_ENTRA_ID_ID`, `AUTH_MICROSOFT_ENTRA_ID_SECRET`, `AUTH_MICROSOFT_ENTRA_ID_TENANT_ID`
- `NEXTAUTH_URL` (set in production)

## OAuth Redirect URLs

Add these in each provider console for local dev:

- Google: `http://localhost:3000/api/auth/callback/google`
- Microsoft Entra ID: `http://localhost:3000/api/auth/callback/microsoft-entra-id`
- LinkedIn: `http://localhost:3000/api/auth/callback/linkedin`

Replace `http://localhost:3000` with your production domain after deploy.

## Deploy

Works on Vercel, Netlify, Cloudflare Pages (with Functions), and Azure Static Web Apps. Be sure to add the **same environment variables** in your host's dashboard and update the **redirect URLs** to your production domain.
