#!/usr/bin/env python3
"""
Generates the AI Integration Playbook PDF.

Output: public/downloads/ai-integration-playbook.pdf
"""

from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.enums import TA_LEFT, TA_CENTER

ROOT = Path(__file__).parent.parent
OUTPUT = ROOT / "public" / "downloads" / "ai-integration-playbook.pdf"

BLACK = HexColor("#141416")
LIME = HexColor("#c8ff00")
OFFWHITE = HexColor("#f5f5f0")
GRAY_500 = HexColor("#999999")
GRAY_700 = HexColor("#555555")
WHITE = HexColor("#ffffff")

PAGE_W, PAGE_H = A4
MARGIN = 18 * mm

# --- Paragraph styles ---
H1 = ParagraphStyle(
    name="H1",
    fontName="Helvetica-Bold",
    fontSize=30,
    leading=34,
    textColor=BLACK,
    alignment=TA_LEFT,
)
H1_WHITE = ParagraphStyle(
    name="H1White",
    fontName="Helvetica-Bold",
    fontSize=34,
    leading=38,
    textColor=WHITE,
    alignment=TA_LEFT,
)
H2 = ParagraphStyle(
    name="H2",
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=24,
    textColor=BLACK,
    alignment=TA_LEFT,
    spaceAfter=12,
)
H3 = ParagraphStyle(
    name="H3",
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=16,
    textColor=BLACK,
    alignment=TA_LEFT,
    spaceBefore=10,
    spaceAfter=4,
)
BODY = ParagraphStyle(
    name="Body",
    fontName="Helvetica",
    fontSize=10.5,
    leading=15,
    textColor=GRAY_700,
    alignment=TA_LEFT,
    spaceAfter=8,
)
CALLOUT = ParagraphStyle(
    name="Callout",
    fontName="Helvetica-Oblique",
    fontSize=10.5,
    leading=15,
    textColor=BLACK,
    alignment=TA_LEFT,
    spaceAfter=8,
)
EYEBROW = ParagraphStyle(
    name="Eyebrow",
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=GRAY_500,
    alignment=TA_LEFT,
    spaceAfter=4,
)
EYEBROW_WHITE = ParagraphStyle(
    name="EyebrowWhite",
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=LIME,
    alignment=TA_LEFT,
    spaceAfter=4,
)
SUBTLE = ParagraphStyle(
    name="Subtle",
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    textColor=GRAY_500,
    alignment=TA_LEFT,
)


def draw_page_chrome(c, page_num, total_pages):
    """Footer with page number and brand mark."""
    c.setFillColor(GRAY_500)
    c.setFont("Helvetica", 8)
    c.drawString(MARGIN, 12 * mm, "SmplCo · The AI Integration Playbook")
    c.drawRightString(PAGE_W - MARGIN, 12 * mm, f"{page_num} / {total_pages}")


def draw_paragraph(c, text, style, x, y, max_width):
    """Renders a Paragraph and returns its height."""
    p = Paragraph(text, style)
    w, h = p.wrap(max_width, PAGE_H)
    p.drawOn(c, x, y - h)
    return h


