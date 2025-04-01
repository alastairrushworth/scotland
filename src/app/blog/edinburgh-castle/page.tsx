import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edinburgh Castle: A Historic Fortress | Scotland",
  description: "Explore the history and significance of Edinburgh Castle, Scotland's most famous fortress perched atop Castle Rock.",
  openGraph: {
    title: "Edinburgh Castle: A Historic Fortress",
    description: "Explore the history and significance of Edinburgh Castle, Scotland's most famous fortress perched atop Castle Rock.",
    images: ['/images/edinburgh-castle.jpg'],
  },
};

export default function EdinburghCastlePage() {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Blog header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Edinburgh Castle: A Historic Fortress</h1>
        <div className="flex items-center mb-6 text-muted-text">
          <span>April 1, 2024</span>
          <span className="mx-2">•</span>
          <span>By Admin</span>
          <span className="mx-2">•</span>
          <Link 
            href="/blog#history" 
            className="content-link hover:underline"
          >
            History
          </Link>
        </div>
        <div className="relative h-[400px] bg-gray-200 dark:bg-gray-700 mb-8">
          {/* Replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-300">
            {/* Placeholder for Edinburgh Castle image */}
            [Edinburgh Castle Image]
          </div>
        </div>
      </div>

      {/* Blog content */}
      <div className="prose prose-lg max-w-none prose-headings:text-prose-headings prose-p:text-prose-text dark:prose-a:text-link">
        <p>
          Perched dramatically on a rocky outcrop in the heart of Scotland's capital, Edinburgh Castle stands as one of the nation's most iconic and historically significant landmarks. This ancient fortress has witnessed centuries of Scottish history unfold, from royal ceremonies and political intrigues to military conflicts and cultural celebrations.
        </p>

        <h2>A Strategic Location</h2>
        <p>
          The castle sits atop Castle Rock, an extinct volcanic plug that rises 130 meters (430 ft) above sea level. Archaeological evidence suggests human occupation of the site since at least the Iron Age (2nd century AD), though the nature of this early settlement remains unclear. The rock's steep cliffs provide natural defenses on three sides, making it an ideal location for a fortification.
        </p>

        <h2>Royal Residence</h2>
        <p>
          Throughout its history, Edinburgh Castle served as a royal residence for many Scottish monarchs. Queen Margaret (later Saint Margaret) died here in 1093, and her son, King David I, built a royal residence and chapel on the site in the 12th century. The castle continued to be a royal residence until 1633, when King James VI of Scotland (James I of England) returned to Scotland for his Scottish coronation.
        </p>

        <h2>Military Fortress</h2>
        <p>
          Beyond its role as a royal residence, Edinburgh Castle has always been a military stronghold of strategic importance. Its commanding position made it a key defensive structure, and it has been besieged numerous times throughout history. During the Wars of Scottish Independence in the 14th century, the castle changed hands several times between Scottish and English forces.
        </p>
        
        <p>
          The castle's military significance continued well into the modern era. It served as a military base during both World Wars and housed prisoners of war during the 18th and 19th centuries. Today, while no longer an active military base, it still houses the regimental headquarters of the Royal Regiment of Scotland.
        </p>

        <h2>National Treasures</h2>
        <p>
          Edinburgh Castle houses some of Scotland's most precious national treasures. The Honours of Scotland (the Scottish Crown Jewels) are on display in the Crown Room. Dating from the 15th and 16th centuries, they are the oldest set of royal regalia in the British Isles. Alongside them is the Stone of Destiny, the ancient symbol of Scottish monarchy used in the coronation of Scottish kings for centuries.
        </p>
        
        <p>
          Another notable feature is the One O'Clock Gun, which has been fired at precisely 1:00 PM almost every day since 1861, originally to provide a time signal for ships in the Firth of Forth.
        </p>

        <h2>A Living Museum</h2>
        <p>
          Today, Edinburgh Castle is Scotland's most-visited paid tourist attraction, welcoming over 2 million visitors annually. It houses several museums, including the National War Museum of Scotland and the Regimental Museums of the Royal Scots Dragoon Guards and the Royal Scots.
        </p>
        
        <p>
          The Great Hall, completed in 1511 for King James IV, showcases medieval architecture with its hammerbeam roof. St. Margaret's Chapel, the oldest surviving building in Edinburgh, dates from the early 12th century and still holds services and weddings.
        </p>

        <h2>Cultural Icon</h2>
        <p>
          Beyond its historical significance, Edinburgh Castle has become a cultural icon and symbol of Scottish identity. It forms the dramatic backdrop for the annual Edinburgh Military Tattoo, a spectacular display of music, ceremony, and military precision that takes place on the castle esplanade during the Edinburgh Festival.
        </p>
        
        <p>
          The castle's silhouette, dominating the city's skyline, has become one of the most recognizable images of Scotland, representing both the nation's turbulent past and its rich cultural heritage.
        </p>

        <h2>Visiting Edinburgh Castle</h2>
        <p>
          For visitors to Scotland, Edinburgh Castle offers an unparalleled glimpse into the nation's history. Guided tours provide insights into the castle's fascinating past, while exhibitions and displays bring to life the stories of those who lived, worked, and fought within its walls. From the panoramic views of the city from the battlements to the somber atmosphere of the military prisons, a visit to Edinburgh Castle is an essential part of any Scottish itinerary.
        </p>
        
        <p>
          Whether you're drawn by its military history, royal connections, architectural features, or simply by the magnificent views, Edinburgh Castle stands as a testament to Scotland's complex and compelling story—a story written in stone on Castle Rock.
        </p>
      </div>

      {/* Tags and share */}
      <div className="mt-12 pt-6 border-t">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="font-bold">Tags:</span>
          <Link href="/blog#history" className="px-3 py-1 category-tag rounded-xl">History</Link>
          <Link href="/blog#edinburgh" className="px-3 py-1 category-tag rounded-xl">Edinburgh</Link>
          <Link href="/blog#castles" className="px-3 py-1 category-tag rounded-xl">Castles</Link>
        </div>
        
        <div className="flex items-center">
          <span className="font-bold mr-4">Share:</span>
          <div className="flex gap-4">
            <a href="#" className="content-link hover:underline">Twitter</a>
            <a href="#" className="content-link hover:underline">Facebook</a>
            <a href="#" className="content-link hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card rounded-xl shadow p-4">
            <Link href="/blog/scottish-highlands" className="text-lg font-semibold hover:text-link-hover">
              The Scottish Highlands
            </Link>
            <p className="mt-2">Discover the rugged beauty and ancient legends of the Scottish Highlands...</p>
          </div>
          <div className="card rounded-xl shadow p-4">
            <Link href="/blog/traditional-scottish-foods" className="text-lg font-semibold hover:text-link-hover">
              Traditional Scottish Foods You Must Try
            </Link>
            <p className="mt-2">From haggis to cranachan, discover the most iconic traditional Scottish dishes...</p>
          </div>
          <div className="card rounded-xl shadow p-4">
            <Link href="/blog/whisky-regions" className="text-lg font-semibold hover:text-link-hover">
              A Guide to Scottish Whisky Regions
            </Link>
            <p className="mt-2">Scotland is divided into five whisky-producing regions, each with its own distinct characteristics...</p>
          </div>
        </div>
      </div>

      {/* Comment section (non-functional in this demo) */}
      <div className="mt-12 pt-6 border-t">
        <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block mb-1 font-medium">Comment</label>
            <textarea 
              id="comment" 
              rows={6} 
              className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="px-6 py-3 primary-button rounded-xl transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
    </article>
  );
}