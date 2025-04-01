#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to create kebab-case slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

async function createBlogPost() {
  console.log('📝 Create New Blog Post');
  console.log('======================');

  // Get blog post details
  const title = await prompt('Title: ');
  const category = await prompt('Category: ');
  const excerpt = await prompt('Excerpt: ');
  
  // Create date
  const date = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  
  // Create slug
  const slug = createSlug(title);
  const slugPath = `/blog/${slug}`;
  
  // Get latest post ID
  const blogPostsPath = path.join(__dirname, '..', 'src', 'data', 'blog-posts.ts');
  const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');
  
  // Find highest ID in the blog posts array
  const idRegex = /id:\s*(\d+)/g;
  let match;
  let highestId = 0;
  
  while ((match = idRegex.exec(blogPostsContent)) !== null) {
    const id = parseInt(match[1], 10);
    if (id > highestId) {
      highestId = id;
    }
  }
  
  const newId = highestId + 1;
  
  // Ask if the post should be featured or recent
  const isFeatured = (await prompt('Feature this post on homepage? (y/n): ')).toLowerCase() === 'y';
  const isRecent = (await prompt('Show as recent post on homepage? (y/n): ')).toLowerCase() === 'y';
  
  // Create new blog post object
  const newBlogPost = `  {
    id: ${newId},
    title: "${title}",
    date: "${formattedDate}",
    excerpt: "${excerpt}",
    slug: "${slugPath}",
    category: "${category}"${isFeatured ? ',\n    isFeatured: true' : ''}${isRecent ? ',\n    isRecent: true' : ''}
  }`;
  
  // Add to blog-posts.ts
  const updatedBlogPostsContent = blogPostsContent.replace(
    'export const blogPosts: BlogPost[] = [',
    `export const blogPosts: BlogPost[] = [\n${newBlogPost},`
  );
  
  fs.writeFileSync(blogPostsPath, updatedBlogPostsContent);
  
  // Create blog post directory and file
  const postDirPath = path.join(__dirname, '..', 'src', 'app', 'blog', slug);
  fs.mkdirSync(postDirPath, { recursive: true });
  
  // Copy template file
  const templatePath = path.join(__dirname, '..', 'src', 'app', 'blog', 'post-template', 'page.tsx');
  let templateContent = fs.readFileSync(templatePath, 'utf8');
  
  // Replace placeholders
  templateContent = templateContent
    .replace(/Your Post Title/g, title)
    .replace(/Your post description here/g, excerpt)
    .replace(/Month DD, YYYY/g, formattedDate)
    .replace(/Category/g, category)
    .replace(/const POST_ID = XX;/g, `const POST_ID = ${newId};`);
  
  fs.writeFileSync(path.join(postDirPath, 'page.tsx'), templateContent);
  
  console.log('\n✅ Blog post created successfully!');
  console.log(`📂 Post directory: src/app/blog/${slug}`);
  console.log(`🌐 Post URL: ${slugPath}`);
  console.log(`\nYou can edit the post at: src/app/blog/${slug}/page.tsx`);
  
  rl.close();
}

createBlogPost().catch(console.error);