# GitHub Pages Deployment Configuration

This folder contains the configuration files needed to deploy this Next.js portfolio to GitHub Pages.

## Files in this folder:

- `next.config.gh-pages.mjs` - Next.js configuration for static export to GitHub Pages
- `deploy.yml` - GitHub Actions workflow (copy to `.github/workflows/` at repo root)

## Setup Instructions:

### Option 1: Using GitHub Actions (Recommended)

1. **Copy the workflow file:**
   ```bash
   # Create .github/workflows directory if it doesn't exist
   mkdir -p .github/workflows
   
   # Copy the workflow file
   cp GitHub/deploy.yml .github/workflows/deploy.yml
   ```

2. **Update next.config.mjs:**
   - Replace your current `next.config.mjs` with the contents of `GitHub/next.config.gh-pages.mjs`
   - OR manually add these settings to your existing config:
     ```js
     output: 'export',
     images: { unoptimized: true },
     ```

3. **Configure basePath (if needed):**
   - If your repo is named `portfolio` and you want the site at `username.github.io/portfolio`, uncomment and set:
     ```js
     basePath: '/portfolio',
     trailingSlash: true,
     ```
   - If deploying to `username.github.io` (main branch), leave basePath commented out

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically build and deploy on every push to main

### Option 2: Manual Deployment

1. **Update next.config.mjs** with the settings from `next.config.gh-pages.mjs`

2. **Build the site:**
   ```bash
   npm run build
   ```

3. **The `out` folder contains the static files**

4. **Deploy the `out` folder contents:**
   - Either push to `gh-pages` branch
   - Or use GitHub Pages with `docs` folder option

## Important Notes:

- **BasePath**: If your repository name is not the same as your GitHub username, you'll need to set the `basePath` in the config
- **Images**: All images are set to `unoptimized: true` for static export compatibility
- **Calendly Widget**: External scripts like Calendly will work fine
- **All functionality preserved**: Client-side features, animations, and interactions will work exactly the same

## Troubleshooting:

- **404 errors**: Make sure `basePath` matches your repository name (if using subpath)
- **Assets not loading**: Check that `basePath` is correctly configured
- **Build fails**: Ensure all dependencies are in `package.json`

