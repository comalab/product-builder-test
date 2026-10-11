---
name: Boss Encounter Editorial
colors:
  surface: '#141125'
  surface-dim: '#141125'
  surface-bright: '#3a364d'
  surface-container-lowest: '#0e0b1f'
  surface-container-low: '#1c192d'
  surface-container: '#201d32'
  surface-container-high: '#2b273d'
  surface-container-highest: '#353248'
  on-surface: '#e5dffb'
  on-surface-variant: '#e3bdbf'
  inverse-surface: '#e5dffb'
  inverse-on-surface: '#312e43'
  outline: '#aa888a'
  outline-variant: '#5b4041'
  surface-tint: '#ffb2b7'
  primary: '#ffb2b7'
  on-primary: '#67001b'
  primary-container: '#ff516a'
  on-primary-container: '#5b0017'
  inverse-primary: '#bc0b3b'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#f1c100'
  on-tertiary: '#3d2f00'
  tertiary-container: '#d0a600'
  on-tertiary-container: '#4f3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b7'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#92002a'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#f1c100'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#141125'
  on-background: '#e5dffb'
  surface-variant: '#353248'
typography:
  headline-xl:
    fontFamily: Anybody
    fontSize: 3.5rem
    fontWeight: '900'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Anybody
    fontSize: 2rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Anybody
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 1.5rem
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Anybody
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Anybody
    fontSize: 1.125rem
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Courier Prime
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Courier Prime
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  body-sm:
    fontFamily: Courier Prime
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Courier Prime
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Courier Prime
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Courier Prime
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an uncompromising, late-era 16-bit boss encounter mixed with technical terminal tooling. It rejects sterile modernism in favor of high-velocity arcade pressure, scanline-adjacent contrast, and tactile mechanical weight. 

Designed for creative practitioners, game authors, and technical storytellers operating in a high-focus state, the visual environment commands alertness. It synthesizes kinetic display energy with the cold, deliberate precision of classic fixed-pitch terminal scripting.

Key aesthetics:
- **Neo-Arcade Brutalism:** Structural, razor-sharp 0px geometries defined by heavy inset and outset pixel rims.
- **Terminal Clarity:** Monospaced type systems delivering strict character-level density for prose and markdown workflows.
- **Warning-State Energy:** Aggressive, saturated accents against deep abyss substrates that communicate critical states, mana meters, and combat status.

## Colors

The color architecture is built directly on midnight slate and deep fantasy purples, accented by raw 16-bit resource indicators (HP Crimson, Mana Cyan, Stamina Gold, Quest Emerald).

### Palette Roles
- **Primary (`#f43f5e`):** Boss-encounter crimson/rose. Reserved for high-priority commands, active boss health bars, destructive triggers, and primary focus indicators.
- **Secondary (`#38bdf8`):** Mana cyan. Governs interactive metadata, active cursor states, code highlights, and syntactic navigation.
- **Tertiary (`#ffcc00`):** Arcade gold. Applied to inventory highlights, critical alerts, experience counters, and triumphant state changes.
- **Neutral Abyss (`#0f0c20`):** The zero-ground canvas. An ink-dense purple-slate providing limitless contrast depth.
- **Surface Elevation Layers:**
  - `Surface 100` (`#1b1638`): Component backdrop, sunken editor wells, inactive gutter panels.
  - `Surface 200` (`#2a2254`): Card containers, floating dialogs, interactive toolbar tiles.
  - `Surface 300` (`#3b306b`): Hover outlines, active segment toggles, beveled highlights.
- **Semantic Status:**
  - **Success / Quest (`#22c55e`):** Completed objectives, saved revisions, healthy connection states.
  - **Warning / Stamina (`#f6ad55`):** Unsaved drafts, rate-limit warnings, caution dialogs.
  - **Void Black (`#000000`):** Dedicated to rigid drop-shadow offsets and extreme contrast framing.

## Typography

The type system stages a deliberate friction between brutalist impact and rhythmic monospace prose. 

- **Display Typography (`Anybody`):** Rendered in high-weight, condensed cuts. All major titles, level headings, and combat-style notifications leverage uppercase styling with tightly packed glyphs, evoking high-voltage arcade marquees.
- **Prose & Technical Copy (`Courier Prime`):** Serves all document authoring, raw markdown inputs, code snippets, status bars, and UI badges. Its disciplined mechanical proportions guarantee rock-solid alignment across modular grids and ASCII-like UI decorations.
- **Rhythm Rules:** Labels must always be rendered in strict uppercase with expanded tracking (`0.05em` to `0.1em`) to mimic retro ROM memory registers.

## Layout & Spacing

Layout geometry follows an interlocking module grid based on strict 4px/8px increments. The interface prioritizes desktop workstation throughput with dense, split-pane configurations.

### Grid & Breakpoints
- **Desktop (1024px+):** 12-column fixed/fluid hybrid split. Editor sidebars occupy fixed 280px-340px command docks; the central writing canvas spans 8 columns (`gutter-desktop: 1.5rem`, `margin-desktop: 2rem`).
- **Tablet (768px - 1023px):** 8-column layout. Tools collapse into collapsible inventory drawers (`gutter: 1rem`, `margin: 1.5rem`).
- **Mobile (<768px):** Single-column stacked cockpit. The editor dominates viewport height; stats, inventory tags, and tools dock to persistent, bottom-anchored action decks (`margin: 1rem`).

