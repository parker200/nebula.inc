import os
from PIL import Image, ImageChops, ImageFilter, ImageOps

source_path = r"C:\Users\miguel jr\.gemini\antigravity-ide\brain\67d81308-ebb3-48ab-873f-307dfd0b62c7\.user_uploaded\media_1790140873928.jpg"
output_dir = r"c:\Users\miguel jr\Desktop\pa vender\nebula\public"
os.makedirs(output_dir, exist_ok=True)

img = Image.open(source_path).convert("RGBA")
width, height = img.size

# Save original
img.convert("RGB").save(os.path.join(output_dir, "nebula-logo-original.jpg"), quality=95)

# First, create a transparent version by calculating alpha from distance to white (255, 255, 255)
# In the original image, background is pure white (255,255,255).
# The cloud smoke has soft gradients fading into white.
# If color is C and background is W(255), on transparent: C_foreground = (C - (1-a)*255)/a
# Alpha = max(255 - min(r,g,b), diff)

r, g, b, a = img.split()

# Compute alpha channel: anything pure white is 0 alpha, darker or colorful pixels have alpha
# Using color distance or lightness:
def make_transparent(image):
    rgba = image.convert("RGBA")
    datas = rgba.getdata()
    newData = []
    for item in datas:
        r, g, b, _ = item
        # If it's near white
        # Calculate how far it is from pure white (255,255,255)
        # For colored smoke (purple/cyan/blue), it has distinct saturation even if bright
        min_val = min(r, g, b)
        max_val = max(r, g, b)
        diff = max_val - min_val
        
        # Distance from 255
        dist = 255 - min_val
        
        if dist < 6 and diff < 6:
            # Pure white background
            newData.append((r, g, b, 0))
        elif dist < 30 and diff < 10:
            # Soft feathered edge into white
            alpha = int((dist / 30.0) * 255)
            # Recover color
            newData.append((r, g, b, alpha))
        else:
            # Full opacity or partial for soft smoke
            # For smoke where min_val is high but diff > 10 (colored vapor)
            if min_val > 220:
                alpha = min(255, int((255 - min_val) * 3 + diff * 3))
                alpha = max(alpha, 120)
                newData.append((r, g, b, alpha))
            else:
                newData.append((r, g, b, 255))
    rgba.putdata(newData)
    return rgba

trans_img = make_transparent(img)
trans_img.save(os.path.join(output_dir, "nebula-logo-transparent.png"), "PNG")

# Now crop the shield icon (top part: y from ~100 to ~660, x from ~130 to ~894)
# Let's find bounding box of the shield
# The shield is the upper mark. Text "NEBULA" starts around y=680
shield_box = (130, 110, 894, 660)
shield_img = trans_img.crop(shield_box)
shield_img.save(os.path.join(output_dir, "shield-nebula.png"), "PNG")

# Also create a dark-theme full logo where text "NEBULA" and "SEGURIDAD INTELIGENTE" are white / cyan
# Let's crop the text area and enhance it for dark backgrounds
text_box = (140, 680, 884, 880)
text_img = img.crop(text_box)

# For dark mode full logo:
# Shield on top + crisp white "NEBULA" + cyan "SEGURIDAD INTELIGENTE"
full_dark = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
full_dark.paste(trans_img, (0, 0), trans_img)

# Now in the text area of full_dark, replace the dark navy text (#0d1b3e) with white (#ffffff) and cyan (#38bdf8)
text_data = full_dark.load()
for y in range(670, 890):
    for x in range(120, 904):
        r, g, b, a = text_data[x, y]
        if a > 30 and (r < 70 and g < 100 and b < 140): # dark navy text
            # If in the upper part (NEBULA) -> make crisp white
            if y < 805:
                text_data[x, y] = (255, 255, 255, a)
            else:
                # Lower part (SEGURIDAD INTELIGENTE) -> brand cyan
                text_data[x, y] = (56, 189, 248, a)

full_dark.save(os.path.join(output_dir, "nebula-logo-dark.png"), "PNG")

print("Generated shield-nebula.png, nebula-logo-dark.png, nebula-logo-transparent.png successfully!")
