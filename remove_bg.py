from PIL import Image
import math
import sys

def remove_bg():
    try:
        input_path = "public/images/School's logo.jpeg"
        output_path = "public/images/logo-transparent.png"
        
        img = Image.open(input_path).convert('RGBA')
        data = img.getdata()
        
        # We sample a few pixels at the corners to establish the base background color,
        # usually (0, 0) is safe for a logo background block.
        bg_color = data[0]
        
        new_data = []
        for item in data:
            # Calculate Euclidean distance between current pixel and background color
            diff = math.sqrt(sum((a - b)**2 for a, b in zip(item[:3], bg_color[:3])))
            # Tolerance threshold for jpeg artifact noise
            if diff < 55:
                # If close to bg color, make fully transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path)
        print("Successfully created logo-transparent.png")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    remove_bg()
