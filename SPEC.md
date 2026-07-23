# MoonBar Website Specification

## 1. Concept & Vision

MoonBar is an outdoor lounge bar in Pejë, Kosovo — a premium nightlife destination where summer nights come alive. The website embodies luxury nightlife meets Mediterranean warmth, creating an immersive digital experience that makes visitors feel the ambiance before they arrive. Every interaction should whisper "I want to be there tonight."

The aesthetic channels high-end beach clubs in Mykonos, rooftop lounges in Dubai, and the editorial elegance of luxury fashion houses — dark, cinematic, with moments of golden warmth and subtle neon accents.

## 2. Design Language

### Aesthetic Direction
**Reference Point**: A fusion of Apple-level polish, luxury hotel digital experiences, and premium nightclub websites. Think Edition Hotels meets Coya Club Dubai meets Systemmotion branding.

### Color Palette
```
Primary Background:    #0a0a0a (Deep Black)
Secondary Background:  #121212 (Dark Charcoal)
Tertiary Background:   #1a1a1a (Soft Black)
Surface:              #181818 (Card Surface)

Accent Primary:       #8b5cf6 (Violet/Purple)
Accent Secondary:      #6366f1 (Indigo)
Accent Warm:           #d4af37 (Warm Gold)
Accent Neon:           #a855f7 (Bright Purple)
Accent Glow:           #c084fc (Soft Purple Glow)

Text Primary:         #ffffff (Pure White)
Text Secondary:        #a1a1aa (Muted Gray)
Text Subtle:            #71717a (Subtle Gray)

Border:               #27272a (Dark Border)
Glass:                rgba(255,255,255,0.05)
Glass Border:          rgba(255,255,255,0.1)
```

### Typography
```
Display/Headlines: "Clash Display", "Inter", system-ui (700-800 weight)
Headings:          "Inter", system-ui (600-700 weight)
Body:              "Inter", system-ui (400-500 weight)
Captions:          "Inter", system-ui (300-400 weight)

Hero:              5rem-8rem, tracking tight, weight 700
H1:                3.5rem-4.5rem, tracking tight
H2:                2rem-3rem, tracking tight
H3:                1.5rem-2rem
Body:              1rem-1.125rem, leading relaxed
Caption:           0.875rem, leading relaxed
```

### Spatial System
```
Base unit:         4px
Section padding:   120px (desktop) / 80px (tablet) / 60px (mobile)
Container max:     1400px
Card padding:      24px-32px
Gap small:         16px
Gap medium:        24px-32px
Gap large:         48px-64px
Border radius:     16px (cards) / 24px (large cards) / 9999px (pills)
```

### Motion Philosophy
All animations are **purposeful and refined** — they guide attention, create hierarchy, and add life without overwhelming.

```
Timing Functions:
  - Default ease:    cubic-bezier(0.4, 0, 0.2, 1) — smooth deceleration
  - Enter:           cubic-bezier(0, 0, 0.2, 1) — fast start, gentle end
  - Exit:            cubic-bezier(0.4, 0, 1, 1) — quick start, slow end
  - Spring:          cubic-bezier(0.34, 1.56, 0.64, 1) — subtle bounce

Durations:
  - Micro:           150ms-200ms (hovers, toggles)
  - Standard:        300ms-400ms (reveals, transitions)
  - Slow:            500ms-700ms (section animations)
  - Cinematic:       1000ms-1500ms (hero reveals, full transitions)

Key Animations:
  - Scroll reveal:   Fade up (20px) + blur clear + stagger 100ms
  - Image reveal:   Scale 1.1 → 1 + fade + mask reveal
  - Card hover:      translateY(-8px) + shadow increase + subtle glow
  - Text reveal:     Clip-path reveal or blur-from-below
  - Parallax:        Subtle (0.2-0.4 rate) for depth
  - Floating:        Continuous gentle bob (3-5s cycle)
  - Border glow:     Pulsing gradient border on hover
```

### Visual Assets
```
Icons:             Lucide React (line style, 1.5px stroke)
Images:            High-quality venue photography, dark moody edits
Decorative:        Gradient orbs, noise texture overlay, blur spots
```

