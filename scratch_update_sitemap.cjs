const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'public', 'sitemap.xml');
let content = fs.readFileSync(filePath, 'utf8');

// Get current date in YYYY-MM-DD format
const lastmodDate = '2026-10-01'; // Based on current session date

// We will replace each <url><loc>...</loc></url> with
// <url>
//   <loc>...</loc>
//   <lastmod>2026-10-01</lastmod>
// </url>

// Using regex to add lastmod
content = content.replace(/<url>\s*<loc>(.*?)<\/loc>\s*<\/url>/g, (match, loc) => {
  return `<url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmodDate}</lastmod>\n  </url>`;
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated sitemap with lastmod dates.');
