# Scotland Website

A modern static website about Scotland's rich history, breathtaking landscapes, and vibrant culture. Built with Next.js and TypeScript.

## Features

- 🏞️ Modern, responsive design with Tailwind CSS
- 📝 Blog with categorized posts
- 📌 Pinned content on homepage
- 📰 RSS feed
- 🤖 SEO optimized with robots.txt and sitemap.xml
- 📊 Google Analytics integration
- 📱 Mobile-friendly layout

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── app/         # App router pages
│   │   ├── about/   # About page
│   │   ├── blog/    # Blog index and posts
│   │   ├── rss/     # RSS feed
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── components/  # Reusable components
```

## Development

- **Add a blog post**: Create a new directory in `src/app/blog/[post-slug]` with a `page.tsx` file
- **Modify styles**: Edit Tailwind classes or update `globals.css`
- **Update content**: Modify the content in the respective page files

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run typecheck`: Run TypeScript type checking

## Deployment

This site can be deployed to any static hosting provider, such as:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## License

MIT
