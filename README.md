# Shiv Shakti Tours Static Website

A fast, mobile-first travel agency website built with only HTML, CSS and JavaScript. It is ready for Firebase Hosting and does not require a backend, database or paid server.

## Folder Structure

```text
shiv_shakti_travel/
├── index.html
├── packages.html
├── about.html
├── contact.html
├── 404.html
├── firebase.json
├── robots.txt
├── sitemap.xml
├── assets/
│   └── favicon.svg
├── css/
│   └── styles.css
└── js/
    ├── data.js
    └── app.js
```

## Edit Content

Most website content is editable from:

```text
js/data.js
```

Update these fields before going live:

- `business.phoneDisplay`
- `business.phoneHref`
- `business.whatsappNumber`
- `business.email`
- `business.address`
- package destinations, prices, durations, images and inclusions
- testimonials and FAQs
- `https://example.web.app` in HTML meta tags, `robots.txt`, and `sitemap.xml`

## Run Locally

Because this is fully static, you can open `index.html` directly in a browser.

Optional local server:

```bash
npx serve .
```

## Deploy To Firebase Hosting

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Log in:

```bash
firebase login
```

3. Initialize or connect a Firebase project:

```bash
firebase init hosting
```

Use these answers:

- Public directory: `.`
- Configure as single-page app: `No`
- Set up automatic builds/deploys with GitHub: optional
- Do not overwrite `index.html`

4. Deploy:

```bash
firebase deploy
```

## Notes

- Inquiry buttons open WhatsApp with prefilled messages.
- Contact forms validate in the browser and then open WhatsApp. Firebase Functions or Firestore can be added later without changing the visible UI.
- Google Maps is currently a placeholder in `contact.html`.
- Images use remote Unsplash URLs to keep the repo lightweight. Replace them with your own images or local assets when available.
# shiv_shakti_travel
