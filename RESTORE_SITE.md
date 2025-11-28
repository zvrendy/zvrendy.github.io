# How to Restore Your Full Portfolio Site

When you're ready to launch your full portfolio website, follow these simple steps:

## Step 1: Disable Maintenance Mode

**Delete or rename the middleware file:**

```bash
# Option 1: Delete it
rm middleware.ts

# Option 2: Rename it to keep as backup
mv middleware.ts middleware.ts.backup
```

This will stop redirecting all routes to the maintenance page.

## Step 2: Restore the Original Home Page

```bash
# Delete the maintenance page
rm app/page.tsx

# Restore the original home page
mv app/page.backup.tsx app/page.tsx
```

## Step 3: Re-enable Header and Footer

Open `app/layout.tsx` and uncomment the Header and Footer:

**Change from:**
```tsx
<div className="flex min-h-screen flex-col">
  {/* Header and Footer hidden during maintenance */}
  {/* <Header /> */}
  <main className="flex-1">{children}</main>
  {/* <Footer /> */}
</div>
```

**To:**
```tsx
<div className="flex min-h-screen flex-col">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</div>
```

## Step 4: Add Your Images (Important!)

Before launching, make sure to add your images to avoid the errors:

1. Add your avatar: `public/images/avatar.jpg`
2. Add project images: `public/images/projects/`
3. Add blog images: `public/images/blog/`
4. Add your resume: `public/resume.pdf`

**OR** update `lib/data.ts` to use placeholder images:

Replace all image paths with placeholder URLs:
- Avatar: `https://ui-avatars.com/api/?name=Your+Name&size=400`
- Project images: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`
- Blog images: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800`

## Step 5: Rebuild and Test

```bash
npm run build
npm run dev
```

## Quick Alternative: Use Placeholder Images

If you want to launch quickly without adding real images, run this to update to use online placeholders:

Edit `lib/data.ts` and change image URLs to:

```typescript
// For avatar
avatar: "https://ui-avatars.com/api/?name=John+Doe&size=400&background=random"

// For project images
image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"

// For blog images
image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
```

That's it! Your full portfolio will be live! 🚀
