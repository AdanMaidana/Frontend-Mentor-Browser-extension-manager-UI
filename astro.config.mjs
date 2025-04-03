// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://adanmaidana.github.io/Frontend-Mentor-Browser-extension-manager-UI/",
  base: '/Frontend-Mentor-Browser-extension-manager-UI/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});