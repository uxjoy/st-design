# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development
npm run dev          # Start development server on port 3000
npm run build        # Build for production
npm run start        # Run production build

# Icon Processing
npm run icon         # Process icons: lowercase filenames, normalize naming, remove duplicates

# Linting
npm run lint         # Run ESLint
```

## Project Overview

This is a ShareTrip assets management application built with Next.js 15 (App Router) that provides:
- **Icons Library**: Browse and copy/download SVG icons organized by category
- **Emails Library**: Access email templates organized by section (Figma links)

## Architecture

### Authentication Flow
Authentication is handled via middleware and HTTP-only cookies:

1. **Middleware** (`middleware.js`): Runs on every request, checks `isLoggedIn` cookie, protects routes
2. **Sign-in API** (`app/api/auth/signin/route.js`): Validates credentials against env vars, sets cookie
3. **Public paths**: `/signin`, `/_next`, `/favicon.ico` are accessible without auth

**Important**: Authentication uses cookies, NOT localStorage. The signin page previously had `localStorage.setItem` which caused SSR issues - it has been removed.

### Server vs Client Components

**Server Components** (default, no "use client"):
- `app/page.jsx` - Main entry point, fetches icon categories via `getIconsByCategory()`
- `app/emails/page.jsx` - Emails entry point, passes data to client component
- `app/components/IconLayout.jsx` - Server component that fetches and passes icon data

**Client Components** (explicit "use client"):
- `app/components/IconsTabView.jsx` - Interactive tab filtering, search
- `app/components/IconCard.jsx` - Icon cards with click handlers
- `app/components/IconModal.jsx` - Modal for icon preview, copy PNG/SVG, download
- `app/components/EmailsTabView.jsx` - Interactive email filtering
- `app/signin/page.jsx` - Sign-in form

### Data Loading Patterns

- **Icons**: Server-side file system reading via `utils/common.js::getIconsByCategory()` during build/request
- **Emails**: Imported directly from `data/flightEmail.js` (static data)
- No external API calls for data - all data is local

### Styling

- **Tailwind CSS v4**: Imported via `@import "tailwindcss";` in `app/globals.css`
- No `tailwind.config.js` - using Tailwind v4's new CSS-based configuration
- Custom scrollbar utility class `.no-scrollbar`

### Icon Processing Scripts

Located in `scripts/`:
- `lowercase-icons.js`: Recursively renames all icon files/folders to lowercase
- `normalize-icons.js`: Normalizes icon filenames (removes special chars, standardizes separators)

Both scripts operate on `public/icons/` directory.

## Environment Variables

Required in `.env`:
```
NODE_ENV=development          # or 'production'
PRIVATE_API_USERNAME=xxx      # Auth username
PRIVATE_API_PASSWORD=xxx      # Auth password
```

## Known Issues

### localStorage SSR Error
If you encounter `localStorage.getItem is not a function` or `localStorage is not defined`:
1. Ensure no `localStorage` access occurs during SSR
2. Check that client components using localStorage have proper `typeof window !== "undefined"` guards
3. Remember: Authentication uses cookies, not localStorage

### NODE_ENV Configuration
The `.env` file must have `NODE_ENV=development` (not `localstorage` or other values) to avoid Node.js startup warnings.

## File Structure Notes

- `app/` - Next.js App Router pages and API routes
- `app/components/` - React components (mix of server and client)
- `app/api/` - API routes (auth, download-icons)
- `data/` - Static data files (e.g., flightEmail.js)
- `public/icons/` - Icon assets organized by category
- `scripts/` - Utility scripts for icon processing
- `utils/` - Server-side utilities (file system operations)
