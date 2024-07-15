import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://rabreu.dev',
  base: '',
  integrations: [tailwind(), playformCompress(), icon()]
});