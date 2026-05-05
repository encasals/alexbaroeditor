import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';
const SIZES = [400, 800, 1200]; // Responsive sizes

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();
  
  console.log(`Processing: ${inputPath}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Generate WebP versions at different sizes
    for (const width of SIZES) {
      // Skip if original is smaller than target
      if (metadata.width && metadata.width < width) continue;
      
      const webpPath = path.join(outputDir, `${filename}-${width}w.webp`);
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const stats = fs.statSync(webpPath);
      console.log(`  Created: ${webpPath} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
    
    // Generate full-size WebP
    const fullWebpPath = path.join(outputDir, `${filename}.webp`);
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(fullWebpPath);
    
    const fullStats = fs.statSync(fullWebpPath);
    console.log(`  Created: ${fullWebpPath} (${(fullStats.size / 1024).toFixed(1)} KB)`);
    
  } catch (err) {
    console.error(`  Error processing ${inputPath}:`, err.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      await optimizeImage(fullPath, dir);
    }
  }
}

console.log('Starting image optimization...\n');
await processDirectory(IMAGES_DIR);
console.log('\nImage optimization complete!');