def cover_page(c):
    # Black background
    c.setFillColor(BLACK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Lime accent block (top-left)
    c.setFillColor(LIME)
    c.rect(0, PAGE_H - 6 * mm, 80 * mm, 6 * mm, fill=1, stroke=0)

    inner_x = MARGIN
    inner_w = PAGE_W - 2 * MARGIN

    # Eyebrow
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x, PAGE_H - 35 * mm, "FREE PLAYBOOK · 2026")

    # Title — large
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 38)
    c.drawString(inner_x, PAGE_H - 65 * mm, "The AI")
    c.drawString(inner_x, PAGE_H - 80 * mm, "Integration")
    c.drawString(inner_x, PAGE_H - 95 * mm, "Playbook")

    # Subtitle
    c.setFillColor(LIME)
    c.setFont("Helvetica-Oblique", 14)
    c.drawString(inner_x, PAGE_H - 110 * mm, "A 4-stage framework for product teams")

    # Hero pitch
    c.setFillColor(WHITE)
    pitch_style = ParagraphStyle(
        name="Pitch",
        fontName="Helvetica",
        fontSize=12,
        leading=18,
        textColor=WHITE,
    )
    pitch = (
        "How to turn AI from a risky expense into a real product advantage — "
        "without burning cash, slowing execution, or shipping features nobody asked for."
    )
    p = Paragraph(pitch, pitch_style)
    w, h = p.wrap(inner_w * 0.85, PAGE_H)
    p.drawOn(c, inner_x, PAGE_H - 145 * mm - h)

    # Authors
    c.setFillColor(GRAY_500)
    c.setFont("Helvetica", 9)
    c.drawString(inner_x, 35 * mm, "BY")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(inner_x, 28 * mm, "Andreas Melvær  &  Michael Millar")
    c.setFillColor(GRAY_500)
    c.setFont("Helvetica", 9)
    c.drawString(inner_x, 22 * mm, "Co-founders, SmplCo")

    # URL footer
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x, 12 * mm, "smpl.as/ai-playbook")

    c.showPage()


def intro_page(c, page_num, total_pages):
    inner_x = MARGIN
    inner_w = PAGE_W - 2 * MARGIN
    y = PAGE_H - MARGIN

    y -= draw_paragraph(c, "INTRODUCTION", EYEBROW, inner_x, y, inner_w) + 6
    y -= draw_paragraph(c, "AI is the biggest competitive advantage <br/>for tech startups today. <br/>It is also one of the biggest strategic risks.", H1, inner_x, y, inner_w) + 14

    body_text = """\
We have helped build over 125 digital products at SmplCo. Almost every one of them now has some AI inside, and the ones that work aren't necessarily the ones with the most AI. They're the ones that picked the right place to put it, in the right way, at the right stage.

This playbook is the framework Andreas and Mike use with founders and product teams every week. It is the same content covered in the Barclays Eagle Labs webinar on 29 April 2026, distilled into something you can keep on your desk.

The four stages aren't a linear waterfall. They are four lenses you can use at any point in a product's life — once now, again in six months, again before a big release. The teams that get AI right keep coming back to all four."""

    for para in body_text.strip().split("\n\n"):
        y -= draw_paragraph(c, para, BODY, inner_x, y, inner_w) + 4

    y -= 10
    # Callout box
    box_h = 38 * mm
    c.setFillColor(LIME)
    c.roundRect(inner_x, y - box_h, inner_w, box_h, 5 * mm, fill=1, stroke=0)

    callout_inner = inner_x + 8 * mm
    callout_y = y - 8 * mm
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(callout_inner, callout_y, "THE FOUR STAGES")
    callout_y -= 8 * mm
    c.setFont("Helvetica-Bold", 11)
    c.drawString(callout_inner, callout_y, "1. The right strategy for your stage")
    callout_y -= 5 * mm
    c.drawString(callout_inner, callout_y, "2. Where AI actually creates value")
    callout_y -= 5 * mm
    c.drawString(callout_inner, callout_y, "3. Governance, guardrails, and scalability")
    callout_y -= 5 * mm
    c.drawString(callout_inner, callout_y, "4. AI as a strategic asset, not a budget drain")

    draw_page_chrome(c, page_num, total_pages)
    c.showPage()


def stage_page(c, page_num, total_pages, stage_num, stage_title, sections, page_intro):
    inner_x = MARGIN
    inner_w = PAGE_W - 2 * MARGIN
    y = PAGE_H - MARGIN

    # Stage badge
    badge_w = 30 * mm
    badge_h = 8 * mm
    c.setFillColor(LIME)
    c.roundRect(inner_x, y - badge_h, badge_w, badge_h, 2 * mm, fill=1, stroke=0)
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(inner_x + badge_w / 2, y - badge_h + 2.5 * mm, f"STAGE {stage_num:02d}")
    y -= badge_h + 6

    y -= draw_paragraph(c, stage_title, H1, inner_x, y, inner_w) + 10
    y -= draw_paragraph(c, page_intro, BODY, inner_x, y, inner_w) + 10

    for heading, content in sections:
        y -= draw_paragraph(c, heading, H3, inner_x, y, inner_w) + 2
        y -= draw_paragraph(c, content, BODY, inner_x, y, inner_w) + 6

    draw_page_chrome(c, page_num, total_pages)
    c.showPage()


