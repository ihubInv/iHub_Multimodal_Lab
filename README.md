# OnePageMML - Single Page Multimodal Lab Website

This is a single-page application version of the Multimodal Lab website, built with Next.js 14 and TypeScript.

## Features

- **Single Page Application**: All content is on one page with smooth scrolling navigation
- **Sections Included**:
  - Hero Section
  - About Lab
  - Research Areas
  - Multimodal Data (with visualizations)
  - Team
  - Contact Form

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Copy Assets**:
   - Copy the `public/imgcopy` folder from `NewMMLab` to `OnePageMML/public/`
   - This includes all images, videos, and logos needed for the website

3. **Environment Variables** (Optional - for team API):
   Create a `.env.local` file if you need database connectivity:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=multimodal_lab
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Navigation

The navigation uses smooth scrolling to different sections:
- Home → `#home`
- About Lab → `#about`
- Research Areas → `#research`
- Team → `#team`
- Contact → `#contact`

## Important Notes

- Make sure to copy all assets from `NewMMLab/public/imgcopy` to `OnePageMML/public/imgcopy`
- The team section requires the API route to be working (needs database setup)
- All sections are combined into a single page for seamless user experience

## Project Structure

```
OnePageMML/
├── app/
│   ├── page.tsx          # Main single page component
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── api/
│       └── team/
│           └── route.ts  # Team API endpoint
├── components/
│   ├── layout/           # Header, Footer, Navbar, Loader
│   ├── ui/               # TypingAnimation
│   ├── research/         # ResearchCard
│   ├── team/             # TeamCard
│   └── multimodal/       # All multimodal data components
└── public/
    └── imgcopy/          # All static assets (images, videos, logos)
```


