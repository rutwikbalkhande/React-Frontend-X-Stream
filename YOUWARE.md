# AKSHRONIX Technology - Modern JavaScript React Application

This is a modern React application built with vanilla JavaScript (no TypeScript) for AKSHRONIX Technology, providing cutting-edge technology solutions and innovation-driven services. Built with React 18, Vite, and Tailwind CSS.

## Project Status

- **Project Type**: React + JavaScript Modern Web Application (No TypeScript)
- **Brand**: AKSHRONIX Technology - Tech Innovation Platform
- **Entry Point**: `src/main.jsx` (React JavaScript application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)
- **File Format**: All .jsx/.js files (converted from TypeScript)

## Design System - Fixed Colors & Typography

### Color Palette
- **Primary Action**: `#06B6D4` (Cyan-500) - CTAs, buttons, links
- **Primary Gradient**: Blue-600 to Cyan-500 - Logo, premium elements
- **Secondary Blue**: `#3B82F6` (Blue-500) - Accents
- **Logo Orange**: `#f87416` - AX badge text color
- **Logo Pink**: `rgb(189, 25, 62)` - AKSHRONIX text color
- **Dark Background**: `#111827` (Gray-900) - Footer
- **Light Background**: `#F3F4F6` (Gray-50) - Sections
- **Text Dark**: `#111827` (Gray-900) - Headers
- **Text Light**: `#4B5563` (Gray-600) - Body text
- **Accent Green**: `#10B981` (Green-500) - Trust indicators
- **Header Background**: `#fdfdfd` - Navigation background
- **Dropdown Background**: `#ffffff` - Menu items with hover effects

### Typography
- **Font Family**: System sans-serif (Inter, Poppins fallback)
- **Headings**: Font weight 700 (Bold)
- **Body Text**: Font weight 400 (Normal)
- **Links**: Font weight 500 (Medium) with cyan color
- **Logo Text**: Italic style with bold weight

## Project Architecture