## 3. Layout & Structure

### Page Flow
```
1. HERO (100vh)           — Immediate impact, full-screen cinematic
2. ABOUT (auto)           — Storytelling, breathing room
3. EXPERIENCE (auto)       — Feature cards, visual interest
4. GALLERY (auto)         — Visual proof, interactive
5. MENU (auto)            — Practical information, elegant
6. EVENTS (auto)          — FOMO, excitement
7. INSTAGRAM (auto)       — Social proof, community
8. CONTACT (auto)         — Action, location
9. FOOTER (auto)          — Navigation, legal
```

### Responsive Strategy
```
Mobile-first breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

Hero: Full-bleed on all, typography scales with clamp()
Grid: 1 col → 2 col → 3/4 col progression
Cards: Stack on mobile, grid on tablet+
Navigation: Hamburger menu below lg
```

### Structural Interest
Each section has a unique layout rhythm — no repeated grids. Hero is full cinematic, About uses asymmetric image-text, Experience is card-based with hover interactions, Gallery is masonry with no visible grid lines, Menu is minimal with categories, Events use timeline-style cards, Instagram is horizontal scroll, Contact is split layout.

## 4. Features & Interactions

### Navigation
- **Initial state**: Transparent, white text, logo visible
- **On scroll**: Blur backdrop (20px), subtle dark background (80% opacity), border-bottom appears
- **Hover on links**: Underline slides in from left (scaleX animation)
- **Active section**: Highlighted with accent color
- **Mobile menu**: Full-screen overlay, staggered link animation, blur background

### Hero Section
- **Background**: Full-bleed image with subtle parallax (rate 0.3)
- **Overlay**: Gradient from transparent to 60% black at bottom
- **Headline**: Reveals word by word with blur transition, 100ms stagger
- **Subtext**: Fades in after headline (400ms delay)
- **CTA buttons**: Slide up + fade, 600ms total delay
- **Scroll indicator**: Pulsing chevron animation, fades on scroll
- **On load**: Background scales from 1.05 to 1 (Ken Burns effect, 8s)

### About Section
- **Layout**: Large image (60%) + text content (40%) on desktop, stacked on mobile
- **Image reveal**: Clip-path reveal from bottom, triggered on scroll
- **Text**: Staggered fade-in for each paragraph
- **Accent line**: Animated width expansion on scroll

### Experience Cards
- **Default**: Glassmorphism card with icon, title, short description
- **Hover**: Card lifts (translateY -8px), glow border appears, icon scales 1.1
- **Stagger animation**: Cards appear in sequence on scroll (100ms stagger)
- **Categories**: Cocktails, Shisha, Music, Events, Relaxation, Friends, Summer Nights

### Gallery
- **Layout**: CSS Grid masonry (3 columns desktop, 2 tablet, 1 mobile)
- **Image style**: Rounded corners (16px), subtle shadow
- **Reveal**: Each image fades + scales in on scroll
- **Hover**: Scale 1.03, overlay with gradient, zoom icon appears
- **Lightbox**: Click opens full-screen viewer with navigation arrows, close on escape/click outside
- **Categories**: All, Venue, Cocktails, Events (filter buttons with pill style)

### Menu Section
- **Layout**: Vertical tabs on left (desktop), horizontal scroll tabs (mobile)
- **Categories**: Cocktails, Beer, Soft Drinks, Energy Drinks, Food, Shisha
- **Items**: Name, description, price — clean card layout
- **Hover**: Subtle background highlight, slight scale
- **Empty state**: "Coming soon" with elegant typography

### Events Section
- **Layout**: Featured event large at top, smaller cards below
- **Cards**: Date badge, event name, description, "Learn More" link
- **Featured animation**: Gradient border pulse on featured card
- **Timeline dots**: Animated line connecting events
- **Saturday DJ badge**: Special gold accent pill
- **Hover**: Card lifts, border glows

### Instagram Section
- **Layout**: Horizontal scroll container (snap)
- **Cards**: Image preview, overlay with like count, Instagram icon
- **Hover**: Overlay darkens, scale 1.02
- **CTA**: "Follow us @moonbarpeje" with link

