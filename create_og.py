from PIL import Image

try:
    # Open the transparent logo
    img = Image.open('public/images/logo-transparent.png').convert("RGBA")
    
    # 1. Create opengraph-image.png (1200x630 white background)
    og = Image.new("RGBA", (1200, 630), "WHITE")
    
    # Resize the logo to fit nicely, let's say max height of 500
    logo_ratio = img.width / img.height
    new_h = 500
    new_w = int(new_h * logo_ratio)
    img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Center it
    offset_x = (1200 - new_w) // 2
    offset_y = (630 - new_h) // 2
    og.paste(img_resized, (offset_x, offset_y), img_resized)
    
    # Save OG image (RGB to drop alpha for jpg/png without transparency issues)
    og.convert("RGB").save("src/app/opengraph-image.png")
    
    # 2. Create icon.png for favicon
    # We can just save the transparent version as icon.png
    img.save("src/app/icon.png")
    
    print("Images created successfully")
except Exception as e:
    print(f"Error: {e}")
