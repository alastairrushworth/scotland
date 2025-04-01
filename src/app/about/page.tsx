import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Scotland - Land of History and Beauty",
  description: "Learn about our passion for sharing Scotland's rich history, breathtaking landscapes, and vibrant culture.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About This Site</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to our Scotland website! We're passionate about sharing the beauty, history, and culture of Scotland with the world. This site was created to showcase the remarkable landscapes, rich heritage, and warm hospitality that make Scotland such a special place.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide informative, engaging, and visually appealing content about Scotland that inspires visitors to explore this magnificent country. Whether you're planning a trip, researching Scottish history, or simply curious about Scottish culture, we aim to be your go-to resource.
        </p>
        
        <h2>What We Cover</h2>
        <p>
          Our blog features a wide range of topics related to Scotland, including:
        </p>
        
        <ul>
          <li>Travel guides and destination spotlights</li>
          <li>Scottish history and heritage</li>
          <li>Cultural traditions and festivals</li>
          <li>Food and drink specialties (especially whisky!)</li>
          <li>Nature and outdoor adventures</li>
          <li>Local arts and crafts</li>
          <li>Practical travel tips for visitors</li>
        </ul>
        
        <h2>Our Team</h2>
        <p>
          We are a small team of Scotland enthusiasts with backgrounds in travel, history, and digital content creation. Our contributors include:
        </p>
        
        <ul>
          <li>Local Scottish residents who share insider knowledge</li>
          <li>Historians with expertise in Scottish heritage</li>
          <li>Travel writers who have extensively explored the country</li>
          <li>Photographers capturing Scotland's breathtaking scenery</li>
        </ul>
        
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Whether you have questions, suggestions for topics, or want to share your own Scottish experiences, please don't hesitate to reach out. You can contact us through:
        </p>
        
        <ul>
          <li>Email: info@scotlandwebsite.com</li>
          <li>Our social media channels</li>
          <li>The comment sections on our blog posts</li>
        </ul>
        
        <h2>Subscribe</h2>
        <p>
          To stay updated with our latest articles and Scotland news, consider subscribing to our newsletter. We promise to respect your privacy and not to flood your inbox!
        </p>
        
        <div className="bg-blue-50 p-6 rounded-xl mt-8">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Substack</h3>
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
        
        <h2>Thank You</h2>
        <p>
          Thank you for visiting our website. We hope our content inspires you to discover the magic of Scotland for yourself. As the Scots would say, "Haste ye back!" (Come back soon!)
        </p>
      </div>
      
      <div className="mt-12">
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Check Out Our Blog
        </Link>
      </div>
    </div>
  );
}