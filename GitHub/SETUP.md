# Quick Setup Instructions

## Step 1: Copy Workflow File

Copy the workflow file from the `GitHub` folder to the correct location:

```bash
# Create .github/workflows directory if it doesn't exist
mkdir -p .github/workflows

# Copy the workflow file
cp GitHub/deploy.yml .github/workflows/deploy.yml
```

## Step 2: Update Next.js Config

You have two options:

### Option A: Replace your config (keeps original project unchanged)
The GitHub Actions workflow will automatically use the config from `GitHub/next.config.gh-pages.mjs` during build, so your original `next.config.mjs` stays unchanged.

### Option B: Manually update next.config.mjs
If you want to test locally, add these settings to your `next.config.mjs`:

```js
output: 'export',
images: { unoptimized: true },
```

## Step 3: Configure BasePath (if needed)

**If your repository is named `portfolio`** (not `username.github.io`):
- Open `GitHub/next.config.gh-pages.mjs`
- Uncomment these lines:
  ```js
  basePath: '/portfolio',  // Replace 'portfolio' with your repo name
  trailingSlash: true,
  ```

**If deploying to `username.github.io`** (main domain):
- Leave `basePath` commented out

## Step 4: Push to GitHub

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

## Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The workflow will automatically run and deploy your site

## Your Site Will Be Available At:

- If repo is `username.github.io`: `https://username.github.io`
- If repo is `portfolio`: `https://username.github.io/portfolio`

## Notes:

- ✅ Your original project files remain unchanged
- ✅ The workflow uses the config from `GitHub/` folder during build
- ✅ All functionality will work exactly the same
- ✅ Automatic deployment on every push to main branch

