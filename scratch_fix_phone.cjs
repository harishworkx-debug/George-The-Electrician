const fs = require('fs');
const path = require('path');

const filePath = path.join('e:', 'React Project', 'George-The-Electrician', 'src', 'data', 'business.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/phone: "\+1 747-837-1879",/g, 'phone: "+1 747-269-3742",');
content = content.replace(/phoneRaw: "\+17478371879",/g, 'phoneRaw: "+17472693742",');

fs.writeFileSync(filePath, content);
console.log('Fixed phone numbers.');
