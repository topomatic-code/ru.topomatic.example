[Установить плагин](https://360.topomatic.ru?extensionInstallPath=https%3A%2F%2Ftopomatic-code.github.io%2Fru.topomatic.example%2F)

# Установка зависимостей

```sh
npm install
```

# Сборка

```sh
npm run build
```

# Отладка

```sh
npm run serve
```

# Развертывание GitHub Pages

.github/workflows/jekyll-gh-pages.yml
```yaml
name: Deploy Jekyll with GitHub Pages dependencies preinstalled

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Copy site
        run: |
          mkdir site
          cp ./README.md ./site/README.md
          cp ./_config.yml ./site/_config.yml
          cp -r ./docs ./site/docs
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./site
          destination: ./jekyll
      - name: Install node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: cp -a ./jekyll/. ./dist/
      - name: Upload Artifact Site
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy Site to GitHub Pages
        id: deployment-site
        uses: actions/deploy-pages@v4
```

# Установка

```typescript
const extensionPath = 'https://topomatic-code.github.io/ru.topomatic.example/'
const href = `https://360.topomatic.ru?extensionInstallPath=${encodeURIComponent(extensionPath)}`;
```