### Directory Structure
```
src/
├── components/
│   ├── Header.jsx          # Navigation header with dropdown menus (JavaScript)
│   ├── Hero.jsx            # Hero section with technology messaging
│   ├── Stats.jsx           # Key metrics section
│   ├── Services.jsx        # Product/service cards
│   ├── WhyChooseUs.jsx     # Feature highlights
│   ├── Testimonials.jsx    # Customer stories and reviews
│   ├── CTA.jsx             # Call-to-action section
│   └── Footer.jsx          # Footer with links and newsletter
├── pages/
│   └── Home.jsx            # Landing page - combines all components
├── assets/
│   ├── youware-bg.png      # Background asset
│   └── family-photo.png    # Hero section image
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

### Key Components

**Header** (JavaScript/JSX - Clickable Dropdowns)
- Sticky navigation with AKSHRONIX logo (AX badge with orange text, italic style)
- **Desktop Menu Items**:
  - Home - Navigation link
  - **Products** - Clickable dropdown menu with:
    - Life Insurance
    - Health Insurance
    - Car Insurance
  - **Claims** - Clickable dropdown menu with:
    - Submit Claim
    - Track Claim
  - About - Navigation link
  - Contact - Navigation link
- Search icon, Login, and Get Started buttons
- **Mobile Menu**: Collapsible hamburger menu with expandable dropdowns for Products and Claims
- State Management: Uses React `useState` hook for `productsOpen` and `claimsOpen`
- **FULLY CLICKABLE**: Both desktop and mobile dropdowns toggle on click
- Responsive design with smooth transitions and hover effects

**Hero**
- Trust badge: "Trusted by 500,000+ customers"
- Main headline: "Technology Innovation Unleashed"
- Supporting copy about cutting-edge solutions
- Two CTAs: "Get Started" and "Explore Solutions"
- Security indicators: 100% Secure, Instant Approval
- Right side: Feature image with gradient overlay

**Stats**
- 4-column layout showing key metrics
- 500K+ Happy Customers, ₹1000Cr+ Claims Settled, 98% Satisfaction Rate, 24/7 Support Available

**Services**
- 3 service cards (Life, Car, Health Insurance)
- Icon-based visual distinction
- Description and "Learn More" link per card

**WhyChooseUs**
- 4 feature cards in grid layout
- Icons: Clock (Instant), Shield (Secure), Award (Best), Chart (Easy)
- Concise benefit descriptions

**Testimonials**
- 3 customer story cards with 5-star ratings
- Customer name, role, and avatar
- Responsive grid layout

**CTA**
- Gradient background (Blue to Cyan)
- Main headline: "Ready to Get Protected?"
- Call-to-action button

**Footer**
- Dark background (Gray-900)
- 4 columns: Brand, Products, Company, Newsletter
- Social media links
- Certification badges

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Build output**: `dist/` directory with optimized production bundle

## Recent Updates (JavaScript Conversion & Dropdown Implementation)

### TypeScript to JavaScript Conversion
- Converted all `.tsx` files to `.jsx` files
- Converted all `.ts` files to `.js` files
- Updated vite.config.ts → vite.config.js
- Updated main entry point from main.tsx → main.jsx
- All React components now use default exports with JavaScript arrow/function syntax
- Removed TypeScript type annotations (components use native JSDoc if needed)

### Header Dropdown Implementation (Fully Clickable)
- Products dropdown with 3 insurance types (CLICKABLE)
- Claims dropdown with 2 claim options (CLICKABLE)
- Desktop dropdowns with smooth toggle animations
- Mobile dropdowns with expandable sections
- ChevronDown icon that rotates on menu toggle
- Hover effects with cyan background and text color
- Full keyboard and mouse interaction support

### Logo Styling
- AX badge: Orange text (#f87416) with italic, bold style
- AKSHRONIX text: Pink color (rgb(189, 25, 62)) with italic style
- Navigation background: #fdfdfd for subtle contrast

### Design Specifications

### Responsive Design
- Mobile-first approach with breakpoints: sm (640px), md (768px), lg (1024px)
- All sections stack vertically on mobile
- Header menu collapses to hamburger on small screens
- Dropdowns expand inline on mobile with proper indentation

### Dropdown Styling
- Desktop: Absolute positioned, 200px width (w-48)
- Background: White with border and shadow
- Hover: Cyan background (#f3f7ff equivalent via hover:bg-cyan-50)
- Rounded corners: lg (rounded-lg)
- Border: 1px solid gray-200
- Z-index: 10 to appear above other content
- **Fully clickable**: onClick handlers toggle visibility

### Spacing & Layout
- Sections use max-w-7xl container with padding
- Consistent padding: py-16 md:py-24 for sections
- Gap spacing: gap-8 for card grids, space-y for stacks
- Dropdown items: px-4 py-2 padding with text-sm font-medium

### Component Styling
- Cards: Border, rounded-2xl, hover shadow effects
- Buttons: Rounded corners (rounded-lg), smooth transitions
- Icons: From lucide-react library (20-40px sizes)
- Images: Rounded corners with gradient overlays
- Logo: 10x10 with gradient background, responsive sizing

## Key Features Implemented

- **Pure JavaScript**: All files now use .jsx/.js (zero TypeScript)
- **Modern Logo**: AX badge with gradient (Blue to Cyan), orange italic text
- **Header Navigation**: Fixed sticky header with responsive mobile menu
- **Clickable Dropdown Menus**: 
  - Products dropdown with 3 insurance types (FULLY INTERACTIVE)
  - Claims dropdown with 2 claim options (FULLY INTERACTIVE)
  - Smooth animations and transitions on click
  - Full mobile support with expandable sections
- **Hero Section**: Eye-catching landing with tech-focused messaging
- **Statistics**: Key metrics displayed in responsive grid
- **Product/Service Cards**: Multiple service offerings with icons
- **Feature Highlights**: Four key value propositions
- **Social Proof**: Customer testimonials with ratings
- **Call-to-Action**: High-visibility conversion section
- **Footer**: Comprehensive links, newsletter signup, social media

## Tech Stack

- **React**: 18.3.1 - UI library
- **JavaScript**: Native JavaScript/JSX (no TypeScript)
- **Vite**: 7.0.0 - Build tool
- **Tailwind CSS**: 3.4.17 - Styling
- **Lucide React**: Icon library (ChevronDown for dropdown animations)

## Build Configuration

- **Vite Config**: `vite.config.js` - Standard React JavaScript configuration
- **Tailwind Config**: `tailwind.config.js` - Default theme with custom extensions
- **PostCSS Config**: `postcss.config.js` - CSS processing
- **index.html**: References `src/main.jsx` (updated from main.tsx)

## State Management

### Header Component State (JavaScript/JSX)
- `isOpen` - Controls mobile menu visibility
- `productsOpen` - Controls Products dropdown visibility (desktop & mobile) - CLICKABLE
- `claimsOpen` - Controls Claims dropdown visibility (desktop & mobile) - CLICKABLE

All state managed with React `useState` hook for simplicity.

## Notes for Future Development

1. **Dropdown Menu Links**: Currently placeholder (#). Update with actual routing when needed
2. **JavaScript Only**: All files are JavaScript/JSX. No TypeScript - simpler and lighter
3. **Logo Placement**: Currently in Header component, feel free to add to other sections
4. **Colors**: All branding colors are Tailwind CSS colors or custom colors
5. **Data**: All content is hard-coded. Consider moving to a data file or CMS for easier updates
6. **Components**: Each section is a separate component for modularity and reusability
7. **Images**: Feature images in src/assets/. Replace with actual product images as needed
8. **Mobile Dropdowns**: Fully functional and expandable on all screen sizes

## Production Build

The project builds to `dist/` with optimized output:
- Minified CSS: ~16.92 kB (gzip: 3.70 kB)
- Minified JavaScript: ~185.78 kB (gzip: 53.49 kB)
- Optimized asset delivery with fingerprinting
- No TypeScript overhead - pure JavaScript efficiency

## Support & Branding

For updates to design system, colors, logo, dropdowns, or layout specifications, refer to project YOUWARE.md guidelines. All brand assets are stored in src/assets/ and public/ directories.

### Dropdown Interaction Quick Reference
- **Desktop**: Click "Products" or "Claims" to toggle dropdown visibility
- **Mobile**: Click button to expand/collapse menu items
- **Responsive**: Dropdowns work seamlessly across all screen sizes
