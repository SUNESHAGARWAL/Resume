# 🚀 Next.js Portfolio - Sunesh Agarwal

A modern, responsive, and customizable portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations** - Beautiful animations powered by Framer Motion
- 🎯 **SEO Optimized** - Metadata configured for better search engine visibility
- 🔧 **Easy Customization** - Centralized configuration for easy content updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: Next Themes
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### 1. Update Your Personal Information

Edit the `config/portfolio.ts` file to update all your personal information:

```typescript
export const portfolioConfig = {
  name: "Your Name",
  title: "Your Title",
  // ... update all fields
}
```

### 2. Add Your Photos and Images

Add your images to the `public/images/` directory:

- `profile.jpg` - Your profile photo for the Hero section
- `about.jpg` - Your photo for the About section
- `project1.jpg`, `project2.jpg`, etc. - Screenshots of your projects
- `achievement1.jpg`, `achievement2.jpg` - Images for achievements
- `contact.jpg` - Optional contact section image

**Tip**: Use high-quality images, preferably:
- Profile photos: 500x500px or larger (square)
- Project screenshots: 1200x800px or larger
- Achievement images: 800x600px or larger

### 3. Customize Colors

Update the color scheme in `config/portfolio.ts`:

```typescript
theme: {
  primary: "#6366f1",    // Your primary color
  secondary: "#8b5cf6",  // Your secondary color
  accent: "#ec4899",     // Your accent color
}
```

Or modify the Tailwind classes directly in the components for more control.

### 4. Add/Remove Sections

To add or remove sections, edit `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* Add or remove components here */}
    </main>
  );
}
```

### 5. Update Content

All content is centralized in `config/portfolio.ts`. Update the following sections:

- **Skills**: Add/remove skills in each category
- **Experience**: Update your work experience
- **Projects**: Add your projects with descriptions and links
- **Education**: Update your educational background
- **Achievements**: Highlight your key achievements

### 6. Customize Animations

To modify animations, edit the Framer Motion variants in individual components or adjust the global animations in `app/globals.css`.

## 📝 Content Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar with dark mode toggle
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Achievements.tsx    # Key achievements
│   ├── Projects.tsx        # Featured projects
│   ├── Education.tsx       # Educational background
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer
│   └── ThemeProvider.tsx   # Dark mode provider
├── config/
│   └── portfolio.ts        # ⭐ Main configuration file
└── public/
    └── images/             # Your images go here
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Sections Overview

1. **Hero** - Eye-catching introduction with typing animation
2. **About** - Personal introduction with stats
3. **Skills** - Technical skills organized by category
4. **Experience** - Professional experience timeline
5. **Achievements** - Key accomplishments and impacts
6. **Projects** - Featured projects with descriptions
7. **Education** - Educational background
8. **Contact** - Contact information and social links

## 🎯 Key Features to Highlight

### Smooth Scrolling
Clicking navigation items smoothly scrolls to the respective section.

### Dark Mode
Persistent dark/light mode toggle that remembers user preference.

### Responsive Design
Optimized for all screen sizes from mobile to desktop.

### Performance Optimized
- Lazy loading of images
- Optimized animations
- Fast page loads

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips

1. **Images**: Add all your images before deploying to avoid broken image placeholders
2. **Links**: Update all social media and project links in `config/portfolio.ts`
3. **SEO**: Update metadata in `app/layout.tsx` for better search engine visibility
4. **Analytics**: Consider adding Google Analytics or similar tools
5. **Contact Form**: You can integrate services like Formspree or EmailJS for a contact form

## 🐛 Troubleshooting

**Issue**: Images not showing
- **Solution**: Ensure images are in `public/images/` and paths in config match exactly

**Issue**: Build errors
- **Solution**: Run `npm install` again and ensure all dependencies are installed

**Issue**: Dark mode not working
- **Solution**: Clear browser cache and reload

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using Next.js**

Enjoy your new portfolio! 🎉