def back_page(c, page_num, total_pages):
    # Black background
    c.setFillColor(BLACK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    inner_x = MARGIN
    inner_w = PAGE_W - 2 * MARGIN
    y = PAGE_H - MARGIN

    # Eyebrow
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x, y - 8, "WHAT NEXT?")
    y -= 25

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(inner_x, y - 20, "Three ways to take")
    c.drawString(inner_x, y - 40, "this further.")
    y -= 70

    # Card 1 — Webinar
    card_h = 35 * mm
    c.setFillColor(LIME)
    c.roundRect(inner_x, y - card_h, inner_w, card_h, 5 * mm, fill=1, stroke=0)
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(inner_x + 8 * mm, y - 9 * mm, "JOIN THE LIVE WEBINAR")
    c.setFont("Helvetica-Bold", 14)
    c.drawString(inner_x + 8 * mm, y - 17 * mm, "Wed 29 April 2026 · 12:00 BST · Online")
    c.setFont("Helvetica", 10.5)
    c.drawString(inner_x + 8 * mm, y - 25 * mm, "Andreas and Mike walk through the playbook live with Q&A.")
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x + 8 * mm, y - 32 * mm, "labs.uk.barclays/events/effectively-integrate-ai-into-your-product")
    y -= card_h + 8

    # Card 2 — Book a call
    c.setStrokeColor(LIME)
    c.setLineWidth(1.5)
    c.setFillColor(BLACK)
    c.roundRect(inner_x, y - card_h, inner_w, card_h, 5 * mm, fill=1, stroke=1)
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(inner_x + 8 * mm, y - 9 * mm, "GET A SECOND OPINION")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(inner_x + 8 * mm, y - 17 * mm, "Book a free 30-minute strategy call")
    c.setFont("Helvetica", 10.5)
    c.drawString(inner_x + 8 * mm, y - 25 * mm, "No pitch — just a sanity check on what you're building and where the cost is going.")
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x + 8 * mm, y - 32 * mm, "smpl.as/book")
    y -= card_h + 8

    # Card 3 — More resources
    c.setStrokeColor(LIME)
    c.setLineWidth(1.5)
    c.setFillColor(BLACK)
    c.roundRect(inner_x, y - card_h, inner_w, card_h, 5 * mm, fill=1, stroke=1)
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(inner_x + 8 * mm, y - 9 * mm, "MORE FREE RESOURCES")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(inner_x + 8 * mm, y - 17 * mm, "Other playbooks from SmplCo")
    c.setFont("Helvetica", 10.5)
    c.drawString(inner_x + 8 * mm, y - 25 * mm, "Attention Is New Gold · Build Your Own Internal Tools · Pitch Prep Guide")
    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(inner_x + 8 * mm, y - 32 * mm, "smpl.as")
    y -= card_h + 14

    # Sign-off
    c.setFillColor(GRAY_500)
    c.setFont("Helvetica", 9)
    c.drawString(inner_x, 28 * mm, "WRITTEN BY")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(inner_x, 22 * mm, "Andreas Melvær & Michael Millar — Co-founders, SmplCo")
    c.setFillColor(GRAY_500)
    c.setFont("Helvetica", 9)
    c.drawString(inner_x, 16 * mm, "hello@smpl.as · smpl.as")

    c.setFillColor(LIME)
    c.setFont("Helvetica-Bold", 9)
    c.drawRightString(PAGE_W - MARGIN, 16 * mm, f"{page_num} / {total_pages}")

    c.showPage()


