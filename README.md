
# todo

This project uses Nuxt.js for the frontend and Tauri as a lightweight alternative to Electron for creating a desktop application. Tauri integrates seamlessly with the frontend, allowing for the development of secure and efficient desktop applications using web technologies.

## Build Setup

First, ensure you have Rust and the Tauri CLI installed, as Tauri is built on top of Rust.

```bash
# Install Rust
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Tauri CLI
$ cargo install tauri-cli
```

### For Nuxt.js

```bash
# Install dependencies
$ yarn install

# Serve with hot reload at localhost:3000
$ yarn dev

# Build for production and launch server
$ yarn build
$ yarn start

# Generate static project
$ yarn generate
```

### For Tauri

Tauri uses the `src-tauri` directory for its configuration and Rust source code.

```bash
# Development: Run Tauri in development mode
$ yarn tauri dev

# Build: Create a production build of your Tauri application
$ yarn tauri build
```

For detailed explanation on how Nuxt.js works, check out the [Nuxt.js documentation](https://nuxtjs.org).

For more about Tauri, including setup and configuration, visit the [Tauri Studio documentation](https://tauri.studio/docs/getting-started/intro).

## Special Directories

You can create the following directories, some of which have special behaviors. Only `pages` is required for Nuxt; you can delete others if you don't want to use their functionality.

### `assets`

Contains uncompiled assets such as Stylus or Sass files, images, or fonts. [More info](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

Contains your Vue.js components which can be reused and imported into your pages, layouts, and even other components. [More info](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Helps change the look and feel of your Nuxt app, such as including a sidebar or different layouts for mobile and desktop. [More info](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

Contains your application views and routes. Nuxt reads all the `*.vue` files inside this directory and sets up Vue Router automatically. [More info](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

Contains JavaScript plugins that run before instantiating the root Vue.js Application. This is where you add Vue plugins and inject functions or constants. [More info](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

Contains static files. Each file inside this directory is mapped to `/`. [More info](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Contains Vuex store files. Creating a file in this directory automatically activates Vuex. [More info](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `src-tauri`

Specific to Tauri, this directory contains your backend Rust code and configurations for your desktop application. This is where you configure the Tauri-specific settings, such as window creation, security policies, and system interactions.

