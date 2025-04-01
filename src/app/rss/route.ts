export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Scotland - Land of History and Beauty</title>
    <link>https://yourscotlandwebsite.com</link>
    <description>Discover Scotland's rich history, breathtaking landscapes, and vibrant culture</description>
    <language>en-us</language>
    <lastBuildDate>Mon, 01 Apr 2024 12:00:00 GMT</lastBuildDate>
    <atom:link href="https://yourscotlandwebsite.com/rss.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Edinburgh Castle: A Historic Fortress</title>
      <link>https://yourscotlandwebsite.com/blog/edinburgh-castle</link>
      <pubDate>Mon, 01 Apr 2024 10:00:00 GMT</pubDate>
      <guid>https://yourscotlandwebsite.com/blog/edinburgh-castle</guid>
      <description>Perched atop Castle Rock, Edinburgh Castle dominates the city's skyline and has witnessed centuries of Scottish history.</description>
      <category>History</category>
    </item>
    
    <item>
      <title>The Scottish Highlands</title>
      <link>https://yourscotlandwebsite.com/blog/scottish-highlands</link>
      <pubDate>Mon, 28 Mar 2024 09:30:00 GMT</pubDate>
      <guid>https://yourscotlandwebsite.com/blog/scottish-highlands</guid>
      <description>Discover the rugged beauty and ancient legends of the Scottish Highlands, home to stunning mountains, lochs, and glens.</description>
      <category>Travel</category>
    </item>
    
    <item>
      <title>Traditional Scottish Foods You Must Try</title>
      <link>https://yourscotlandwebsite.com/blog/traditional-scottish-foods</link>
      <pubDate>Sat, 25 Mar 2024 14:15:00 GMT</pubDate>
      <guid>https://yourscotlandwebsite.com/blog/traditional-scottish-foods</guid>
      <description>From haggis to cranachan, discover the most iconic traditional Scottish dishes that you simply must try when visiting Scotland.</description>
      <category>Culture</category>
    </item>
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}