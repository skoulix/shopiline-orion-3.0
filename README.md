# Orion - Shopline Theme

## Directory Structure

This project separates development files from the Shopline theme files:

```
orion/
├── src/                    # Vue source files
├── node_modules/           # Development dependencies
├── package.json            # Build scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite build configuration
└── theme/                  # Clean Shopline theme directory
    ├── assets/             # CSS, JS, and static assets
    ├── config/             # Theme settings
    ├── layout/             # Main theme layouts
    ├── locales/            # Translation files
    ├── sections/           # Theme sections
    ├── snippets/           # Reusable HTML snippets
    └── templates/          # Page templates
```

## Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development:**
   ```bash
   pnpm dev
   ```
   This watches for changes and builds CSS/JS to the `theme/assets` directory.

3. **Build for production:**
   ```bash
   pnpm build
   ```

## Using Shopline CLI

Always run Shopline CLI commands from the `theme` directory:

```bash
cd theme
shopline theme serve
```

Or from the root:
```bash
shopline theme serve theme/
```

## Important Notes

- The `theme/` directory contains ONLY Shopline theme files
- Development files (src, node_modules, etc.) stay in the root
- Build outputs go to `theme/assets/`
- This separation prevents Shopline CLI errors from non-theme files# shopiline-orion-3.0
