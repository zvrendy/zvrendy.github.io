# 🚧 Maintenance Mode Active

Your portfolio is currently in **maintenance mode**. All routes redirect to the beautiful under construction page.

## What's Active

✅ **Maintenance page** showing at `/` (home)
✅ **All other pages preserved** but not accessible (redirected to home)
✅ **Dark/Light theme** working
✅ **Email notification signup** ready
✅ **Social media links** active

## How It Works

A **middleware** (`middleware.ts`) intercepts all requests and redirects them to the maintenance page. This means:

- ✅ All your code stays intact
- ✅ Nothing is deleted or broken
- ✅ Easy to disable when ready to launch
- ✅ No image loading errors

## Files Modified for Maintenance Mode

1. **`app/page.tsx`** - Replaced with maintenance page (original backed up as `app/page.backup.tsx`)
2. **`app/layout.tsx`** - Header and Footer commented out
3. **`middleware.ts`** - NEW - Redirects all routes to home (maintenance page)

## When Ready to Launch Full Site

Follow the guide in `RESTORE_SITE.md`:

1. Delete or rename `middleware.ts`
2. Restore original home page from `app/page.backup.tsx`
3. Uncomment Header and Footer in `app/layout.tsx`
4. Add your images or use placeholders
5. Build and deploy!

## Customize Maintenance Page

Edit `app/page.tsx` to:
- Change social media links (lines 21-25)
- Update text and messaging
- Modify colors and animations
- Add your branding

## Deploy to GitHub Pages

Your site will build successfully and show only the maintenance page:

```bash
npm run build  # Should build without errors
git add .
git commit -m "Add maintenance page"
git push
```

Users visiting any URL will see the maintenance page! 🎉
