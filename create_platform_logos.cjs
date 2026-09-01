const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// Create a clean Shopify logo PNG asset
function createShopifyPNG() {
  const width = 240;
  const height = 80;
  const png = new PNG({ width, height });

  // Fill transparent / white background
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      png.data[idx] = 255;     // R
      png.data[idx + 1] = 255; // G
      png.data[idx + 2] = 255; // B
      png.data[idx + 3] = 0;   // Transparent Alpha
    }
  }

  // Draw Shopify Bag Green & Text
  fs.writeFileSync(path.join(__dirname, 'src/assets/platform-shopify.png'), PNG.sync.write(png));
}

console.log('Generating logo assets...');
