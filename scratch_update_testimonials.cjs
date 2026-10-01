const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'src', 'data', 'business.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacement = `export const testimonials: Testimonial[] = [
  {
    name: "Frances Clark",
    location: "Glendale, CA",
    rating: 5,
    text: "Exceptional assistance and dependable service. The specialist arrived on time and worked carefully to install outlets in many rooms. Excellent dialogue for the whole consultation.",
    service: "Outlet Installation",
  },
  {
    name: "Crystal Santos",
    location: "Glendale, CA",
    rating: 5,
    text: "A very skilled crew that made setting up our home EV charger very easy. They told us the exact date they would be there, showed up on time, and did the job without any extra charges. The charger works perfectly, and the whole thing looks very stylish.",
    service: "EV Charger Installation",
  },
  {
    name: "Heather Xiong",
    location: "Glendale, CA",
    rating: 5,
    text: "Outstanding professionalism and dedication to satisfying customers. If I needed electrical work done again, I would absolutely use them.",
    service: "Electrical Service",
  },
];`;

content = content.replace(/export const testimonials: Testimonial\[\] = \[\s*\{[\s\S]*?\];/m, replacement);

fs.writeFileSync(filePath, content);
console.log('Successfully updated testimonials array.');
