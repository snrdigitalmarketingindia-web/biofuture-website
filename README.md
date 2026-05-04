# BioFuture Website
**RDN Bio Products LLP** — Save the Earth for Tomorrow

## How to run locally

1. Install Node.js from https://nodejs.org (download the LTS version)
2. Open a terminal / command prompt in this folder
3. Run: `npm install`
4. Run: `npm start`
5. Website opens at http://localhost:3000

## How to push to GitHub (first time)

1. Go to https://github.com and create a free account
2. Click "New repository" → name it `biofuture-website` → click "Create repository"
3. Open terminal in this folder and run these commands one by one:

```
git init
git add .
git commit -m "Initial BioFuture website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/biofuture-website.git
git push -u origin main
```

Replace YOUR_USERNAME with your GitHub username.

## How to deploy on Netlify (free hosting)

1. Go to https://netlify.com → Sign up free with your Gmail
2. Click "Add new site" → "Import from GitHub"
3. Select your `biofuture-website` repository
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"
6. Your site goes live in ~2 minutes!

## How to connect a custom domain

1. Buy a domain (e.g. biofuture.in) from Namecheap or GoDaddy (~₹800/yr)
2. In Netlify → Site settings → Domain management → Add custom domain
3. Follow Netlify's DNS instructions to point your domain

## How to receive enquiry form submissions by email

1. In Netlify → Forms section → add your email to notifications
2. Or sign up at https://formspree.io for free form handling

## Pages

- `/` — Home with hero, products preview, enquiry form
- `/products` — Full spec tables for all 6 product categories
- `/about` — Company story, DRDO badge, values, timeline
- `/customisation` — Placeholder with WhatsApp CTA
- `/gallery` — Placeholder with redirect to products
- `/contact` — Map, hours, contact form, WhatsApp CTA

## To update content

Open the relevant file in VS Code and edit the text. Save → commit → push to GitHub → Netlify auto-deploys.

- Homepage content: `src/pages/Home.js`
- Products & specs: `src/pages/Products.js`
- About page: `src/pages/About.js`
- Contact/Gallery/Customisation: `src/pages/OtherPages.js`
- Colors & fonts: `src/index.css`

## Contact
📞 +91-7301222666 · +91-7301777444
✉ biofuture.rdn@gmail.com
