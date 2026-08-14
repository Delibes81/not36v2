import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = [
  'public/optimized',
  'public/fotos-Notario',
  'public/fotos-Stock'
];

async function optimizeImages() {
  for (const dir of dirs) {
    const dirPath = path.resolve(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(dirPath, file);
        const nameWithoutExt = path.parse(file).name;
        const outputPath = path.join(dirPath, `${nameWithoutExt}.webp`);

        console.log(`Processing: ${inputPath} -> ${outputPath}`);
        try {
          await sharp(inputPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Resize if larger than 1920px wide
            .webp({ quality: 80, effort: 6 }) // Convert to webp with high optimization
            .toFile(outputPath);
          
          console.log(`Successfully converted ${outputPath}`);
          
          // Optionally remove the original png if we are replacing it
          if (inputPath !== outputPath) {
            fs.unlinkSync(inputPath);
            console.log(`Removed original file: ${inputPath}`);
          }
        } catch (err) {
          console.error(`Error processing ${inputPath}:`, err);
        }
      }
    }
  }
}

optimizeImages().then(() => console.log('Optimization complete.'));
