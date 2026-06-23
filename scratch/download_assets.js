const fs = require('fs');
const path = require('path');
const https = require('https');

const ASSETS = {
  // Favicons
  'public/favicon.ico': 'https://himalayanwarrior.com/wp-content/uploads/2024/03/cropped-91-72499-36622-20240321_014044-2-32x32.jpg',
  'public/icon.png': 'https://himalayanwarrior.com/wp-content/uploads/2024/03/cropped-91-72499-36622-20240321_014044-2-192x192.jpg',
  'public/apple-icon.png': 'https://himalayanwarrior.com/wp-content/uploads/2024/03/cropped-91-72499-36622-20240321_014044-2-180x180.jpg',
  
  // Logos
  'public/logo.png': 'https://himalayanwarrior.com/wp-content/uploads/2024/03/cropped-cropped-Untitled-design-1.png',
  
  // Hero Banners
  'public/images/hero1.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/07/annapurna-g716640f37_1920.jpg',
  'public/images/hero2.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/07/himalayas-g7933084bf_1920.jpg',
  
  // Trek Listing Images
  'public/images/treks/kedarkantha.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/WhatsApp-Image-2025-01-08-at-23.19.54_979d7f51-1-410x250.jpg',
  'public/images/treks/nag-tibba.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/naagtibba-410x250.jpg',
  'public/images/treks/har-ki-dun.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/1024px-Har_Ki_Dun-410x250.jpg',
  'public/images/treks/dayara-bugyal.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/Dayara-Bugyal-Trek-5-1-410x250.jpg',
  'public/images/treks/chopta-chandrashila.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/tungnath-banner-1-1-410x250.jpg',
  'public/images/treks/brahmatal.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/brahamtal-1-410x250.jpg',
  'public/images/treks/bali-pass.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/balli-1-410x250.jpg',
  'public/images/treks/dhumdhar-kandi.jpg': 'https://himalayanwarrior.com/wp-content/uploads/2022/06/image3-410x250.jpeg'
};

// Create folders if they don't exist
const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

// Download helper
const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    ensureDirectoryExistence(dest);
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

// Run downloader
const run = async () => {
  console.log('Starting asset download...');
  for (const [dest, url] of Object.entries(ASSETS)) {
    try {
      console.log(`Downloading ${url} -> ${dest}...`);
      await download(url, dest);
      console.log(`Successfully saved ${dest}`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }
  console.log('All downloads completed!');
};

run();
