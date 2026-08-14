import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToProcess = [
  // Testimonials
  { url: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'testimonial-1.webp' },
  { url: 'https://images.pexels.com/photos/6633071/pexels-photo-6633071.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'testimonial-2.webp' },
  { url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'testimonial-3.webp' },
  // Team
  { url: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'team-1.webp' },
  { url: 'https://images.pexels.com/photos/7389120/pexels-photo-7389120.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'team-2.webp' },
  { url: 'https://images.pexels.com/photos/8434639/pexels-photo-8434639.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'team-3.webp' },
  { url: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'team-4.webp' }
];

const outputDir = path.join(__dirname, 'public', 'optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadAndConvert() {
  for (const img of imagesToProcess) {
    const outputPath = path.join(outputDir, img.name);
    console.log(`Downloading ${img.url}...`);
    
    await new Promise((resolve, reject) => {
      https.get(img.url, (res) => {
        const data = [];
        res.on('data', (chunk) => data.push(chunk));
        res.on('end', async () => {
          try {
            const buffer = Buffer.concat(data);
            await sharp(buffer)
              .webp({ quality: 80 })
              .toFile(outputPath);
            console.log(`Saved optimized image to ${outputPath}`);
            resolve();
          } catch (err) {
            console.error(`Error converting ${img.name}:`, err);
            reject(err);
          }
        });
      }).on('error', (err) => {
        console.error(`Error downloading ${img.name}:`, err);
        reject(err);
      });
    });
  }
  console.log('All done!');
}

downloadAndConvert().catch(console.error);
