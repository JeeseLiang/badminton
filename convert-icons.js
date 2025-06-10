const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = path.join(__dirname, 'icons', 'badminton-icon.svg');
const outputDir = path.join(__dirname, 'icons');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 转换每个尺寸
sizes.forEach(size => {
    sharp(inputFile)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
        .then(() => console.log(`Created ${size}x${size} icon`))
        .catch(err => console.error(`Error creating ${size}x${size} icon:`, err));
}); 