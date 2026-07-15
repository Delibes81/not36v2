import os
from PIL import Image

def compress_image():
    input_path = "public/hero.png"
    output_path = "public/hero.webp"
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
        
    try:
        print(f"Opening {input_path}...")
        img = Image.open(input_path)
        
        # Convert to RGB if it's RGBA to save more space, though we might lose transparency.
        # Hero images usually don't need transparency.
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            print("Converting to RGB...")
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'RGBA':
                background.paste(img, mask=img.split()[3])
            else:
                background.paste(img)
            img = background
            
        # Resize if it's absurdly large (e.g. > 1920px wide)
        max_width = 1920
        if img.width > max_width:
            ratio = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            print(f"Resizing from {img.width}x{img.height} to {new_size[0]}x{new_size[1]}...")
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            
        print(f"Saving to {output_path}...")
        img.save(output_path, "WEBP", quality=80, method=6)
        
        orig_size = os.path.getsize(input_path) / (1024*1024)
        new_size = os.path.getsize(output_path) / (1024*1024)
        print(f"Done! Reduced size from {orig_size:.2f} MB to {new_size:.2f} MB")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    compress_image()