# --- Stage content ---

STAGE_1 = (
    "The right strategy<br/>for your stage",
    "Pre-seed, seed, Series A, scale-up, enterprise — each has a different sensible bet on AI. Most failures we see are people copying the wrong stage's playbook. Here's how to think about your stage, and what to actually do.",
    [
        (
            "Pre-seed and seed: AI as differentiator",
            "Use AI to do something the market can't already get from a no-code tool or a generic chatbot. The bar is product differentiation, not technical sophistication. Most pre-seed AI features should look like a single, opinionated workflow — not a platform. Ship the smallest version that proves the value, ideally in days. Use APIs, not in-house models. The unit economics don't matter yet; the differentiation does.",
        ),
        (
            "Series A: AI as efficiency lever",
            "By Series A you have customers, support tickets, and a real cost of serving them. The highest-return AI work is internal — the things customers don't see but that compound. Customer support automation, sales note summarisation, churn prediction, content generation pipelines. Build the AI that lets your team do more with the same headcount. Save the customer-facing AI moves for when there's evidence customers want them.",
        ),
        (
            "Scale-up and enterprise: AI as moat",
            "When you have data nobody else has and customers nobody else has, AI becomes a moat. This is the stage to embed AI into the core product, not on top of it. Build evals, build observability, build the data flywheel. Consider fine-tuning small open models on your own data once the volume justifies it. The mistake at this stage is bolting AI onto a feature instead of rebuilding the workflow around it.",
        ),
        (
            "The decision: three questions to ask",
            "1. What's the smallest AI feature that would change a customer's mind about us? 2. What's the AI feature our team needs more than our customers do? 3. If we deleted every AI feature tomorrow, what would actually break? The honest answers usually narrow the roadmap considerably.",
        ),
    ],
)

STAGE_2 = (
    "Where AI actually<br/>creates value",
    "The 80/20 of where AI pays back is narrower than most people think. Generic AI features lose to focused ones almost every time. Here's how to score any feature for AI fit.",
    [
        (
            "The pattern AI is genuinely good at",
            "AI is good where pattern recognition, content generation, or fuzzy matching beats explicit rules. Summarisation, classification, drafting, search, recommendation, transcription. It is bad at deterministic logic, anything safety-critical, and anything that needs perfect reproducibility. If the existing solution is a switch statement, AI rarely improves it. If the existing solution is a human reading a screen, AI usually does.",
        ),
        (
            "Score every feature on three axes",
            "Value to the user: would they pay or stay because of this? Cost: inference, latency, and engineering. Differentiation: would a competitor with the same model build the same thing? The features that win are high on all three. The features that fail are usually middling on all three — useful enough to ship, not useful enough to matter.",
        ),
        (
            "The 'AI everywhere' trap",
            "The temptation is to add AI to every feature. The result is a product that feels gimmicky and an inference bill that scales with feature count, not value. Pick one or two AI features that are actually load-bearing for the customer experience. Make those excellent. Leave the rest alone.",
        ),
        (
            "Quick filter: 5 questions",
            "1. Could a deterministic rule do this? 2. What's the failure mode if the AI gets it wrong? 3. How would we know if it's degrading? 4. What's the cost per use, multiplied by expected use? 5. What's the value per use, multiplied by expected use? If question 5 doesn't beat question 4 by at least 5x, the feature isn't worth shipping.",
        ),
    ],
)

