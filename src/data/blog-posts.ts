import { siteConfig } from '../config/site';

// Define the BlogPost type for type safety
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  isFeatured?: boolean;
  isRecent?: boolean;
  content?: string; // For future use if needed
}

// Single source of truth for all blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Edinburgh Castle: A Historic Fortress",
    date: "April 1, 2024",
    excerpt: "Perched atop Castle Rock, Edinburgh Castle dominates the city's skyline and has witnessed centuries of Scottish history.",
    slug: "/blog/edinburgh-castle",
    category: "History",
    imageUrl: "/images/edinburgh-castle.jpg",
    isFeatured: true,
    isRecent: false
  },
  {
    id: 2,
    title: "The Scottish Highlands",
    date: "March 28, 2024",
    excerpt: "Discover the rugged beauty and ancient legends of the Scottish Highlands, home to stunning mountains, lochs, and glens.",
    slug: "/blog/scottish-highlands",
    category: "Travel",
    imageUrl: "/images/highlands.jpg",
    isFeatured: true,
    isRecent: false
  },
  {
    id: 3,
    title: "Isle of Skye",
    date: "March 20, 2024",
    excerpt: "Explore the magical Isle of Skye, known for its breathtaking landscapes, fairy pools, and dramatic Cuillin mountain range.",
    slug: "/blog/isle-of-skye",
    category: "Travel",
    imageUrl: "/images/isle-of-skye.jpg",
    isFeatured: true,
    isRecent: false
  },
  {
    id: 4,
    title: "Traditional Scottish Foods You Must Try",
    date: "March 25, 2024",
    excerpt: "From haggis to cranachan, discover the most iconic traditional Scottish dishes that you simply must try when visiting Scotland.",
    slug: "/blog/traditional-scottish-foods",
    category: "Culture",
    isRecent: true
  },
  {
    id: 5,
    title: "Exploring the North Coast 500",
    date: "March 15, 2024",
    excerpt: "Often described as Scotland's Route 66, the North Coast 500 offers some of the most stunning coastal scenery in the world.",
    slug: "/blog/north-coast-500",
    category: "Travel",
    isRecent: true
  },
  {
    id: 6,
    title: "A Guide to Scottish Whisky Regions",
    date: "March 5, 2024",
    excerpt: "Scotland is divided into five whisky-producing regions, each with its own distinct characteristics and flavors. Learn about them all.",
    slug: "/blog/whisky-regions",
    category: "Culture",
    isRecent: true
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

// Helper functions to filter posts
export const getFeaturedPosts = () => blogPosts.filter(post => post.isFeatured);
export const getRecentPosts = () => blogPosts.filter(post => post.isRecent);
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getAllCategories = () => [...new Set(blogPosts.map(post => post.category))];

// Generate RSS items from blog posts
export const generateRssItems = () => {
  return blogPosts.slice(0, 10).map(post => {
    // Convert date string to ISO format for RSS
    const dateParts = post.date.split(', ')[0].split(' ');
    const month = new Date(Date.parse(dateParts[0] + " 1, 2000")).getMonth();
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    const pubDate = new Date(year, month, day);
    
    return `
    <item>
      <title>${post.title}</title>
      <link>${siteConfig.url}${post.slug}</link>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <guid>${siteConfig.url}${post.slug}</guid>
      <description>${post.excerpt}</description>
      <category>${post.category}</category>
    </item>`;
  }).join('');
};

// Get related posts for a given post
export const getRelatedPosts = (currentPostId: number, count = 3) => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  // First get posts in the same category
  const sameCategory = blogPosts.filter(post => 
    post.id !== currentPostId && post.category === currentPost.category
  );
  
  // If we don't have enough, get other posts
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  } else {
    const otherPosts = blogPosts.filter(post => 
      post.id !== currentPostId && post.category !== currentPost.category
    );
    
    return [...sameCategory, ...otherPosts].slice(0, count);
  }
};
