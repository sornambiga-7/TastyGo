# TastyGo — Swiggy-Inspired Food Delivery Frontend

A complete, production-structured React frontend for a food delivery web app, inspired by Swiggy. Built with Vite, React Router, and Context API. No backend — all data is local/mock, ready to be swapped for real API calls later.

## Tech Stack

- React 18 + Vite
- React Router DOM v6
- Context API (Cart + Auth)
- Plain CSS (no Tailwind/Bootstrap) with a shared design-token system in `src/index.css`
- LocalStorage for auth sessions and cart persistence

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  components/     Reusable UI pieces (Navbar, Footer, cards, etc.)
  pages/          Route-level pages (Home, Restaurants, Cart, etc.)
  context/        CartContext and AuthContext
  data/           Mock restaurants.js (24 restaurants) and foods.js (146 items)
  utils/          Shared helpers (price formatting, etc.)
  App.jsx         Route definitions
  main.jsx        App entry point, wraps providers
```

## Notes for Connecting a Real Backend Later

- Replace the imports from `src/data/restaurants.js` and `src/data/foods.js` with API calls (e.g. `fetch` or `axios`) inside the pages that use them (`Home`, `Restaurants`, `RestaurantDetails`, `Search`).
- `AuthContext.jsx` currently stores users in `localStorage` — swap `login`/`signup` for real API requests and store a token instead of the raw session object.
- `CartContext.jsx` can be extended to sync with a `/cart` API endpoint if you want server-persisted carts.

## Features Implemented

- Sticky, responsive navbar with live cart count and login/profile state
- Home page: hero, categories, popular/recommended/top-rated restaurant rows, offers
- Restaurants page: search, category/rating/delivery-time filters, 5 sort modes
- Restaurant details page: banner, stats, veg-only toggle, categorized menu
- Instant search across restaurants and dishes
- Cart with quantity controls, accurate bill breakdown (item total, delivery fee, platform fee, taxes, grand total — never NaN), single-restaurant-per-cart guard
- Login / Signup with validation, localStorage-based auth
- Profile page (protected route)
- 404 page for unmatched routes
