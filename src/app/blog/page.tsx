import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "../../config/site";
import { blogPosts, getAllCategories } from "../../data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Scotland - Land of History and Beauty",
  description: "Read our latest articles about Scotland's history, culture, landscapes, and travel tips.",
};

export default function BlogPage() {
  // Group posts by category
  const categories = blogPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Scotland Blog</h1>
        <p className="text-xl">
          Discover stories, travel tips, and insights about Scotland's rich history, stunning landscapes, and vibrant culture.
        </p>
      </div>

      {/* Category filters */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {Object.keys(categories).map((category) => (
            <Link 
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 category-tag rounded-xl transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog posts by category */}
      {Object.entries(categories).map(([category, posts]) => (
        <div key={category} id={category.toLowerCase()} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 custom-border">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm date">{post.date}</span>
                <h3 className="text-xl font-bold my-2">
                  <Link href={post.slug} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4">{post.excerpt}</p>
                <Link 
                  href={post.slug} 
                  className="content-link font-medium hover:underline"
                >
                  Continue reading →
                </Link>
              </article>
            ))}
          </div>
        </div>
      ))}

      {/* Substack signup */}
      <div className="newsletter-bg rounded-xl p-6 mt-12 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-2 text-center">Subscribe to Our Newsletter</h2>
        <p className="mb-4 text-sm text-center">Get the latest Scotland travel tips and articles in your inbox</p>
        <iframe
          src={siteConfig.substackUrl}
          width="100%"
          height="150"
          className="rounded-lg border-0"
          frameBorder="0"
          scrolling="no"
          title="Subscribe to our Substack newsletter"
        ></iframe>
      </div>
    </div>
  );
}