# Olajan Global Services LTD — React + Tailwind SPA

A dynamic, responsive single-page application built with **React (Vite)**, **Tailwind CSS**, **SwiperJS**, **React Hook Form**, and **Lucide React**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open the local server printed in your terminal.

## 🧩 Structure

```
src/
  components/   # Header, Footer, Hero, carousels, modal, etc.
  pages/        # Home, About, Services, Projects, Blog, Contact, FAQ
  data/         # services.js, projects.js, team.js, testimonials.js, faqs.js
  assets/       # logos + image placeholders (replace with real images)
```

## 🛠️ Customize Content

- **Services, Projects, Team, Testimonials, FAQs:** edit files in `src/data/`.
- **Images/Logos:** replace SVGs in `src/assets/images/` and `src/assets/logos/` with real assets. Keep file names to avoid code changes.
- **Brand Colors:** adjust `tailwind.config.js` (under `theme.extend.colors`).

## 📰 Blog API (Placeholder)

## ✉️ Connect the Contact Form

The form currently calls `console.log` and shows an alert on submit. To make it live:

### Option A: Formspree (no backend)

`https://formspree.io/f/xxxxxx`).


```js
const onSubmit = async (data) => {
  const res = await fetch('https://formspree.io/f/xxxxxx', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (res.ok) alert('Thanks! We\'ll be in touch soon.')
  else alert('Sorry, something went wrong. Please try again.')
}
```

### Option B: Custom API (Node/Express)

Create a POST endpoint like `/api/contact` that accepts JSON `{ name, email, phone, subject, message }` and sends an email via a service (e.g., Nodemailer, SendGrid). Update the same `fetch` call to hit your server.

## 🧱 Build for Production

```bash
npm run build
```

The optimized output is generated in `dist/`. Host it on Netlify, Vercel, or any static host.

## 🖼️ Image Guidance

All images are **SVG placeholders** with descriptive labels. Replace with real photos:
- `src/assets/images/hero-tech-solar.svg`: Fullscreen hero (technician on solar panel).
- `src/assets/images/project-*.svg`: Project gallery images.
- `src/assets/logos/*.svg`: Company + partner logos.

## 🧭 Navigation

- Sticky header with mobile menu.
- Pages: Home, About, Services, Projects, Blog, Contact, FAQ.
- "Get a Quote" CTA links to Contact.

## 🧪 Libraries Used

- **SwiperJS** for carousels (projects, partners, testimonials).
- **React Hook Form** for form handling and validation.
- **Lucide React** for icons.
- **Framer Motion / AOS** ready — Tailwind transitions included (you can add more animations as needed).

## 📄 License

© 2025 Olajan Global Services LTD. All rights reserved. Powered by Josebot Company.
