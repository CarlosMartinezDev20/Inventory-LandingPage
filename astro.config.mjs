// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://inventory-landing-page.vercel.app",
  integrations: [
    sitemap(),
    react(),
  ],
  output: "static",

  build: {
    inlineStylesheets: "auto",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': [
              '@radix-ui/react-accordion',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-navigation-menu',
            ],
          },
        },
      },
    },
  },

  compressHTML: true,
  
  scopedStyleStrategy: 'where',
});
