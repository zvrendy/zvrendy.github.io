# Quick Setup Guide

Follow these steps to customize your portfolio website:

## 1. Install Dependencies

```bash
npm install
```

## 2. Customize Your Information

Edit the `lib/data.ts` file and update:

### Personal Information
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",          // Your full name
  title: "Your Title",         // Your professional title
  bio: "Your bio...",          // A brief description about you
  email: "your@email.com",     // Your email address
  location: "Your Location",   // Your city/state
  phone: "+1 (555) 123-4567", // Your phone number (optional)
  avatar: "/images/avatar.jpg", // Path to your avatar image
  resume: "/resume.pdf",       // Path to your resume PDF
};
```

### Social Links
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",  // Update with your GitHub URL
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername", // Update with your LinkedIn
    icon: "linkedin",
  },
  // Add or remove social links as needed
];
```

### Projects
Update the projects array with your own projects:
- Change the `id`, `title`, `description`, and `longDescription`
- Update `technologies` array with tech stack used
- Set `category` (Frontend, Backend, Full Stack, etc.)
- Add image paths to `image` and `images` arrays
- Include `liveUrl` and `githubUrl` if available
- Set `featured: true` for projects you want to highlight on the home page

### Skills
Update your skills with proficiency levels (1-100):
```typescript
export const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    category: SkillCategory.FRONTEND
  },
  // Add more skills...
];
```

### Experience & Education
Update the `timeline` array with your work experience and education.

### Blog Posts
Add or modify blog posts in the `blogPosts` array. You can write content in Markdown format.

## 3. Add Your Images

Place your images in the following directories:

```
public/
├── images/
│   ├── avatar.jpg           # Your profile picture
│   ├── projects/           # Your project screenshots
│   │   ├── project-1.jpg
│   │   └── project-2.jpg
│   └── blog/               # Your blog post images
│       ├── post-1.jpg
│       └── post-2.jpg
└── resume.pdf              # Your resume file
```

**Note**: Until you add your own images, the app will use placeholder images. Make sure to:
- Use JPG or PNG format
- Optimize images for web (recommended max width: 1920px)
- Keep file sizes reasonable (< 500KB per image)

## 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 5. Customize Theme (Optional)

Edit `app/globals.css` to change the color scheme. Modify CSS variables under `:root` and `.dark` selectors.

You can also use the [Shadcn/ui Theme Generator](https://ui.shadcn.com/themes) to create a custom theme.

## 6. Build and Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

That's it! Your portfolio will be live in minutes.

## Common Customizations

### Change Navigation Items
Edit the `navItems` array in `components/navigation.tsx`

### Update Footer
Modify `components/footer.tsx` to change footer content

### Add New Pages
Create new directories under `app/` following Next.js App Router conventions

### Modify SEO
Update metadata in `app/layout.tsx`

## Need Help?

Check the main `README.md` file for detailed documentation and troubleshooting.

## Next Steps

1. ✅ Customize all personal information in `lib/data.ts`
2. ✅ Add your images to `public/images/`
3. ✅ Add your resume to `public/resume.pdf`
4. ✅ Test locally with `npm run dev`
5. ✅ Build with `npm run build`
6. ✅ Deploy to Vercel

Enjoy your new portfolio! 🎉
