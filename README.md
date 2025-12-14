[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/hrshx3o5o6/Muzhigal)

---

Here is the documentation for the **Muzhigal** project, formatted in clean, organized Markdown.

-----

# Muzhigal Project Documentation

## Purpose and Scope

This document provides a comprehensive introduction to the **Muzhigal** project, a React-based browser extension designed for transferring music data between different music streaming services. This page covers the project's overall architecture, build system, directory structure, and development environment setup.

**For detailed information about specific subsystems:**

  * **Build system configuration and webpack setup:** see *Build System Architecture*
  * **Source map remapping for debugging:** see *Source Map Remapping*
  * **Development CLI tools:** see *Development Tools Ecosystem*
  * **Project configuration files:** see *Project Configuration*

> **Sources:** README context from diagrams, `package.json` structure analysis

-----

## Project Identity

Muzhigal is a browser extension application built with modern web technologies. The project transforms React-based source code through a sophisticated build pipeline into optimized, minified bundles suitable for deployment as a browser extension.

| Property | Value |
| :--- | :--- |
| **Project Type** | Browser Extension |
| **Primary Framework** | React |
| **Build Tool** | Webpack 5 |
| **Language** | JavaScript (ES6+) / JSX |
| **Package Manager** | npm |
| **Source Directory** | `src/` |
| **Output Directory** | `dist/` |

> **Sources:** `package.json`, `webpack.config.js`, `src/`

-----

## Directory Structure

The project follows a standard modern JavaScript application structure:

  * **`src/`**: Contains all source code including React components, JavaScript/JSX files, stylesheets, and assets.
  * **`dist/`**: Generated directory containing the compiled and bundled output ready for browser deployment.
  * **`node_modules/`**: npm dependency tree with over 1,000 packages including build tools, React, and utilities.
  * **Configuration files**: Root-level configuration for webpack, npm, git, and environment variables.

> **Sources:** `.DS_Store` directory metadata, `.gitignore`, `package.json`

-----

## High-Level Architecture

The architecture consists of four primary layers:

1.  **Development Environment**: Source code written in modern JavaScript/JSX with React components.
2.  **Build Pipeline**: Multi-stage transformation through Babel (transpilation), Webpack (bundling), and Terser (minification).
3.  **Runtime Environment**: Compiled extension executing in browser with React for UI and browser APIs for extension functionality.
4.  **Debugging Support**: Source maps enabling developers to debug original source despite code transformations.

> **Sources:** `webpack.config.js`, `package.json` dependencies, `src/`, `dist/`

-----

## Build Process Flow

The build process transforms source files through multiple stages:

1.  **Transpilation**: `babel-loader` converts JSX and ES6+ JavaScript to browser-compatible ES5.
2.  **Environment Injection**: `dotenv-webpack` injects environment variables as compile-time constants.
3.  **Bundling**: Webpack combines all modules into unified bundles.
4.  **Optimization**: `terser-webpack-plugin` minifies JavaScript, removes dead code, and optimizes bundle size.
5.  **Asset Generation**: HTML files generated and source maps created for debugging.

> **Sources:** `webpack.config.js`, `node_modules/.bin/webpack`, `package.json` scripts

-----

## Technology Stack

### Core Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **react** | Latest | UI framework for building component-based interfaces |
| **lucide-react** | Latest | Icon library for UI elements |
| **webpack** | 5.x | Module bundler orchestrating build pipeline |
| **@babel/core** | 7.x | JavaScript transpiler for ES6+ compatibility |
| **terser-webpack-plugin** | 5.x | JavaScript minifier for production optimization |
| **dotenv** | Latest | Environment variable management |
| **@ampproject/remapping** | Latest | Source map remapping for multi-stage builds |

### Build Tool Chain

Command-line tools available in `node_modules/.bin/`:

  * **webpack**: Main build orchestrator
  * **babel**: Standalone transpilation
  * **terser**: Standalone minification
  * **Additional utilities**: `acorn`, `jsesc`, `json5`, `semver`, `browserslist`

> **Sources:** `package.json` dependencies, `node_modules/.bin/`, `package-lock.json`

-----

### Key Development Commands

The project likely includes npm scripts in `package.json` for common tasks:

  * **Build**: Runs webpack to compile source code to `dist/`.
  * **Watch**: Watches for file changes and rebuilds automatically.
  * **Development Mode**: Builds with source maps and without minification for debugging.
  * **Production Mode**: Builds with full optimization and minification.

> **Sources:** `package.json` scripts section, `webpack.config.js`, `.gitignore` build exclusions

-----


As a music transfer extension, Muzhigal implements:

  * **Popup Interface**: React-based UI for user interaction.
  * **Background Service Worker**: Handles API requests and data synchronization.
  * **Content Scripts**: Injected into music service pages to extract playlist/library data.
  * **API Integration**: Connects to multiple music streaming service APIs.
  * **Authentication**: OAuth flows for secure service authorization.
  * **Data Transformation**: Maps music metadata between different service formats.

> **Sources:** `src/` directory structure, React dependency in `package.json`, `lucide-react` icon library

-----

## Environment Configuration

The project uses environment variables for configuration management.

### Configuration Files

| File | Purpose |
| :--- | :--- |
| **.env** | Development environment variables (API keys, endpoints) |
| **.env.production** | Production-specific configuration |
| **.gitignore** | Excludes sensitive `.env` files and build artifacts |
| **webpack.config.js** | References environment variables via `dotenv-webpack` |

### Environment Variable Handling

Environment variables are:

1.  Defined in `.env` files (excluded from git).
2.  Loaded by the `dotenv` package.
3.  Injected at build time by the `dotenv-webpack` plugin.
4.  Available as `process.env.*` in bundled code.
5.  Compiled as literal values (not runtime environment variables).

> **Sources:** `.gitignore`, `package.json` dotenv dependencies, `webpack.config.js` configuration

-----


The `@ampproject/remapping` package enables debugging by:

  * **Multi-layer Mapping**: Traces through Babel transpilation, Webpack bundling, and Terser minification.
  * **Source Map Merging**: Combines intermediate source maps into a single map.
  * **Original Source Recovery**: Allows DevTools to display original JSX/ES6+ source code.
  * **Breakpoint Translation**: Maps breakpoints in minified code back to original lines.

This is critical for development as the code undergoes three major transformations before deployment.

> **Sources:** `node_modules/@ampproject/remapping/`, `package.json` dependencies, webpack source map configuration

-----

## Version Control Configuration

The `.gitignore` file excludes build artifacts and dependencies from version control:

```text
node_modules/          # All npm dependencies (~1000+ packages)
dist/                  # Compiled build output
.env                   # Environment variables with secrets
.env.local             # Local environment overrides
.DS_Store              # macOS system files
```

Only source code (`src/`), configuration files (`webpack.config.js`, `package.json`), and documentation are tracked in git.

> **Sources:** `.gitignore`, `.DS_Store` metadata showing `dist/` and `node_modules/`