### Rhythm Execution
Never use fluid or floating whitespace transitions. Everything snaps strictly onto the 4px base step (`space-xs: 4px`, `space-sm: 8px`, `space-md: 16px`, `space-lg: 24px`, `space-xl: 40px`). Panel borders must rest edge-to-edge or snap across explicit multi-pixel gutters.

## Elevation & Depth

Soft radial shadows and Gaussian blurs are strictly forbidden. Depth is achieved entirely through physical raster simulation: hard-edge directional offsets, contrasting bevel borders, and solid stepped drop shadows.

### Depth Archetypes
1. **Hard Cast Shadow (Standard Floating):**
   - Solid, zero-blur black offsets: `box-shadow: 4px 4px 0px #000000`.
   - Secondary tinting for elevated nested panels: `box-shadow: 3px 3px 0px #110d29`.
2. **Beveled Chassis (Panel Depth):**
   - Simulated extrusion using multi-layered borders:
     - Top & Left edges: `1px solid #3b306b` (Highlight rim).
     - Bottom & Right edges: `2px solid #000000` (Recessed edge).
3. **Sunken/Carved State (Input Wells & Editor Gutters):**
   - Inset shadows that embed components into the chassis: `box-shadow: inset 3px 3px 0px #000000, inset -1px -1px 0px #2a2254`.
4. **Active/Pressed State:**
   - Physical compression: When triggered, components translate `2px` down and `2px` right (`transform: translate(2px, 2px)`), reducing the drop shadow to `2px 2px 0px #000000` or collapsing it completely.

## Shapes

The design system enforces an uncompromising zero-radius policy across all interactive and static geometry (`roundedness: 0`). 

- **Edge Definition:** Every box, card, dialog, chip, and tooltip features sharp 90-degree corners (`border-radius: 0px`).
- **Simulated Stepping:** To evoke classic CRT sprite framing, corner accents may feature stepped pixel cutouts constructed with raw CSS `clip-path` polygon cuts (e.g., 4px stepped corner notches) or hard-corner pseudo-element brackets (`[ ]`).
- **Borders:** All structural boundaries demand visible, continuous strokes of at least `2px` or `3px`, rendered in solid `#000000` or `#2a2254`.

## Components

### Buttons
- **Primary Arcade Action:**
  - Background: `#f43f5e`; text: `#0f0c20` or high-contrast `#ffffff`.
  - Border: `2px solid #000000`. Shadow: `4px 4px 0px #000000`.
  - Font: `Anybody`, uppercase, weight `800`.
  - Hover: Background flashes to `#fb7185`.
  - Active: Translates `+2px, +2px` with shadow reduced to `2px 2px 0px #000000`.
- **Secondary / Mana Action:**
  - Background: `#1b1638`; text: `#38bdf8`; border: `2px solid #38bdf8`.
  - Shadow: `3px 3px 0px #000000`.
- **Tertiary Utility:**
  - Background: `transparent`; text: `#f6ad55`; border: `2px solid #2a2254`.

### Input Fields & Editor Well
- **Writing Surface:**
  - Background: `#0f0c20`; text: `#e2e8f0`; border: `2px solid #2a2254`.
  - Shadow: `inset 3px 3px 0px #000000`.
  - Font: `Courier Prime`, size `1rem`.
  - Focus: Border shifts instantly to `#38bdf8` with an outer hard outline `2px solid #38bdf8`. Cursor is a solid blinking block (`width: 0.6em`).
- **Labeling:**
  - Monospaced tag docked to the top border frame: `[STATUS: DRAFT]`, tracking `0.1em`.

### Cards & Chassis Panels
- **Structure:**
  - Background: `#1b1638`; border: `2px solid #2a2254`.
  - Shadow: `4px 4px 0px #000000`.
- **Header Strip:**
  - Contrasting `#2a2254` top band with a pixel divider line (`border-bottom: 2px solid #000000`). Title set in `Anybody` with an interactive badge indicator.

### Chips & Stat Badges
- **Display:**
  - Height: `24px`; padding: `0 8px`; border-radius: `0px`.
  - Typography: `label-sm` (`Courier Prime`, bold, uppercase).
  - HP Badge: Background `#2a2254`, text `#f43f5e`, border: `1px solid #f43f5e`.
  - MP Badge: Background `#2a2254`, text `#38bdf8`, border: `1px solid #38bdf8`.
  - XP/Gold Badge: Background `#2a2254`, text `#ffcc00`, border: `1px solid #ffcc00`.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes:**
  - Square box (`18px x 18px`), `border: 2px solid #2a2254`, background `#0f0c20`.
  - Checked State: Fills with `#f43f5e`, displaying a stark centered `X` or solid square glyph in `#0f0c20`.
- **Radio Buttons:**
  - Diamond or square-in-square silhouette (never circles).
  - Selected state shows an inner un-blurred square point (`8px x 8px`) in `#38bdf8`.

### Lists & Navigation
- **Hierarchy:**
  - Monospaced indices prefixing each node (`01 //`, `02 //`, `03 //`).
  - Active Item: Padded with `#2a2254` background, bordered left with an assertive `4px solid #f43f5e` bar, text shifting to `#ffffff`.
- **Hover Marker:**
  - Prepend terminal prompt chevron (`> `) in `#ffcc00` immediately upon hover.

### Specialized Component: Boss Health / Wordcount Gauge
- Segmented meter frame with chunky `2px` black dividers separating block increments.
- Fill color interpolates from `#38bdf8` (mana/early draft) to `#22c55e` (target met) or `#f43f5e` (boss enraged/limit breached).