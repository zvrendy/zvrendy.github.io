# 🚀 GitHub Pages Deployment Setup

Follow these steps to enable GitHub Pages and deploy your maintenance page.

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/zvrendv/zvrendv.github.io`

2. Click on **Settings** (top navigation bar)

3. Scroll down to **Pages** in the left sidebar

4. Under **Source**, select:
   - **Source**: GitHub Actions (NOT "Deploy from a branch")

   ![GitHub Pages Source Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

5. Click **Save** if prompted

## Step 2: Verify GitHub Actions is Enabled

1. While in **Settings**, click on **Actions** → **General** in the left sidebar

2. Under **Actions permissions**, make sure one of these is selected:
   - "Allow all actions and reusable workflows" (recommended), OR
   - "Allow [your organization] actions and reusable workflows"

3. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**

4. Click **Save**

## Step 3: Push Your Code

```bash
# Make sure all files are staged
git add .

# Commit your changes
git commit -m "Add maintenance page with GitHub Pages deployment"

# Push to GitHub (adjust branch name if needed)
git push origin main
# OR if your branch is named master:
# git push origin master
```

## Step 4: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository

2. You should see a workflow run called "Deploy to GitHub Pages"

3. Click on it to see the progress

4. Wait for it to complete (usually takes 1-2 minutes)

## Step 5: Visit Your Site

Once deployment is complete, your site will be live at:

**https://zvrendv.github.io**

## Troubleshooting

### Issue: "Error: Failed to create deployment (status: 404)"

**Solution**: Make sure you selected "GitHub Actions" as the source in Step 1, NOT "Deploy from a branch"

### Issue: "Error: HttpError: Not Found"

**Solution**:
1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify your repository is public (or you have GitHub Pro for private repos)
3. Make sure GitHub Actions has write permissions

### Issue: Workflow doesn't run

**Solution**:
1. Check that Actions are enabled in Settings → Actions
2. Verify the workflow file is in `.github/workflows/nextjs.yml`
3. Try manually triggering it: Actions → Deploy to GitHub Pages → Run workflow

### Issue: 404 Page Not Found after deployment

**Solution**:
1. Wait a few minutes - DNS can take time to propagate
2. Check that the workflow completed successfully
3. Try clearing your browser cache
4. Check Settings → Pages shows your site URL

## Alternative: Simple Deployment Method

If GitHub Actions is causing issues, you can use **Vercel** instead (it's free and easier):

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! You'll get a live URL instantly

## Expected Result

After successful deployment, visiting your site will show:
- ✅ Beautiful maintenance page
- ✅ Dark/Light theme toggle
- ✅ Email signup form
- ✅ Social media links
- ✅ Animated elements

All other routes (like `/about`, `/projects`, `/blog`) will redirect to the maintenance page thanks to the middleware.

## Need Help?

If you're still having issues:
1. Check the Actions tab for error details
2. Verify all settings in Steps 1-2 above
3. Make sure your repository is named correctly (`username.github.io`)
4. Try deploying to Vercel as an alternative

---

**Once deployed, your maintenance page will be live! 🎉**

When you're ready to launch the full site, follow the instructions in `RESTORE_SITE.md`
