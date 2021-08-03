# Flanksource Website

Codebase for Flanksource main website.

## Prerequisites

- node v14
- npm
- gulp 4

## Quickstart

```
npm install
gulp build  // compile necessary assets to 'dist' folder
gulp watch  // start local Browsersync server
```

## Setting up linting & formatter with VSCode

For consistency of code health and formatting, `.eslintrc.js` and `.prettierrc` files are included in the root folder. To set-up autolinting and format on-save with VSCode, ensure you have the ESLint and Prettier extensions installed. In your VSCode settings, set 'Default Formatter' to `esbenp.prettier-vscode` and enable the 'Format On Save' option
