export const siteConfig = {
  title: "Scotland - Land of History and Beauty",
  description: "Discover Scotland's rich history, breathtaking landscapes, and vibrant culture",
  url: "https://rushworth.substack.com/",

  // Social media
  twitter: "@scotlandsite",
  instagram: "@scotland_site",
  facebook: "scotlandsite",

  // Contact info
  email: "info@scotlandwebsite.com",

  // Substack
  substackUrl: "https://rushworth.substack.com/embed",

  // Analytics
  googleAnalyticsId: "G-XXXXXXXXXX",

  // Navigation
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" }
  ]
};

export type SiteConfig = typeof siteConfig;