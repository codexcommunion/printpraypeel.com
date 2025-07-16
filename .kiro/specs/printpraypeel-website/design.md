# Design Document

## Overview

PrintPrayPeel.com is a static website built with Docusaurus that serves as a gateway for the Print, Pray, Peel spiritual practice. The site integrates with an existing "printable-collection" GitHub repository to provide free downloadable prayer stickers and connects users to a community focused on faith sharing through physical sticker distribution.

The design prioritizes simplicity, accessibility, and spiritual reverence while maintaining a welcoming tone for both newcomers and returning users. The site operates entirely as a static deployment on GitHub Pages, requiring no backend services or user authentication.

## Architecture

### Technology Stack
- **Framework**: Docusaurus v3 (React-based static site generator)
- **Deployment**: GitHub Pages with automated CI/CD
- **Content Integration**: Git submodules or automated sync with "printable-collection" repository
- **Content Structure**: MDX files for individual sticker pages with frontmatter metadata
- **Theming**: @codexcommunion/liturgical-theme NPM package for liturgical colors
- **Build Process**: Node.js with automated GitHub Actions workflow

### Site Structure (Docusaurus-Compliant)
```
/
├── src/pages/index.tsx (Homepage - landing/onboarding)
├── docs/ (Docusaurus docs for sticker library)
│   ├── stickers/
│   │   ├── featured/
│   │   │   └── [sticker-name].mdx (featured sticker pages)
│   │   ├── categories/
│   │   │   └── [category]/[sticker-name].mdx (categorized stickers)
│   │   └── index.md (sticker library overview)
│   ├── how-it-works.md (process explanation)
│   ├── community.md (sharing guidelines and stories)
│   └── about.md (mission and background)
├── static/ (static assets - images, PDFs)
│   ├── stickers/ (sticker images and PDFs)
│   └── img/ (site images)
└── sidebars.ts (Docusaurus sidebar configuration)
```

### Content Integration Strategy
- **MDX-Based Content**: Each sticker is a standalone MDX file with frontmatter for metadata and categorization
- **Integrated Prayer-Sticker Pages**: Each sticker page contains topically matched prayers (e.g., Mary sticker with Hail Mary prayer)
- **Frontmatter-Driven Organization**: Categories, tags, and featured status managed through frontmatter metadata
- **Static Asset Management**: Optimized image processing for web display and PDF serving

## Components and Interfaces

### Homepage Components

#### Hero Section
- **Purpose**: First-time visitor onboarding (Requirement 1)
- **Elements**: 
  - Clear headline explaining PrintPrayPeel concept
  - Visual demonstration of Print, Pray, Peel process
  - Immediate CTA to featured stickers
- **Design Rationale**: Addresses the critical need for newcomers to quickly understand the concept

#### Featured Stickers Grid
- **Purpose**: Immediate access to popular content (Requirements 1, 2)
- **Elements**:
  - 3-6 curated sticker previews
  - High-quality thumbnail images
  - Direct download links
- **Design Rationale**: Reduces friction for first-time users while providing value to returning users

#### How It Works Preview
- **Purpose**: Process explanation teaser (Requirement 4)
- **Elements**:
  - 3-step visual process (Print, Pray, Peel)
  - Link to detailed guide
- **Design Rationale**: Provides immediate clarity without overwhelming the homepage

### Sticker Library Components

#### Sticker Grid Layout
- **Purpose**: Browsing and discovery (Requirement 2)
- **Elements**:
  - Responsive grid (3-4 columns desktop, 2 mobile)
  - Thumbnail previews with titles
  - Category filtering via static pages
- **Design Rationale**: Simple, familiar interface pattern that works across devices

#### Sticker Detail Page (MDX-based)
- **Purpose**: Integrated prayer-sticker experience with download access (Requirements 3, 4)
- **Elements**:
  - Large preview image
  - Topically matched prayer content (e.g., Mary sticker with Hail Mary prayer)
  - Multiple format download buttons (Letter, A4)
  - Related stickers suggestions based on frontmatter tags
- **Design Rationale**: Single-page experience combining spiritual preparation with sticker download

### MDX Content Components

#### Frontmatter-Driven Categorization
- **Purpose**: Organize stickers without complex data structures (Requirements 2, 3)
- **Elements**:
  - Category tags for filtering and organization
  - Featured flag for homepage display
  - Metadata for titles, descriptions, and download links
- **Design Rationale**: Simple file-based organization that scales easily with content growth

