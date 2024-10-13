import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import addClasses from "rehype-add-classes";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "server",
  adapter: netlify(),
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-bold",
      h5: "text-lg font-bold",
      h6: "text-base font-bold",
      p: "text-base",
      ul: "list-disc",
      ol: "list-decimal",
      blockquote: "border-l-4 border-gray-300",
      pre: "bg-gray-100 p-4 rounded-lg",
      img: "rounded-lg"
    }]],
    integrations: [mdx(), sitemap(), tailwind()]
  }
});