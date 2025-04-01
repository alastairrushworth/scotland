import { Metadata } from 'next';
import Link from 'next/link';
import { getRelatedPosts } from '../../../data/blog-posts';

// This is a template for a blog post. Copy this file to create a new blog post.
// 1. Create a new folder under /src/app/blog/[your-post-slug]/
// 2. Copy this file into that folder and rename it to page.tsx
// 3. Update the metadata and content below
// 4. Add the post to src/data/blog-posts.ts

export const metadata: Metadata = {
  title: 'Your Post Title | Scotland',
  description: 'Your post description here',
  openGraph: {
    title: 'Your Post Title',
    description: 'Your post description here',
    images: ['/images/your-image.jpg'],
  },
};

// Replace XX with your post ID from blog-posts.ts
const POST_ID = XX;

export default function BlogPostPage() {
  return (
    <article className=\"max-w-4xl mx-auto\">
      {/* Blog header */}
      <div className=\"mb-8\">
        <h1 className=\"text-4xl font-bold mb-4\">Your Post Title</h1>
        <div className=\"flex items-center mb-6 text-muted-text\">
          <span>Month DD, YYYY</span>
          <span className=\"mx-2\">•</span>
          <span>By Admin</span>
          <span className=\"mx-2\">•</span>
          <Link 
            href=\"/blog#category\" 
            className=\"content-link hover:underline\"
          >
            Category
          </Link>
        </div>
        <div className=\"relative h-[400px] bg-gray-200 dark:bg-gray-700 mb-8\">
          {/* Replace with actual image */}
          <div className=\"absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-300\">
            [Your Image]
          </div>
        </div>
      </div>

      {/* Blog content */}
      <div className=\"prose prose-lg max-w-none prose-headings:text-prose-headings prose-p:text-prose-text dark:prose-a:text-link\">
        <p>
          Your intro paragraph here.
        </p>

        <h2>First Heading</h2>
        <p>
          Your content here.
        </p>

        <h2>Second Heading</h2>
        <p>
          More content here.
        </p>
        
        {/* Add more sections as needed */}
      </div>

      {/* Tags and share */}
      <div className=\"mt-12 pt-6 border-t\">
        <div className=\"flex flex-wrap gap-2 mb-6\">
          <span className=\"font-bold\">Tags:</span>
          <Link href=\"/blog#tag1\" className=\"px-3 py-1 category-tag rounded-xl\">Tag1</Link>
          <Link href=\"/blog#tag2\" className=\"px-3 py-1 category-tag rounded-xl\">Tag2</Link>
        </div>
        
        <div className=\"flex items-center\">
          <span className=\"font-bold mr-4\">Share:</span>
          <div className=\"flex gap-4\">
            <a href=\"#\" className=\"content-link hover:underline\">Twitter</a>
            <a href=\"#\" className=\"content-link hover:underline\">Facebook</a>
            <a href=\"#\" className=\"content-link hover:underline\">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <div className=\"mt-12\">
        <h3 className=\"text-2xl font-bold mb-6\">Related Posts</h3>
        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">
          {getRelatedPosts(POST_ID).map(post => (
            <div key={post.id} className=\"card rounded-xl shadow-md p-4\">
              <Link href={post.slug} className=\"text-lg font-semibold hover:text-link-hover\">
                {post.title}
              </Link>
              <p className=\"mt-2\">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comment section (non-functional in this demo) */}
      <div className=\"mt-12 pt-6 border-t\">
        <h3 className=\"text-2xl font-bold mb-6\">Leave a Comment</h3>
        <form className=\"space-y-4\">
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
            <div>
              <label htmlFor=\"name\" className=\"block mb-1 font-medium\">Name</label>
              <input 
                type=\"text\" 
                id=\"name\" 
                className=\"w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600\"
                required
              />
            </div>
            <div>
              <label htmlFor=\"email\" className=\"block mb-1 font-medium\">Email</label>
              <input 
                type=\"email\" 
                id=\"email\" 
                className=\"w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600\"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor=\"comment\" className=\"block mb-1 font-medium\">Comment</label>
            <textarea 
              id=\"comment\" 
              rows={6} 
              className=\"w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600\"
              required
            ></textarea>
          </div>
          <button 
            type=\"submit\" 
            className=\"px-6 py-3 primary-button rounded-xl transition-colors\"
          >
            Post Comment
          </button>
        </form>
      </div>
    </article>
  );
}