STAGE_3 = (
    "Governance, guardrails,<br/>and scalability",
    "The bit founders skip until something embarrassing happens in production. A small amount of effort early — evals, observability, cost ceilings — saves a lot of pain later.",
    [
        (
            "Evals: how you know your AI is working",
            "Build a small set of test cases your AI feature should pass. Run them on every change. Add new cases when you find new failure modes. Without evals, you have no signal that an upgrade is an upgrade and no warning when a model update breaks your workflow. A spreadsheet of fifty examples is enough to start. Don't over-engineer it before you have it.",
        ),
        (
            "Observability: cost, latency, quality",
            "Instrument three numbers per AI request: token spend, time to first byte, and a quality signal (user feedback, eval score, or an LLM-as-judge). Without these three you cannot tell whether a 'simple' feature is quietly costing you ten thousand pounds a month or returning bad output that your support team is patching.",
        ),
        (
            "Guardrails: what AI is allowed to do",
            "Decide explicitly what AI can answer, what it can't, and what it must escalate. Write the rules down. Apply them consistently. The teams that get embarrassed by their AI publicly are usually the teams that hadn't thought about this until it happened.",
        ),
        (
            "Scalability: cost ceilings before usage spikes",
            "Set a per-user, per-feature, per-day cost ceiling. Cache aggressively. Use smaller models where you can. Move expensive operations to async. Decide upfront whether you're charging users for high-cost AI use, absorbing it, or capping it. The worst outcome is finding out by accident which one you're doing.",
        ),
    ],
)

STAGE_4 = (
    "AI as a strategic asset,<br/>not a budget drain",
    "The teams that compound an advantage from AI aren't the ones using the biggest model. They're the ones with discipline about cost and clarity about what they're measuring. Here's how to make AI a moat.",
    [
        (
            "Cost discipline beats model size",
            "Caching beats GPT-5. Smaller fine-tuned models beat frontier models on narrow tasks. Batch and async beat real-time when the user can wait. The teams winning at AI cost are not the ones with the biggest infrastructure budgets — they're the ones who refused to default to the most expensive option.",
        ),
        (
            "Measure value, not usage",
            "Tokens consumed is a vanity metric. Real metrics: revenue per AI feature, customer retention attributable to AI features, support tickets deflected, sales cycle compression. If you cannot tell whether your AI feature is making the business money, you cannot tell whether it's earning its cost.",
        ),
        (
            "In-house vs API: a moving line",
            "At low volume, APIs win on every dimension. As volume scales, the math changes — but slower than most teams think. The cost of running your own model includes engineers, hardware, evals, and the opportunity cost of what they're not building. For most companies, the right answer is 'API for years, then revisit.' Don't build a model team because it sounds impressive.",
        ),
        (
            "The compounding moat",
            "The real AI moat is not the model. It's data + evals + workflow expertise. Companies that systematically capture user feedback, build evals, refine prompts, and improve the workflow around the AI compound an advantage that competitors with the same model cannot replicate. AI integration is a continuous capability, not a one-time project.",
        ),
    ],
)


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("The AI Integration Playbook")
    c.setAuthor("Andreas Melvær & Michael Millar — SmplCo")
    c.setSubject("A 4-stage framework for product teams")
    c.setKeywords("AI, product strategy, founders, scale-ups, SmplCo")

    total = 6

    # Page 1: Cover
    cover_page(c)

    # Page 2: Intro
    intro_page(c, 2, total)

    # Pages 3-5: Stages 1-4 (we have 4 stages but limit to 4 stage pages — but we want 6 total = cover + intro + 3 stage pages...)
    # Adjust: cover + intro + 4 stages + back = 7 pages. Update total.

    # Re-plan: 7 pages total — cover, intro, stage 1, stage 2, stage 3, stage 4, back
    pass

    # Actually finalize as 7 pages — re-do
    c.save()


if __name__ == "__main__":
    # Re-do with 7 page layout
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("The AI Integration Playbook")
    c.setAuthor("Andreas Melvær & Michael Millar — SmplCo")
    c.setSubject("A 4-stage framework for product teams")

    total = 7
    cover_page(c)
    intro_page(c, 2, total)

    stages_data = [STAGE_1, STAGE_2, STAGE_3, STAGE_4]
    for i, (title, intro, sections) in enumerate(stages_data):
        stage_page(c, i + 3, total, i + 1, title, sections, intro)

    back_page(c, 7, total)
    c.save()
    print(f"Wrote: {OUTPUT}")
