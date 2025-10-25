import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://offeline.site",
	integrations: [
		UnoCSS({ injectReset: true }),
		sitemap(),
	],
});
