import Link from "next/link";

// Featured pinned content for homepage
const featuredContent = [
  {
    id: 1,
    title: "Edinburgh Castle: A Historic Fortress",
    description: "Perched atop Castle Rock, Edinburgh Castle dominates the city's skyline and has witnessed centuries of Scottish history.",
    imageUrl: "/images/edinburgh-castle.jpg",
    slug: "/blog/edinburgh-castle"
  },
  {
    id: 2,
    title: "The Scottish Highlands",
    description: "Discover the rugged beauty and ancient legends of the Scottish Highlands, home to stunning mountains, lochs, and glens.",
    imageUrl: "/images/highlands.jpg",
    slug: "/blog/scottish-highlands"
  },
  {
    id: 3,
    title: "Isle of Skye",
    description: "Explore the magical Isle of Skye, known for its breathtaking landscapes, fairy pools, and dramatic Cuillin mountain range.",
    imageUrl: "/images/isle-of-skye.jpg",
    slug: "/blog/isle-of-skye"
  }
];

// Recent blog posts for homepage
const recentPosts = [
  {
    id: 1,
    title: "Traditional Scottish Foods You Must Try",
    date: "March 25, 2024",
    excerpt: "From haggis to cranachan, discover the most iconic traditional Scottish dishes...",
    slug: "/blog/traditional-scottish-foods"
  },
  {
    id: 2,
    title: "Exploring the North Coast 500",
    date: "March 15, 2024",
    excerpt: "Often described as Scotland's Route 66, the North Coast 500 offers some of the most stunning coastal scenery...",
    slug: "/blog/north-coast-500"
  },
  {
    id: 3,
    title: "A Guide to Scottish Whisky Regions",
    date: "March 5, 2024",
    excerpt: "Scotland is divided into five whisky-producing regions, each with its own distinct characteristics...",
    slug: "/blog/whisky-regions"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center mb-12">
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
      
      {/* Featured Content Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="card rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  {/* Note: You'll need to add actual images */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link 
                    href={item.slug} 
                    className="text-blue-600 font-medium hover:underline"
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
      <section className="mb-16 bg-gray-50 dark:bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="card rounded-xl shadow-md p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="text-xl font-bold my-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={post.slug} 
                  className="text-blue-600 font-medium hover:underline"
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
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Substack</h2>
            <p className="mb-6">Stay updated with the latest articles, travel tips, and Scotland news directly in your inbox.</p>
            <iframe
              src="https://scotland-site.substack.com/embed"
              width="100%"
              height="320"
              className="rounded-xl border-0"
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
