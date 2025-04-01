# Claude's Notes for Scotland Website

## Common Commands

- Start development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Run linter: `npm run lint`
- Run TypeScript type checking: `npm run typecheck`

## Codebase Structure

This is a Next.js project using the App Router. Important directories:

- `/src/app`: Main application code
  - `/src/app/page.tsx`: Homepage
  - `/src/app/blog`: Blog section
  - `/src/app/about`: About page
  - `/src/app/rss`: RSS feed
- Public assets: `/public/`

## Adding New Blog Posts

To add a new blog post:

1. Create a new directory in `/src/app/blog/[post-slug]/`
2. Create a `page.tsx` file in that directory
3. Update the blog list in `/src/app/blog/page.tsx`
4. Add the post to the featured or recent posts in the homepage if needed
5. Update the RSS feed in `/src/app/rss/route.ts`

## Code Style Preferences

- TypeScript: Use strict typing
- React: Use functional components with TypeScript props interfaces
- CSS: Use Tailwind utility classes
- Formatting: Follow ESLint rules configured in the project

## SEO Practices

- Each page should have proper metadata (title, description, etc.)
- Images should have alt text
- Update the sitemap when adding new pages
- Remember to update robots.txt if needed

## Feature Roadmap

Future improvements to consider:

- Add a search functionality to the blog
- Implement a CMS for content management
- Add more image optimization
- Implement dark mode
- Add internationalization for multiple languages