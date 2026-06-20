---
name: Lucid Indigo
colors:
  surface: '#f8f9ff'
  surface-dim: '#dbd8ec'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#e5eeff'
  surface-container-high: '#e9e6fa'
  surface-container-highest: '#e3e0f4'
  on-surface: '#1b1a28'
  on-surface-variant: '#464555'
  inverse-surface: '#302f3e'
  inverse-on-surface: '#f2efff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#1e00a9'
  on-primary: '#ffffff'
  primary-container: '#3525cd'
  on-primary-container: '#b1afff'
  inverse-primary: '#c3c0ff'
  secondary: '#016a61'
  on-secondary: '#ffffff'
  secondary-container: '#9defe3'
  on-secondary-container: '#0d6f66'
  tertiary: '#6a001c'
  on-tertiary: '#ffffff'
  tertiary-container: '#94002b'
  on-tertiary-container: '#ff9ba2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#a0f1e6'
  secondary-fixed-dim: '#84d5ca'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#f8f9ff'
  on-background: '#1b1a28'
  surface-variant: '#e3e0f4'
  indigo-gradient-start: '#3525cd'
  indigo-gradient-end: '#4f46e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  base: 4px
  sm: 8px
  md: 16px
  lg: 24px
  gutter: 24px
  margin: 32px
  xl: 40px
  2xl: 64px
---

## Brand & Style

Lucid Indigo is a "Luminous Modern" design system that blends corporate reliability with the ethereal qualities of Glassmorphism. It is designed for high-end SaaS, component libraries, and developer tools where clarity, modularity, and technical precision are paramount.

The aesthetic is characterized by high-key lighting, "electric" indigo accents, and deep structural transparency. It avoids heavy shadows in favor of backdrop blurs and subtle tonal layering, creating a UI that feels lightweight, breathable, and physically layered without appearing dated or heavy.

## Colors

The palette is anchored by a vibrant **Electric Indigo** (#3525cd), used for primary actions, branding, and active states. The background strategy uses a "Cool White" (#f8f9ff) which prevents the high-key interface from feeling sterile.

- **Primary & Gradients**: Use a linear gradient (135deg) from Primary to a lighter Indigo (#4f46e5) for hero headings and significant calls to action.
- **Surface Strategy**: Instead of greys, the system uses "Tinted Neutrals"—extremely desaturated blues and purples—for containers and outlines to maintain a cohesive chromatic temperature.
- **Accents**: Secondary (Teal) and Tertiary (Crimson) are reserved for specialized feedback or data visualization, keeping the main interface strictly monochromatic-indigo.

## Typography

The system utilizes **Plus Jakarta Sans** for display and headings to provide a modern, slightly rounded, and approachable character. **Inter** is used for all functional text, body copy, and labels to ensure maximum legibility and a systematic, technical feel.

- **Headings**: Feature tight letter-spacing and bold weights to contrast against the airy layout.
- **Labels**: High-weight (600) Inter is used for button text and navigation to ensure they stand out even at smaller sizes.
- **Body**: Generous line heights (1.5-1.6) are maintained to enhance readability in documentation-heavy contexts.

## Layout & Spacing

The layout utilizes a **12-column Fluid Grid System** for desktop, scaling down to 8 columns for tablets and 4 columns for mobile. 

- **Gutter Strategy**: A consistent 24px gutter is used to ensure significant whitespace between grid items.
- **Standard Margins**: Page-level padding starts at 32px (margin) and increases to 64px (2xl) on ultra-wide screens to maintain a centered, readable content column.
- **Rhythm**: A 4px baseline grid governs all internal component spacing (padding/margins).

## Elevation & Depth

Elevation is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

- **Glass Panels**: Use `rgba(255, 255, 255, 0.7)` background with a `12px` backdrop-blur and a `1.5px` semi-transparent white border.
- **Glow Shadows**: Instead of black shadows, use tinted Indigo shadows (`rgba(79, 70, 229, 0.08)`) with a high blur radius (40px) to create a "lifting" effect that feels light-emissive.
- **Surface Tiering**: Background (Level 0), Sidebar/Header (Level 1 - Glass), and Cards (Level 2 - Hover states).

## Shapes

The system uses a **Rounded** (Level 2) shape language to complement the friendly nature of the Plus Jakarta Sans typeface.

- **Standard Radius**: 0.5rem (8px) for buttons and input fields.
- **Large Radius**: 0.75rem (12px) to 1.5rem (24px) for cards, modals, and glass panels.
- **Active Indicators**: Tab indicators and progress bars use a 2px top-roundedness to create soft but precise visual anchors.

## Components

- **Buttons**:
  - **Primary**: Solid Indigo with a subtle hover brightness increase and 95% scale active state.
  - **Secondary**: Glass-style with a 1.5px Primary border and semi-transparent white background.
- **Navigation**: Sidebars use vertical stacks with `rounded-xl` hover states in `surface-container-high`. Active items utilize a low-opacity Primary background (`primary/20`) and filled icons.
- **Cards**: Feature a fixed-height media area (`h-48`) followed by a padded content section. Cards should "float" on hover using a negative Y-transform (-4px).
- **Tabs**: Bottom-aligned 2px solid Indigo stroke for active states, with navigation text shifting from `on-surface-variant` to `primary`.
- **Inputs**: Use `surface-container-low` backgrounds with a `1.5px` border that transitions to `primary` on focus.