---
name: Sanctuary Editorial
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434840'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#73796f'
  outline-variant: '#c3c8bd'
  surface-tint: '#4a6544'
  primary: '#0d250a'
  on-primary: '#ffffff'
  primary-container: '#223b1e'
  on-primary-container: '#89a680'
  inverse-primary: '#b1cfa7'
  secondary: '#54634a'
  on-secondary: '#ffffff'
  secondary-container: '#d8e8c8'
  on-secondary-container: '#5a6950'
  tertiary: '#2e1c06'
  on-tertiary: '#ffffff'
  tertiary-container: '#463118'
  on-tertiary-container: '#b79978'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccebc1'
  primary-fixed-dim: '#b1cfa7'
  on-primary-fixed: '#082107'
  on-primary-fixed-variant: '#334d2e'
  secondary-fixed: '#d8e8c8'
  secondary-fixed-dim: '#bcccad'
  on-secondary-fixed: '#131f0b'
  on-secondary-fixed-variant: '#3d4b34'
  tertiary-fixed: '#ffddb9'
  tertiary-fixed-dim: '#e2c19e'
  on-tertiary-fixed: '#291803'
  on-tertiary-fixed-variant: '#594228'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  subheading-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.015em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-ui:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
  space-4xl: 8rem
  gutter-mobile: 1.25rem
  gutter-desktop: 3rem
  container-max: 88rem
---

# Sanctuary Editorial — Design System

## Brand & Style

This design system channels the restrained elegance of world-class architectural sanctuaries and editorial publications. Built for an immersive eco-resort nestled within the misty highlands, it balances raw natural majesty with meticulous human craftsmanship. The aesthetic merges **Warm Editorial Minimalism** with tactile, quiet luxury: generous expanses of light, rhythmic breathing room, organic textures, and precise geometric structure.

The interface should evoke a deep sense of stillness, deceleration, and understated indulgence. Avoid loud calls-to-action, saturated gamification patterns, or aggressive conversions. The visual narrative treats imagery as fine art, copy as poetic literature, and UI controls as quiet, architectural details crafted from stone, linen, and aged metal.

## Colors

The color system draws directly from highland flora, mist, and natural masonry:

- **Neutral / Canvas (`#FAF8F3`)**: A soothing raw ivory and sun-washed cream that eliminates optical glare, serving as the foundational backdrop across all screens. Secondary surface tiers drift gently toward soft alabaster (`#F3EFE6`) and light linen (`#E8E2D5`).
- **Primary (`#223B1E`)**: A deep, restorative evergreen echoing the shadow cast by tea estates and dense canopy. Used for core brand elements, primary actions, and prominent editorial highlights.
- **Secondary (`#7B8A6F`) / (`#54634A`)**: Muted wild moss and olive-lichen used for supportive badges, category labels, subtle focus rings, and secondary indicators.
- **Tertiary (`#C2A382`) / (`#2E1C06`)**: Warm clay and spun raw linen, providing grounding terracotta warmth to balances and celebratory accents.
- **Text & Contrast (`#1B1C19` & `#434840`)**: Deep botanical charcoal for headlines and high-contrast text, accompanied by aged leaf charcoal for secondary prose, ensuring effortless legibility without harsh absolute black (`#000000`).
- **Borders & Dividers**: Handled strictly via ultra-sheer evergreen overlays (`rgba(34, 59, 30, 0.08)` to `rgba(34, 59, 30, 0.14)`), mimicking hairline architectural cuts rather than heavy framing.

### Color Palette Reference

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| `primary` | `#0D250A` / `#223B1E` | Deep Evergreen / Brand Primary |
| `on-primary` | `#FFFFFF` | Text on Primary |
| `primary-container` | `#223B1E` | Primary Container |
| `on-primary-container` | `#89A680` | Accent text on Primary Container |
| `secondary` | `#54634A` / `#7B8A6F` | Wild Moss / Olive |
| `secondary-container` | `#D8E8C8` | Soft Sage Tint Container |
| `on-secondary-container` | `#5A6950` | Text on Secondary Container |
| `tertiary` | `#2E1C06` / `#C2A382` | Warm Clay / Terracotta Linen |
| `tertiary-container` | `#463118` | Warm Earth Container |
| `background` / `surface` | `#FBF9F4` | Raw Ivory / Canvas |
| `surface-container-low` | `#F5F3EE` | Soft Alabaster |
| `surface-container` | `#F0EEE9` | Gentle Warm Tint |
| `surface-container-high` | `#EAE8E3` | Deep Muted Linen |
| `on-surface` | `#1B1C19` | Botanical Charcoal Body Text |
| `on-surface-variant` | `#434840` | Muted Secondary Text |
| `outline` | `#73796F` | Hairline Structural Dividers |
| `outline-variant` | `#C3C8BD` | Subtle Muted Borders |

## Typography

Typography establishes an editorial tension between romantic, contemplative literary heritage and razor-sharp modern legibility:

- **Playfair Display** introduces authentic editorial gravitas. Use regular and medium weights for room titles, feature spreads, atmospheric quotes, and narrative leads. Italics are reserved for sensory highlights, architectural captions, and guest reflections.
- **Plus Jakarta Sans** provides pristine geometric clarity across body copy, specs, booking flows, and metadata.
- **Micro-Copy & Eyebrows**: Sub-headers and section markers are styled with `label-caps`—all-caps, small size, and expansive tracking (+0.18em) to evoke haute horlogerie and museum exhibits.
- Maintain generous line-heights across body text to preserve a calm, rhythmic reading cadence.

