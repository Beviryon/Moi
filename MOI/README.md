# Beviryon Issanga Ngoulou - Portfolio Website

A modern, revolutionary portfolio website built with Nuxt 3, featuring smooth animations, dark mode, and a comprehensive blog system.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark mode by default
- **Smooth Animations**: GSAP-powered scroll animations and micro-interactions
- **Responsive**: Fully responsive design for all devices
- **Blog System**: Markdown-based blog with Nuxt Content
- **SEO Optimized**: Complete SEO setup with meta tags and sitemap
- **GDPR Compliant**: Cookie consent and privacy policy
- **Performance**: Optimized for speed and performance

## 🛠️ Technologies Used

- **Frontend**: Nuxt 3 (Vue.js 3 with Composition API)
- **Styling**: TailwindCSS with custom theme
- **Animations**: GSAP + Framer Motion Vue
- **Content**: Nuxt Content (Markdown-based blog)
- **Icons**: Heroicons
- **Fonts**: Inter & Poppins (Google Fonts)
- **TypeScript**: Full TypeScript support

## 📁 Project Structure

```
├── assets/              # Uncompiled assets (CSS, images)
├── components/          # Vue components
├── composables/         # Vue composables
├── content/             # Blog content (Markdown)
├── layouts/             # Layout components
├── pages/               # File-based routing
├── plugins/             # Nuxt plugins
├── public/              # Static assets
└── nuxt.config.ts       # Nuxt configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/beviryon/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content

- **Blog posts**: Add markdown files in `content/blog/`
- **Skills**: Update the skills array in `pages/index.vue`
- **Projects**: Update the projects array in `pages/index.vue`
- **Experience**: Update the experiences array in `pages/index.vue`

### Animations

Animations are handled by GSAP and can be customized in `composables/useAnimations.ts`.

## 📱 Pages

- **Home** (`/`) - Hero section, skills, projects, and experience
- **Blog** (`/blog`) - Blog listing page
- **Blog Post** (`/blog/[slug]`) - Individual blog post
- **Contact** (`/contact`) - Contact form with GDPR compliance
- **Privacy** (`/privacy`) - Privacy policy page

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NUXT_PUBLIC_SITE_URL=https://beviryon.dev
```

### SEO Configuration

SEO settings are configured in `nuxt.config.ts` and can be customized per page using `useHead()`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run generate`
2. Deploy the `dist` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Node.js or static hosting.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Beviryon Issanga Ngoulou**
- Website: [beviryon.dev](https://beviryon.dev)
- Email: contact@beviryon.dev
- GitHub: [@beviryon](https://github.com/beviryon)
- LinkedIn: [Beviryon Issanga Ngoulou](https://linkedin.com/in/beviryon)

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxtjs.org/) - The Vue.js framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- [Google Fonts](https://fonts.google.com/) - Web fonts

---

⭐ If you found this project helpful, please give it a star on GitHub!

## 🔄 Latest Update
- Fixed Vercel deployment issues (removed postinstall script)
- Added .npmrc for proper permissions
- Optimized build configuration