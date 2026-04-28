#!/usr/bin/env python3
"""
Generates the AI Integration Playbook promo image.

Output: public/images/ai-playbook-promo.png
1200x630 — used as OG image and as the landing-page hero thumbnail.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).parent.parent
OUTPUT = ROOT / "public" / "images" / "ai-playbook-promo.png"

W, H = 1200, 630
BLACK = (20, 20, 22)
LIME = (200, 255, 0)
WHITE = (255, 255, 255)
GRAY = (153, 153, 153)


def find_font(name_candidates, size):
    """Try a few system font paths, fall back to default."""
    candidates = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def find_bold(size):
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def find_italic(size):
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Italic.ttf",
        "/Library/Fonts/Arial Italic.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    img = Image.new("RGB", (W, H), BLACK)
    draw = ImageDraw.Draw(img)

    # Lime accent bar — top
    draw.rectangle([(0, 0), (520, 14)], fill=LIME)

    margin = 80

    # Eyebrow
    eyebrow_font = find_bold(20)
    draw.text((margin, 60), "FREE PLAYBOOK · 2026", font=eyebrow_font, fill=LIME)

    # Title — large multiline
    title_font = find_bold(108)
    title_y = 120
    draw.text((margin, title_y), "The AI", font=title_font, fill=WHITE)
    draw.text((margin, title_y + 110), "Integration", font=title_font, fill=WHITE)
    draw.text((margin, title_y + 220), "Playbook", font=title_font, fill=WHITE)

    # Subtitle italic
    subtitle_font = find_italic(28)
    draw.text((margin, title_y + 350), "A 4-stage framework for product teams", font=subtitle_font, fill=LIME)

    # Authors at bottom
    label_font = find_font(None, 18)
    draw.text((margin, H - 70), "BY", font=label_font, fill=GRAY)
    name_font = find_bold(22)
    draw.text((margin + 35, H - 72), "Andreas Melvær  &  Michael Millar", font=name_font, fill=WHITE)

    # URL bottom-right
    url_font = find_bold(20)
    url_text = "smpl.as/ai-playbook"
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    text_w = bbox[2] - bbox[0]
    draw.text((W - margin - text_w, H - 70), url_text, font=url_font, fill=LIME)

    img.save(OUTPUT, "PNG", optimize=True)
    print(f"Wrote: {OUTPUT} ({W}x{H})")


if __name__ == "__main__":
    main()
