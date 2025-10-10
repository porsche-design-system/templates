// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error The types are currently mismatched due to conflicting Vite versions (Astro and the Tailwind CSS Vite plugin are using different versions of Vite)
    plugins: [tailwindcss()],
  },
});
