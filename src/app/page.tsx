import Link from "next/link";
import { siteConfig } from "../config/site";
import { getFeaturedPosts, getRecentPosts } from "../data/blog-posts";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <section className="relative h-[330px] flex items-center justify-center rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/scotland-hero.jpg')] bg-cover bg-center"></div>
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Discover Scotland</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Explore the land of breathtaking landscapes, rich history, and warm hospitality
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </div>
      
      {/* Featured Content Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getFeaturedPosts().map((post) => (
              <div key={post.id} className="card rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  {/* Note: You'll need to add actual images */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link 
                    href={post.slug} 
                    className="content-link font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="mb-16 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getRecentPosts().map((post) => (
              <div key={post.id} className="card rounded-xl shadow-md p-6">
                <span className="text-sm date">{post.date}</span>
                <h3 className="text-xl font-bold my-2">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <Link 
                  href={post.slug} 
                  className="content-link font-medium hover:underline"
                >
                  Continue reading →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              className="inline-block primary-button px-6 py-3 rounded-xl font-medium transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
      
      {/* Substack Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="newsletter-bg rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="mb-4 text-sm">Get the latest Scotland travel tips and articles in your inbox</p>
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
      </section>
    </div>
  );
}
