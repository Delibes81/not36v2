import os
import glob
from PIL import Image, ImageOps, ImageEnhance

try:
    import rawpy
    HAS_RAWPY = True
except ImportError:
    HAS_RAWPY = False
    print("Warning: rawpy not installed, skipping CR2 files.")

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        # Load image
        if input_path.lower().endswith('.cr2'):
            if not HAS_RAWPY:
                print(f"Skipping {input_path} due to missing rawpy")
                return
            with rawpy.imread(input_path) as raw:
                rgb = raw.postprocess(use_camera_wb=True)
                img = Image.fromarray(rgb)
        else:
            img = Image.open(input_path)
            # Handle EXIF orientation
            img = ImageOps.exif_transpose(img)
            img = img.convert('RGB')

        # Auto contrast
        img = ImageOps.autocontrast(img, cutoff=1)
        
        # Color enhancement
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.1)

        # Resize (max width or height 1920)
        img.thumbnail((1920, 1920), Image.Resampling.LANCZOS)

        # Save as WebP
        img.save(output_path, 'WEBP', quality=80)
        print(f"Saved {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def main():
    public_dir = os.path.join(os.path.dirname(__file__), 'public')
    out_dir = os.path.join(public_dir, 'optimized')
    os.makedirs(out_dir, exist_ok=True)

    files = glob.glob(os.path.join(public_dir, '*.*'))
    for f in files:
        if os.path.isfile(f):
            ext = f.lower().split('.')[-1]
            if ext in ['jpg', 'jpeg', 'cr2']:
                basename = os.path.basename(f)
                name_without_ext = os.path.splitext(basename)[0]
                out_file = os.path.join(out_dir, f"{name_without_ext}.webp")
                
                if not os.path.exists(out_file):
                    process_image(f, out_file)

if __name__ == '__main__':
    main()
