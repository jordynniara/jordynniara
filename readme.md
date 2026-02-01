# Jordyn Niara Parker - Portfolio Website

🌐 **Live Site:** [jordynniara.github.io](https://jordynniara.github.io)

A personal portfolio website showcasing my work as a UX Designer, Engineer, and Researcher. This site demonstrates the intersection of design and development, featuring interactive elements, thoughtful UI/UX decisions, and a custom design system.

## 🎨 About the Site

This portfolio serves as a comprehensive showcase of my professional journey, featuring:

- **Dual Resume System** - Toggle between UX Engineering and Software Engineering experiences
- **Interactive Projects Gallery** - Organized by type (Prototypes, Research, Analyses, Art)
- **Dynamic About Section** - Personal content highlighting my multifaceted approach to design and development
- **Contact Integration** - Direct email functionality with form validation
- **The Creativity Project** - [COMING SOON!] An exploration of AI's impact on human creativity

### Design Philosophy

The site embodies my belief that "context matters" - understanding not just what to build, but who uses it, how, where, and why. Every interaction is crafted to be useful, usable, and enjoyable.

## 🛠 Technical Specifications

### Core Technologies

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.3
- **Styling:** Tailwind CSS 4.0.0 with custom design system
- **Routing:** React Router 7.1.1
- **Language:** JavaScript (ES6+)

### Key Libraries & Tools

- **UI Components:**
  - Lucide React 0.468.0 (Icons)
  - React Markdown 9.0.2 (Markdown rendering)
  - Remark GFM 4.0.0 (GitHub Flavored Markdown)
  - Rehype Slug 6.0.0 (Heading anchor generation)

- **Forms & Email:**
  - EmailJS Browser 4.4.1 (Contact form integration)

- **Development:**
  - ESLint 9.17.0 (Code linting)
  - Vite Plugin React 4.3.4 (React fast refresh)

### Project Structure

```
jordynniara.github.io/
├── public/                      # Static assets
│   ├── projects/               # Project images and PDFs
│   └── resumes/                # Downloadable resume PDFs
├── src/
│   ├── assets/                 # Images, markdown content, project data
│   │   ├── images/            # Site images and mascots
│   │   ├── projects/          # Projects JSON data
│   │   ├── aboutContent/      # About page markdown
│   │   └── resumes/           # Resume markdown files
│   ├── components/            # Reusable React components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── carousel.jsx
│   │   ├── modal.jsx
│   │   ├── sticker.jsx
│   │   ├── navDrawer.jsx
│   │   └── ...
│   ├── layout/                # Layout components
│   │   ├── header.jsx
│   │   └── footer.jsx
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── CreativityProject.jsx
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & utilities
├── eslint.config.js
├── vite.config.js
└── package.json
```

## 🎯 Key Features

### Custom Design System

Built from scratch with Tailwind CSS, featuring:
- **Color Palette:** Wetsoil, Strawberry, Sky, Inchworm, Pebble
- **Typography:** Custom font stack (Sacramento, Playfair Display, Cutive Mono)
- **Component Library:** 50+ utility classes for consistency
- **Responsive Design:** Mobile-first approach with breakpoint system

### Interactive Elements

1. **Fidget Stickers** - Mascot stickers that subtly move opposite to mouse direction on hover
2. **Smooth Scroll Navigation** - Anchor links with smooth scrolling behavior
3. **Dynamic Resume Switching** - Toggle between UX and SWE experiences with synchronized navigation
4. **Image Carousels** - Auto-rotating project screenshots with manual controls
5. **Modal System** - Accessible modals for detailed content viewing

### Accessibility Features

- WCAG-compliant color contrast
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels and descriptions
- Focus management in modals and drawers

### Performance Optimizations

- Code splitting with React Router
- Lazy loading for images on Projects and About pages
- Smooth scroll with CSS `scroll-behavior`
- Optimized animations with CSS transforms
- Vite's fast build and HMR
- Efficient bundling with tree-shaking

## 🎨 Design Elements

### Custom Mascots

Three hand-drawn mascots (Inchworm, Sky, Strawberry) appear throughout the site, adding personality and visual interest.

### Notebook Aesthetic

Resume pages feature a lined notebook design with:
- Ruled lines background
- Red margin accent
- Paper texture effect

### Gradient Shimmer Effect

Logo and interactive elements use a custom shimmer animation for visual polish.

## 📝 Content Management

### Projects

Projects are managed through a JSON file (`src/assets/projects/projects.json`) with support for:
- Multiple project types (prototype, research, analysis, art)
- Image galleries with captions
- External links and PDF downloads
- Modal content for detailed descriptions

### Resumes

Dual resume system with:
- Markdown source files for easy editing
- Dynamic rendering with ReactMarkdown
- Automatic heading extraction for navigation
- PDF download functionality
- Synchronized table of contents

## 🚀 Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jordynniara/jordynniara.github.io.git

# Navigate to project directory
cd jordynniara.github.io

# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server with hot reload
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📦 Deployment

The site is deployed using GitHub Pages. Any push to the `main` branch automatically triggers a deployment.

### Manual Deployment

```bash
# Build and deploy
npm run build
# Push dist folder to gh-pages branch
```

## 🎓 Lessons Learned

This project demonstrates:

1. **Design System Implementation** - Creating and maintaining a cohesive design system with utility classes
2. **Component Architecture** - Building reusable, composable React components
3. **State Management** - Managing complex UI state without external libraries
4. **Responsive Design** - Mobile-first approach with thoughtful breakpoints
5. **Performance** - Optimizing for fast load times and smooth interactions
6. **Accessibility** - Building inclusive experiences from the ground up
7. **Content Strategy** - Structuring content for easy maintenance and scalability

## 📄 License

© 2026 Jordyn Niara Parker. All rights reserved.

## 📧 Contact

- **Email:** jordynniara@gmail.com
- **GitHub:** [@jordynniara](https://github.com/jordynniara)
- **LinkedIn:** [jordynniara](https://linkedin.com/in/jordynniara)

---

Built with ❤️ and a commitment to accessible, user-centered design.