### Contact Section
- **Layout**: Split (info left, map right) on desktop
- **Info**: Opening hours, phone, address, social links
- **Map**: Interactive Google Maps embed with custom dark styling
- **Animations**: Info items stagger in, map fades in

### Footer
- **Layout**: Simple centered on mobile, spread on desktop
- **Content**: Logo, nav links, social icons, copyright
- **Hover states**: Links scale slightly, icons have color transitions

## 5. Component Inventory

### Button
- **Primary**: Solid accent background, white text, rounded-full, shadow
- **Secondary**: Transparent with border, white text
- **Ghost**: No background/border, accent text
- **States**: Hover (brightness + scale), Active (scale 0.98), Disabled (opacity 0.5)
- **Animation**: Scale 1.02 on hover, subtle shadow increase

### Card (Base)
- **Background**: Surface color with glass effect
- **Border**: 1px glass border on hover
- **Shadow**: 0 4px 24px rgba(0,0,0,0.3) default, 0 8px 40px on hover
- **Radius**: 16px-24px
- **Hover**: translateY(-8px), border glow

### Glass Panel
- **Background**: rgba(255,255,255,0.03)
- **Border**: 1px rgba(255,255,255,0.08)
- **Backdrop-filter**: blur(12px)
- **Hover**: Background slightly lighter

### Section Title
- **Structure**: Overline (small caps) + main title + optional subtitle
- **Alignment**: Center on desktop, left on mobile
- **Animation**: Fade + slide up on scroll

### Image Reveal Container
- **Wrapper**: Overflow hidden
- **Animation**: Scale 1.1 → 1 while opacity 0 → 1
- **Mask**: Optional gradient mask for fade edges

### Navbar
- **Height**: 80px desktop, 64px mobile
- **States**: transparent → blurred dark on scroll
- **Logo**: Left aligned
- **Links**: Center (desktop) or hidden (mobile)
- **CTA**: Right aligned
- **Mobile trigger**: Hamburger icon, animates to X

### Mobile Menu
- **Full screen overlay with blur background
- **Links**: Large, centered, staggered animation
- **Social icons**: Bottom of screen
- **Animation**: Links slide up staggered, overlay fades in

### Lightbox
- **Backdrop**: Black 90% opacity
- **Image**: Max 90vw/90vh, centered
- **Controls**: Arrows on sides, close button top-right
- **Animation**: Fade in backdrop, scale in image
- **Keyboard**: Escape to close, arrows to navigate

## 6. Technical Approach

### Stack
```
Framework:         Next.js 14 (App Router)
Language:          TypeScript
Styling:           Tailwind CSS 3.4
Animation:         Framer Motion 11
Smooth Scroll:     Lenis
Icons:             Lucide React
Fonts:            Inter (Google Fonts) + Clash Display fallback
Images:            Next/Image with blur placeholder
Maps:              Google Maps Embed API
```

### Architecture
```
/app
  /layout.tsx          — Root layout with providers
  /page.tsx            — Home page (all sections)
  /globals.css         — Tailwind + custom CSS
/components
  /ui                   — Base components (Button, Card, etc.)
  /sections             — Page sections (Hero, About, etc.)
  /layout               — Navbar, Footer, etc.
/lib
  /data                 — Menu items, events, gallery data
  /hooks                — Custom hooks (useScrollProgress, etc.)
  /utils                — Helpers, cn utility
/public
  /images               — Optimized images
```

### Data Structure
```typescript
// Menu items
interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: MenuCategory;
  image?: string;
}

// Events
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  type: 'dj' | 'singer' | 'special' | 'regular';
  featured?: boolean;
}

// Gallery
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'venue' | 'cocktails' | 'events' | 'food';
}
```

### Performance Targets
- Lighthouse: 90+ all categories
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Image optimization: WebP, lazy loading, blur placeholder

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation for lightbox/menu
- Reduced motion support via `prefers-reduced-motion`
- Color contrast WCAG AA compliant