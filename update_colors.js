const fs = require('fs');
const path = require('path');

const dir = 'e:/GROWW projects/Baby & Kids Clothing Store';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // For standard files, replace in :root {}
    if (content.includes(':root {')) {
        const rootStart = content.indexOf(':root {');
        const rootEnd = content.indexOf('}', rootStart);
        
        let rootBlock = content.substring(rootStart, rootEnd);
        
        // Update colors
        rootBlock = rootBlock.replace(/--accent:\s*#FFBFA3[^;]*;/g, '--accent: #FF6B4A;           /* Vibrant Coral */');
        rootBlock = rootBlock.replace(/--accent-dark:\s*#E8A385[^;]*;/g, '--accent-dark: #E05132;');
        rootBlock = rootBlock.replace(/--accent-light:\s*#FFE6DA[^;]*;/g, '--accent-light: #FFE1DA;');
        
        content = content.substring(0, rootStart) + rootBlock + content.substring(rootEnd);
    }

    // For Tailwind files (login.html, register.html)
    if (content.includes('tailwind.config = {')) {
        const twStart = content.indexOf('colors: {');
        const twEnd = content.indexOf('}', twStart);
        
        if (twStart !== -1) {
            let twBlock = content.substring(twStart, twEnd);
            twBlock = twBlock.replace(/terracotta:\s*'#FFBFA3'/g, "terracotta: '#FF6B4A'");
            twBlock = twBlock.replace(/sage:\s*'#FFBFA3'/g, "sage: '#FF6B4A'");
            
            content = content.substring(0, twStart) + twBlock + content.substring(twEnd);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Colors updated successfully.');
