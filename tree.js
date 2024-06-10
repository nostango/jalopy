const fs = require('fs');
const path = require('path');

function listDirectory(dir, level = 0) {
  const indent = '│   '.repeat(level);
  const files = fs.readdirSync(dir);
  
  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const isLast = index === files.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    
    if (stats.isDirectory()) {
      console.log(`${indent}${connector}${file}/`);
      listDirectory(filePath, level + 1);
    } else {
      console.log(`${indent}${connector}${file}`);
    }
  });
}

// Start listing from the root of the project
listDirectory('./src');
