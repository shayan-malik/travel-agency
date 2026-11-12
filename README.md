# Wanderlux Travel | Travel Agency Website

A modern, premium-looking and fully responsive travel agency website built as a frontend technical assessment. It offers four services: **Visa Services, Flight Booking, Hotel Booking and Car Rental**.

**Live Demo:** https://travel-agency-bice-nu.vercel.app
**Repository:** https://github.com/shayan-malik/travel-agency

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [GSAP](https://gsap.com/) with ScrollTrigger and `@gsap/react`
- JavaScript (ES6+)

## Features

- **Fully responsive** layout for mobile, tablet and desktop
- **Tabbed search forms** for Flights, Hotels, Visa and Car Rental with validation (date limits, same-city check)
- **Mock search results** generated from local data (no backend or real API)
- **Service cards** and **popular destinations** with image cards
- **Testimonials**, **contact form** with success message, and a full **footer**
- **GSAP animations**
  - Hero entrance timeline (masked headline reveal, staggered elements)
  - Scroll-triggered reveals for sections and cards
  - Animated number counters
  - Hover effects on service, destination and testimonial cards
  - Staggered animation for search results
- Sticky navbar with blur effect and animated mobile menu

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/travel-agency.git

# 2. Go to the project folder
cd travel-agency

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                 # App Router (layout, page, global styles)
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, Services, Destinations, Stats, Testimonials, Contact
    search/            # SearchTabs + Flight, Hotel, Visa, Car forms
    ui/                # Button, Field, SectionHeading, ResultCard
  data/                # Mock data (services, destinations, testimonials, search results)
  hooks/               # useReveal (GSAP scroll reveal hook)
public/
  destinations/        # Destination images
```

## Design and Code Decisions

- **Reusable components:** `Button`, `Field`, `SectionHeading` and `ResultCard` are used across multiple sections.
- **Data separated from UI:** all content lives in `src/data`, so text can be changed without touching components.
- **Mock API layer:** `mockResults.js` exposes functions like `searchFlights()` that return deterministic results for the same input.
- **Safe GSAP usage in React:** animations use `useGSAP` and `contextSafe`, so they are cleaned up automatically on unmount.
- **Performance:** fonts are self-hosted via `next/font`, and images use `next/image` with proper `sizes`.
- **Theme tokens:** colors and fonts are defined once in `globals.css` using Tailwind's `@theme`.

## Notes

- No backend or real APIs are used. Search results and form submissions are simulated on the client.
- Destination images are from [Unsplash](https://unsplash.com).

## Author

**Your Name**
GitHub: [Shayan Malik](https://github.com/shayan-malik)