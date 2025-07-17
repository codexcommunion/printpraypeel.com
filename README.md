# PrintPrayPeel.com

A Catholic spiritual practice website that provides free printable prayer stickers. Built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to GitHub Pages

To deploy the site to GitHub Pages, simply run:

```bash
npm run deploy
```

This command will:
1. Build the website
2. Push the built files to the `gh-pages` branch
3. GitHub Pages will automatically serve the site at https://codexcommunion.github.io/printpraypeel.com/

### Prerequisites for Deployment
- Make sure you have push access to the repository
- The `gh-pages` branch should exist (create it from `main` if it doesn't)
- Your local git should be authenticated with GitHub

### Alternative Deployment Options
If you need to use a different GitHub user or SSH:

```bash
# Use different GitHub user
GIT_USER=your-username npm run deploy:raw

# Use SSH
USE_SSH=true npm run deploy:raw
```
