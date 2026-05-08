# E-Commerce Landing

An e-commerce landing page built with React 19 and Vite. Features product browsing by category, a favourites list, a cart with quantity management, and a newsletter section.

![Halo UI](https://github.com/makersmecca/Ecommerce-Landing/blob/master/eCom%20Landing.png)

## Tech Stack

- React 19 + React Router v7
- Vite 8
- SCSS (sass-embedded)
- UUID

## Project Structure

```
src/
├── assets/          # Static data (Products.js, CustomerReviews.js)
├── components/      # Reusable UI (Navbar, Cart, ProductCard, ReviewCard, etc.)
├── context/         # CartContext (useReducer-based cart state)
└── views/           # Page sections (Homepage, ProductListing, Categories, Footer, etc.)
```

## Pages & Routes

| Route | Component |
|---|---|
| `/` | Homepage |
| `/favourites` | Favourites |

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Cart State

Cart is managed globally via `CartContext` using `useReducer`. Supports `ADD`, `REMOVE` (decrement), and `DROP` (delete) actions. Total price is computed and exposed via context.
