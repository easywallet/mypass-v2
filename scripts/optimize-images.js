const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
    const heroSrc = path.join(__dirname, 'public/assets/images/hero-face.png');
    const heroDest = path.join(__dirname, 'public/assets/images/hero-face.webp');

    const logoSrc = path.join(__dirname, 'public/assets/logos/mypass-logo.png');
    const faviconDest = path.join(__dirname, 'public/favicon.ico');
    const appleDest = path.join(__dirname, 'public/apple-touch-icon.png');

    try {
        // Generate WebP Hero
        if (fs.existsSync(heroSrc)) {
            await sharp(heroSrc)
                .webp({ quality: 85 })
                .toFile(heroDest);
            console.log('✅ Generated hero-face.webp');
        }

        if (fs.existsSync(logoSrc)) {
            // Generate Favicon (32x32 png saved as ico for simplicity/compatibility)
            await sharp(logoSrc)
                .resize(32, 32)
                .toFormat('png')
                .toFile(faviconDest);
            console.log('✅ Generated favicon.ico');

            // Generate Apple Touch Icon (180x180)
            await sharp(logoSrc)
                .resize(180, 180)
                .toFormat('png')
                .toFile(appleDest);
            console.log('✅ Generated apple-touch-icon.png');
        }

    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