### Typography Scale

| Style Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Playfair Display | 64px | 400 | 72px | -0.02em |
| `display-xl-mobile` | Playfair Display | 40px | 400 | 48px | -0.01em |
| `headline-lg` | Playfair Display | 44px | 400 | 52px | -0.015em |
| `headline-lg-mobile` | Playfair Display | 32px | 400 | 40px | -0.01em |
| `headline-md` | Playfair Display | 30px | 400 | 38px | 0em |
| `headline-sm` | Playfair Display | 22px | 500 | 30px | 0em |
| `subheading-lg` | Plus Jakarta Sans | 18px | 400 | 28px | 0.01em |
| `body-lg` | Plus Jakarta Sans | 16px | 400 | 26px | 0.01em |
| `body-md` | Plus Jakarta Sans | 14px | 400 | 22px | 0.015em |
| `body-sm` | Plus Jakarta Sans | 12px | 400 | 18px | 0.02em |
| `label-caps` | Plus Jakarta Sans | 11px | 600 | 16px | 0.18em |
| `label-ui` | Plus Jakarta Sans | 13px | 500 | 18px | 0.04em |

## Layout & Spacing

The layout philosophy follows an asymmetrical, editorial gallery grid that mirrors physical book layouts:

- **Desktop (12 Columns)**: Max container width of `88rem` with wide `3rem` (48px) gutters. Elements deliberately break symmetry (e.g. a photograph spanning 7 columns paired with a text block spanning 4 columns offset by a 1-column negative space void).
- **Tablet (8 Columns)**: Gutters adjust to `2rem` (32px). Multi-column spreads compress cleanly into balanced side-by-side or stacked configurations.
- **Mobile (4 Columns)**: Gutters adjust to `1.25rem` (20px). Layout collapses into full-bleed editorial imagery with clean vertical sequencing.
- **Vertical Spacing Rhythm**: Substantial section gaps (`space-3xl` to `space-4xl`) provide visual decompression between experiential narratives.

## Elevation & Depth

To preserve an organic, grounding aesthetic, avoid heavy drop shadows, skeuomorphic bevels, or plastic floating cards. Depth is communicated via tactile layering:

- **Atmospheric Tonal Layers**: Elevation is created through soft background tinting. Base canvas sits at `#FAF8F3`, while elevated components rest on `#FFFFFF` or softened flax linen `#F4EFE6`.
- **Razor Hairline Borders**: Physical division is demarcated through 1px borders tinted in forest charcoal (`rgba(34, 59, 30, 0.09)`), capturing the look of architectural vellum sketches.
- **Misty Ambient Shadow**: When interactive floating elements require spatial separation (e.g., persistent reservation bars or lightbox modals):
  ```css
  box-shadow: 0 20px 50px -12px rgba(34, 59, 30, 0.08), 0 4px 12px -2px rgba(34, 59, 30, 0.03);
  ```
- **Glass & Frost**: Modals and sticky navigation utilize a frosted botanical scrim (`rgba(250, 248, 243, 0.85)` with `backdrop-filter: blur(16px)`).

## Shapes

- **Cards & Media Panels**: 4px border radius (`rounded-sm` to `rounded-md`), preserving geometric discipline.
- **Interactive Buttons & Inputs**: Subtle 2px to 4px corners, balancing architectural precision with tactile warmth.
- **Circular Elements**: Strictly reserved for media controls (audio toggles, carousel pagination, play buttons).
- **Aspect Ratios**: 4:5 for vertical flora/suite portraits, 16:10 for panoramic vistas, 1:1 for culinary details.

## Component Specifications

### Buttons
- **Primary**: Deep evergreen (`#223B1E`), ivory label (`#FAF8F3`), 1px subtle matching border. Hover triggers transition to muted moss (`#2E4E29`) with subtle 1px letter-spacing expansion.
- **Secondary / Ghost**: Transparent surface, 1px border in `rgba(34, 59, 30, 0.25)`, botanical charcoal label (`#1C211B`). On hover, fills with sheer linen wash (`rgba(34, 59, 30, 0.04)`).
- **Text Link / Editorial Action**: Label styled in `label-caps` with inline hairline arrow (`→`). Hover produces an underline expanding from center.

### Form Inputs & Date Pickers
- **Text Inputs**: Flat ivory background with a hairline bottom border (`1px solid rgba(34, 59, 30, 0.2)`). Focus elevates border to `#223B1E` without glow rings. Labels hover above in `label-caps`.
- **Reservation Selectors**: Card-less segmented blocks separated by subtle vertical hairlines. Active selection denoted by warm clay tinting (`#C2A382` at 12% opacity) and refined serif numerals.

### Cards & Narrative Tiles
- **Suite / Villa Cards**: Edge-to-edge photography (4:5 ratio). Content sits below on uncontained ivory canvas with title in `headline-sm`, rate in `label-ui`, and specifications in `body-sm`.
- **Experience Highlights**: Alternating editorial lockups where typography overlaps imagery by 24px.
