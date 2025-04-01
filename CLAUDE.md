# Claude's Notes for Scotland Website

## Common Commands

- Start development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Run linter: `npm run lint`
- Run TypeScript type checking: `npm run typecheck`
- Create a new blog post: `npm run new-post`

## Codebase Structure

This is a Next.js project using the App Router. Important directories:

- `/src/app`: Main application code
  - `/src/app/page.tsx`: Homepage
  - `/src/app/blog`: Blog section
  - `/src/app/about`: About page
  - `/src/app/rss`: RSS feed
- Public assets: `/public/`

## Adding New Blog Posts

### Automated Method (Recommended)

Run the helper script that will automate the entire process:

```bash
npm run new-post
```

This script will:
1. Prompt you for post details (title, category, excerpt)
2. Create a new post directory with the correct slug
3. Generate a page.tsx file based on the template
4. Update the central blog posts data
5. Update the RSS feed automatically
6. Handle marking posts as featured or recent

### Manual Method

If you prefer to add posts manually:

1. Add the post data to `/src/data/blog-posts.ts`
2. Create a new directory in `/src/app/blog/[post-slug]/`
3. Copy the template from `/src/app/blog/post-template/page.tsx` to your new directory
4. Update the page.tsx file with your content

The centralized data approach ensures the post will automatically appear on:
- The blog listing page
- The homepage (if marked as featured or recent)
- The RSS feed

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