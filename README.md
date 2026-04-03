# Muritala Portfolio Site

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Publish to GitHub Pages
1. Create a GitHub repository named `muritala-portfolio`
2. Upload all files in this folder
3. In `vite.config.js`, keep:
   ```js
   base: '/muritala-portfolio/'
   ```
4. Push to the `main` branch
5. In GitHub, go to **Settings > Pages**
6. Set **Source** to **GitHub Actions**
7. Wait for the workflow to finish
8. Your site should be available at:
   `https://YOUR_GITHUB_USERNAME.github.io/muritala-portfolio/`
