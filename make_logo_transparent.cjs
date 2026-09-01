const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\Hasnain Ansari\\.gemini\\antigravity\\brain\\798680cf-f98c-4e57-9679-dbdc177d17b8\\.user_uploaded\\media_1787992548504.png';
const darkBgOutputPath = 'c:\\Users\\Hasnain Ansari\\OneDrive\\Desktop\\BizMaker\\src\\assets\\bizmaker-logo-darkbg.png';
const lightBgOutputPath = 'c:\\Users\\Hasnain Ansari\\OneDrive\\Desktop\\BizMaker\\src\\assets\\bizmaker-logo-transparent.png';

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    
    // Create copy for dark background version (white text + teal)
    const darkPNG = new PNG({ width: this.width, height: this.height });
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;

        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];

        // Luminance check for background removal
        const isWhite = r > 235 && g > 235 && b > 235;
        
        if (isWhite) {
          // Transparent background
          darkPNG.data[idx + 3] = 0;
          this.data[idx + 3] = 0;
        } else {
          // Anti-alias smooth edge
          const lightness = (r + g + b) / 3;
          const alpha = lightness > 200 ? Math.floor(255 * (1 - (lightness - 200) / 55)) : a;
          
          darkPNG.data[idx + 3] = alpha;
          this.data[idx + 3] = alpha;

          // Check if dark navy pixel (e.g., 'BIZ' text or dark navy circle/bars)
          const isNavy = r < 60 && g < 80 && b < 100;
          
          if (isNavy) {
            // For dark background version, turn dark navy into pure bright white!
            darkPNG.data[idx] = 255;
            darkPNG.data[idx + 1] = 255;
            darkPNG.data[idx + 2] = 255;
          } else {
            // Teal parts stay original vibrant teal
            darkPNG.data[idx] = r;
            darkPNG.data[idx + 1] = g;
            darkPNG.data[idx + 2] = b;
          }
        }
      }
    }

    // Write dark background version
    darkPNG.pack().pipe(fs.createWriteStream(darkBgOutputPath)).on('finish', () => {
      console.log('Successfully created dark background logo: ' + darkBgOutputPath);
    });

    // Write light background version
    this.pack().pipe(fs.createWriteStream(lightBgOutputPath)).on('finish', () => {
      console.log('Successfully created transparent logo: ' + lightBgOutputPath);
    });
  });
