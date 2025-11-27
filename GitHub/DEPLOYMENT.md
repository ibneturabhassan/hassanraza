# GitHub Pages Deployment Guide

## Quick Start

1. **Copy the workflow file to the correct location:**
   ```bash
   mkdir -p .github/workflows
   cp GitHub/deploy.yml .github/workflows/deploy.yml
   ```

2. **Update your `next.config.mjs`** with the GitHub Pages configuration:
   - Copy contents from `GitHub/next.config.gh-pages.mjs`
   - OR manually add: `output: 'export'` and `images: { unoptimized: true }`

3. **Configure basePath** (if your repo is not `username.github.io`):
   - If repo name is `portfolio`, set `basePath: '/portfolio'`
   - If deploying to main domain (`username.github.io`), leave basePath empty

4. **Push to GitHub and enable Pages:**
   - Push your code to GitHub
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"
   - The site will deploy automatically on every push

## Configuration Details

### BasePath Settings

**For repository: `username.github.io`** (main domain)
```js
// Leave basePath commented out or empty
// basePath: '',
```

**For repository: `portfolio`** (subpath)
```js
basePath: '/portfolio',
trailingSlash: true,
```

### What Gets Deployed

- All static HTML, CSS, and JavaScript files
- All images and assets from `public/` folder
- All pre-rendered project pages
- Everything works exactly as in development

### Build Output

The build process creates an `out/` folder with all static files. This folder is automatically deployed to GitHub Pages by the workflow.

## Manual Deployment (Alternative)

If you prefer not to use GitHub Actions:

1. Build locally: `npm run build`
2. Copy `out/` folder contents to `docs/` folder
3. Enable GitHub Pages with "docs" folder as source
4. Or push `out/` contents to `gh-pages` branch

