# VW Transporter Spares Website

This repository contains a professional demo website for a VW Transporter spare-parts business. The site includes:

- Public storefront with product catalogue and filtering
- Vehicle fitment filters for T4, T5, T6 and T6.1
- Basket and order placement flow
- Contact form that stores enquiries locally in the browser
- Admin dashboard with protected login
- Product management for adding, editing and deleting parts
- Website settings and legal page editing
- Persistent localStorage-based data so the website works without a backend
- GBP-only pricing and contact defaults for the supplied business information

## Run it locally

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. To access the admin dashboard, open `admin.html` and log in with:
   - Email: `admin@vwspares.com`
   - Password: `admin123`

## Default business details used

- Facebook: https://www.facebook.com/share/1F7JLyW7Tc/
- Telephone: +447447482927
- WhatsApp: +447447482927
- WhatsApp link: https://wa.me/447447482927
- Currency: GBP (£) only
- Supported vehicles: VW Transporter T4, T5, T6, and T6.1

## Notes

This is a browser-based demo that stores data in browser localStorage for persistence on a single device. It is designed to provide a realistic working prototype without requiring a separate database or external service. For a production-ready business deployment, the next step would be to move this to a secure backend with a real database, password hashing, server-side validation, and production hosting.

## Files

- `index.html` — public storefront
- `admin.html` — secure admin dashboard
- `legal.html` — legal information pages
- `styles.css` — full styling
- `app.js` — storefront and legal page logic
- `admin.js` — admin login credential stub
