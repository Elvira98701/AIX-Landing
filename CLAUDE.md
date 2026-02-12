# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIX Landing Page - a static landing website for an Avito automation service. Built with SASS (indented syntax) and vanilla HTML (no JavaScript framework).

## Build Commands

```bash
# SASS compilation - production (minified)
npx sass sass/style.sass css/style.css --style=compressed

# SASS compilation - development (expanded)
npx sass sass/style.sass css/style.dev.css --style=expanded

# Watch mode for development
npx sass --watch sass/style.sass:css/style.css

# HTML minification
npx html-minifier index.html -o index.min.html --collapse-whitespace
```

Note: No package.json exists - commands run via npx directly.

## Architecture

### SASS Structure

Modular SASS (indented syntax) with section-based organization in `sass/` directory:

- `style.sass` - Main entry point, imports all partials
- `_variables.sass` - Design tokens (colors, breakpoints, spacing, transitions)
- `_reset.sass` - CSS reset and base styles
- `_typography.sass` - Text styles
- `_components.sass` - Reusable components (buttons, containers)
- Section files: `_header.sass`, `_hero.sass`, `_partners.sass`, `_benefits.sass`, `_tools.sass`, `_testimonials.sass`, `_pricing.sass`, `_footer.sass`

### Design System (from _variables.sass)

**Colors:**
- `$color-black: #0A0A0A` (main background)
- `$color-primary: #FF4900` (orange accent - CTAs)
- `$color-success: #2EBE62` (green - status)
- `$color-text: #FFFFFF`

**Breakpoints:** `$breakpoint-sm: 576px`, `$breakpoint-md: 768px`, `$breakpoint-lg: 992px`, `$breakpoint-xl: 1200px`, `$breakpoint-xxl: 1440px`

**Container:** max-width 1440px, 150px horizontal padding

### Naming Conventions

**BEM for CSS classes:**
- Block: `.header`, `.hero`, `.benefits`
- Element: `.header__container`, `.hero__title`
- Modifier: `.btn--primary`, `.btn--lg`

### Visual Patterns

- **Glassmorphism:** `backdrop-filter: blur()` with semi-transparent backgrounds
- **Hover effects:** `transform: translateY(-4px)` lift on cards
- **Glow effects:** Radial gradients for background glows
- **Transitions:** Use SASS variables (`$transition-fast`, `$transition-base`, `$transition-slow`)

## Important Notes

- Images currently use temporary Figma API URLs (7-day expiry) - need local hosting for production
- Content is in Russian
- Fonts loaded from Google Fonts: Montserrat (headings), Inter (body), Unbounded (accent)
- Browser support: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
