import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: "Blog | Scotland - Land of History and Beauty",
  description: "Read our latest articles about Scotland's history, culture, landscapes, and travel tips.",
};

// Blog posts data - in a real app, you would fetch this from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Edinburgh Castle: A Historic Fortress",
    date: "April 1, 2024",
    excerpt: "Perched atop Castle Rock, Edinburgh Castle dominates the city's skyline and has witnessed centuries of Scottish history.",
    slug: "/blog/edinburgh-castle",
    category: "History"
  },
  {
    id: 2,
    title: "The Scottish Highlands",
    date: "March 28, 2024",
    excerpt: "Discover the rugged beauty and ancient legends of the Scottish Highlands, home to stunning mountains, lochs, and glens.",
    slug: "/blog/scottish-highlands",
    category: "Travel"
  },
  {
    id: 3,
    title: "Isle of Skye",
    date: "March 20, 2024",
    excerpt: "Explore the magical Isle of Skye, known for its breathtaking landscapes, fairy pools, and dramatic Cuillin mountain range.",
    slug: "/blog/isle-of-skye",
    category: "Travel"
  },
  {
    id: 4,
    title: "Traditional Scottish Foods You Must Try",
    date: "March 25, 2024",
    excerpt: "From haggis to cranachan, discover the most iconic traditional Scottish dishes that you simply must try when visiting Scotland.",
    slug: "/blog/traditional-scottish-foods",
    category: "Culture"
  },
  {
    id: 5,
    title: "Exploring the North Coast 500",
    date: "March 15, 2024",
    excerpt: "Often described as Scotland's Route 66, the North Coast 500 offers some of the most stunning coastal scenery in the world.",
    slug: "/blog/north-coast-500",
    category: "Travel"
  },
  {
    id: 6,
    title: "A Guide to Scottish Whisky Regions",
    date: "March 5, 2024",
    excerpt: "Scotland is divided into five whisky-producing regions, each with its own distinct characteristics and flavors. Learn about them all.",
    slug: "/blog/whisky-regions",
    category: "Culture"
  },
  {
    id: 7,
    title: "Celtic Connections: Scotland's Winter Music Festival",
    date: "February 28, 2024",
    excerpt: "Discover Celtic Connections, Glasgow's annual folk, roots and world music festival celebrating Celtic music and its connections to cultures across the globe.",
    slug: "/blog/celtic-connections",
    category: "Music"
  },
  {
    id: 8,
    title: "Edinburgh Festival Fringe: The World's Largest Arts Festival",
    date: "February 20, 2024",
    excerpt: "A guide to navigating the Edinburgh Festival Fringe, featuring thousands of performances across hundreds of venues throughout the city.",
    slug: "/blog/edinburgh-fringe",
    category: "Festivals"
  },
  {
    id: 9,
    title: "Scottish Bagpipes: A Cultural Icon",
    date: "February 15, 2024",
    excerpt: "Explore the history, construction, and cultural significance of Scottish bagpipes, from their battlefield origins to modern competitions.",
    slug: "/blog/scottish-bagpipes",
    category: "Music"
  },
  {
    id: 10,
    title: "The Royal Edinburgh Military Tattoo",
    date: "February 10, 2024",
    excerpt: "Experience the spectacle of the Royal Edinburgh Military Tattoo, an annual series of military tattoos performed by British Armed Forces and international military bands.",
    slug: "/blog/edinburgh-military-tattoo",
    category: "Festivals"
  },
  {
    id: 11,
    title: "Contemporary Scottish Artists You Should Know",
    date: "February 5, 2024",
    excerpt: "Discover the vibrant contemporary art scene in Scotland and the artists who are making waves both locally and internationally.",
    slug: "/blog/contemporary-scottish-artists",
    category: "Art"
  },
  {
    id: 12,
    title: "The Glasgow School of Art: Charles Rennie Mackintosh's Masterpiece",
    date: "January 28, 2024",
    excerpt: "Explore the architectural brilliance and artistic heritage of the Glasgow School of Art, designed by Scotland's most celebrated architect and designer.",
    slug: "/blog/glasgow-school-art",
    category: "Art"
  }
];

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
      <div className="newsletter-bg rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Substack</h2>
        <p className="mb-6">Get the latest articles and Scotland travel tips delivered to your inbox.</p>
        <iframe
          src={siteConfig.substackUrl}
          width="100%"
          height="320"
          className="rounded-xl border-0"
          frameBorder="0"
          scrolling="no"
          title="Subscribe to our Substack newsletter"
        ></iframe>
      </div>
    </div>
  );
}