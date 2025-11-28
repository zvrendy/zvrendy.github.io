# Modern Portfolio Website

A fully-featured, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn/ui.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui for beautiful, accessible components
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **Theme Support**: Dark/Light mode with next-themes
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, and sitemap support
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **Blog Support**: Markdown blog posts with syntax highlighting
- **Project Showcase**: Filterable project gallery with detailed pages
- **Contact Form**: Form validation and submission handling

## Pages

1. **Home** - Hero section, featured projects, and CTA
2. **About** - Bio, skills with proficiency levels, experience timeline
3. **Projects** - Filterable project gallery with search
4. **Project Detail** - Individual project showcases
5. **Blog** - Blog posts with filtering and search
6. **Blog Post** - Full blog post with markdown and code highlighting
7. **Contact** - Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or use this template

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit `lib/data.ts` to customize your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  email: "your@email.com",
  location: "Your Location",
  phone: "+1 (555) 123-4567",
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
};
```

### Projects

Add or modify projects in `lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    technologies: ["React", "Node.js"],
    category: "Full Stack",
    image: "/images/projects/project.jpg",
    images: ["/images/projects/project-1.jpg"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: true,
    createdAt: "2024-01-01",
  },
];
```

### Skills

Customize your skills in `lib/data.ts`:

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    category: SkillCategory.FRONTEND
  },
];
```

### Blog Posts

Add blog posts in `lib/data.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "unique-id",
    title: "Post Title",
    excerpt: "Brief excerpt",
    content: "Full markdown content...",
    author: "Your Name",
    publishedAt: "2024-01-01",
    tags: ["React", "Next.js"],
    category: "Tutorial",
    readTime: 8,
    image: "/images/blog/post.jpg",
  },
];
```

### Social Links

Update social links in `lib/data.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
];
```

### Images

Place your images in the appropriate directories:

- **Avatar**: `/public/images/avatar.jpg`
- **Project Images**: `/public/images/projects/`
- **Blog Images**: `/public/images/blog/`
- **Resume**: `/public/resume.pdf`

**Note**: Until you add your own images, placeholder images will be used. Make sure to replace them with your actual images.

## Theme Customization

The color scheme can be customized in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

You can also generate new themes using the [Shadcn/ui theme generator](https://ui.shadcn.com/themes).

## Project Structure

```
new-porftolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   └── [id]/         # Dynamic blog post page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   │   └── [id]/         # Dynamic project detail page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── blog-card.tsx     # Blog card component
│   ├── project-card.tsx  # Project card component
│   ├── navigation.tsx    # Navigation component
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   ├── breadcrumbs.tsx   # Breadcrumbs component
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility functions and data
│   ├── hooks/            # Custom React hooks
│   │   ├── use-projects.ts
│   │   ├── use-blog.ts
│   │   └── use-contact-form.ts
│   ├── data.ts           # Mock data store
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    ├── images/           # Images
    │   ├── projects/     # Project images
    │   └── blog/         # Blog images
    └── resume/           # Resume files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

The application will automatically be deployed and you'll get a production URL.

### Other Platforms

Build the application:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's instructions for deploying Next.js applications.

## Features to Add

This portfolio is fully functional, but you can extend it with:

- **CMS Integration**: Connect to Contentful, Sanity, or Strapi for dynamic content
- **Analytics**: Add Google Analytics, Plausible, or Vercel Analytics
- **Newsletter**: Add email subscription with Mailchimp or ConvertKit
- **Comments**: Add comment system to blog posts with Giscus or Disqus
- **Search**: Add global search functionality with Algolia or Fuse.js
- **RSS Feed**: Generate RSS feed for blog posts
- **Sitemap**: Generate dynamic sitemap for SEO
- **i18n**: Add internationalization support with next-intl
- **Backend**: Add a real backend API for contact form submissions
- **Database**: Connect to a database for dynamic content

## Performance

This portfolio is optimized for performance:

- Static generation where possible (ISR/SSG)
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Fast page transitions with Framer Motion

## Accessibility

The portfolio follows accessibility best practices:

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management for modals
- Sufficient color contrast (WCAG AA)
- Alt text for all images
- Skip to content link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO

The application includes:

- Dynamic meta tags for each page
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD) ready
- Semantic HTML for better crawling
- Optimized images with alt text

## Contact Form

The contact form includes:

- Client-side validation
- Error handling
- Success/error notifications
- Accessible form labels
- Required field indicators

**Note**: The contact form currently simulates submission. To make it functional, you'll need to:

1. Create an API route in `app/api/contact/route.ts`
2. Integrate with email service (SendGrid, Resend, etc.)
3. Update the `useContactForm` hook to call your API

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search for existing issues
3. Open a new issue with details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## Next Steps

1. **Customize Content**: Update all personal information, projects, blog posts, and skills in `lib/data.ts`
2. **Add Images**: Replace placeholder images with your own in the `public/images/` directory
3. **Add Resume**: Add your resume PDF to `public/resume.pdf`
4. **Configure SEO**: Update meta tags in `app/layout.tsx` with your actual website URL
5. **Test**: Test the application on different devices and browsers
6. **Deploy**: Deploy to Vercel or your preferred hosting platform
7. **Customize Theme**: Adjust colors and styles to match your brand

Enjoy your new portfolio! 🚀
