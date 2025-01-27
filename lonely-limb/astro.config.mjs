// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sentry from '@sentry/astro';
import spotlight from '@spotlightjs/astro'; // Note the curly braces

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx(), spotlight(), sentry()]
});