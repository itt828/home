export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@unocss/nuxt", "@nuxt/content", "@vueuse/nuxt"],
	ssr: true,
	devtools: { enabled: true },
	css: ["@unocss/reset/tailwind.css"],
	compatibilityDate: "2025-05-15",
	eslint: {
		config: {
			stylistic: {
				indent: "tab",
			},
		},
	},
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "home-content",
						database_id: "470a1026-cb29-4cb6-98c4-ac2de6372063",
					},
				],
			},
		},
	},
});
