# Bharat Dry Fruits — Digital Catalog & Showcase

A premium, inquiry-only product showcase for dry fruits, nuts, seeds and gift
hampers. **There is no cart, checkout, or payment gateway anywhere in this
codebase** — every call-to-action opens a pre-filled WhatsApp chat or a phone
dialer.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom Emerald / Maroon / Saffron Gold theme
- **shadcn/ui**-style primitives (Button, Card, Badge, Dialog, Tabs, Accordion, Select, Input, Textarea, Label, Navigation Menu)
- **@react-three/fiber** + **@react-three/drei** for the animated 3D hero (floating almonds, cashews, pistachios, dates)
- **Framer Motion** for scroll and entrance animations
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

> **Note:** `next/font` fetches Playfair Display & Inter from Google Fonts at
> build time, so an internet connection is required during `npm run build` /
> `npm run dev`. In fully offline environments, swap the `next/font/google`
> imports in `app/layout.tsx` for local font files or `next/font/local`.

## Project Structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Assembles all landing page sections
  globals.css          Theme tokens, base styles, gold-shimmer utility
components/
  header.tsx            Sticky header + announcement bar + mobile nav
  hero-3d.tsx            R3F canvas: floating almonds/cashews/pistachios/dates
  hero-section.tsx       Hero copy + CTAs layered over the 3D canvas
  category-grid.tsx       6-category interactive showcase grid
  product-catalog.tsx    Tabbed catalog wired to /data/products.ts
  product-card.tsx        Individual product card + specs dialog
  inquiry-modal.tsx        Bulk/Corporate inquiry form → WhatsApp
  wholesale-section.tsx    Gifting/Wholesale/Corporate CTA section
  quality-section.tsx     Farm-to-table guarantee badges
  contact-section.tsx     Click-to-call/WhatsApp, address, FAQ accordion
  footer.tsx               Brand story + links + contact
  ui/                      shadcn-style primitives
data/
  products.ts              All product & category data (edit here to add products)
lib/
  utils.ts                 cn() class merge helper
  whatsapp.ts               wa.me / tel: link builders — single source of truth
                            for the business WhatsApp number and phone number
```

## Customizing Business Details

Open `lib/whatsapp.ts` and update:

```ts
export const BUSINESS_WHATSAPP_NUMBER = "919876543210"; // country code + number, no + or spaces
export const BUSINESS_PHONE_NUMBER = "+91 98765 43210";   // display format
export const BUSINESS_PHONE_LINK = "+919876543210";        // tel: link format
```

All WhatsApp CTAs across the header, hero, product cards, inquiry modal,
wholesale section, contact section and footer read from this single file.

## Adding / Editing Products

All catalog content lives in `data/products.ts` as a typed array — add a new
object to `products` (and optionally a new entry to `categories`) and it will
automatically appear in the tabbed catalog with its own WhatsApp inquiry link,
specs dialog and pack-size selector.

## Catalog PDF Download

The header/footer "Download Product Catalog PDF" button links to
`/public/bharat-dry-fruits-catalog.pdf`. Add your actual PDF catalog at that
path (`public/bharat-dry-fruits-catalog.pdf`) so the download works.

## Design Tokens

| Role | Hex |
|---|---|
| Primary — Deep Emerald Green | `#0F382C` |
| Secondary — Royal Maroon | `#5C061C` |
| Accent — Saffron Gold | `#D4AF37` |
| Accent — Honey Gold | `#F39C12` |
| Background — Warm Ivory | `#FAF6F0` |
| Text — Dark Charcoal | `#1A1A1A` |
| Text — Muted Gray | `#666666` |

Headings use **Playfair Display** (serif); body copy uses **Inter** (sans-serif).

## No E-Commerce, By Design

This project intentionally excludes:
- Shopping cart / line-item state
- Checkout flows or forms that collect payment details
- Any payment gateway SDK or integration

Every purchase-intent action (product inquiry, bulk quote, specs request)
resolves to a `wa.me` deep link or a `tel:` link, built by the helpers in
`lib/whatsapp.ts`.
