# Lab 8: Next.js Routing Demo

This project demonstrates the App Router capabilities of Next.js, showcasing dynamic routes, static page generation, and client/server component architecture. It's a simple web application featuring dynamic post pages and a comments section with proper navigation between pages.

**[View Live Demo](https://hjoseph777.github.io/lab8-routing/)**


## Project Structure and Overview

```
lab8-routing/
├── app/                      # Next.js App Router directory
│   ├── globals.css           # Global styles with Tailwind CSS
│   ├── layout.tsx            # Root layout with font configuration
│   ├── page.tsx              # Home page with navigation links
│   └── posts/                # Posts section
│       ├── [id]/             # Dynamic route for post pages
│       │   ├── page.tsx      # Page component for dynamic posts
│       │   └── PostClient.tsx # Client component for post display
│       └── comments/         # Comments section
│           ├── page.tsx      # Comments page
│           └── CommentsClient.tsx # Client component for comments
├── public/                   # Static assets
│   └── next.svg              # Next.js logo
├── next.config.js            # Next.js configuration for GitHub Pages
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Key Files

### Configuration Files

- **[next.config.js](https://github.com/hjoseph777/lab8-routing/blob/main/next.config.js)** - Configures Next.js for GitHub Pages deployment with proper asset prefixes and static export settings
- **[postcss.config.mjs](https://github.com/hjoseph777/lab8-routing/blob/main/postcss.config.mjs)** - Sets up PostCSS with Tailwind CSS and autoprefixer
- **[tailwind.config.js](https://github.com/hjoseph777/lab8-routing/blob/main/tailwind.config.js)** - Configures Tailwind CSS theme and content sources

### Core Components

- **[app/layout.tsx](https://github.com/hjoseph777/lab8-routing/blob/main/app/layout.tsx)** - Root layout that sets up fonts and global structure
- **[app/page.tsx](https://github.com/hjoseph777/lab8-routing/blob/main/app/page.tsx)** - Main page with navigation menu to different routes
- **[app/posts/[id]/page.tsx](https://github.com/hjoseph777/lab8-routing/blob/main/app/posts/[id]/page.tsx)** - Dynamic post page that uses route parameters
- **[app/posts/[id]/PostClient.tsx](https://github.com/hjoseph777/lab8-routing/blob/main/app/posts/[id]/PostClient.tsx)** - Client component that renders individual post content
- **[app/posts/comments/CommentsClient.tsx](https://github.com/hjoseph777/lab8-routing/blob/main/app/posts/comments/CommentsClient.tsx)** - Client component for the comments section

