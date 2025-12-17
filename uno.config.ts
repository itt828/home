import { defineConfig, presetIcons, presetWind4 } from "unocss";

export default defineConfig({
	shortcuts: {
		h1: "text-4xl font-bold",
		h2: "text-2xl font-bold",
		h3: "text-xl font-bold",
		h4: "text-md font-bold",
		"nav-link":
			"text-gray-600 hover:text-blue-600 font-medium transition-colors",
	},
	presets: [presetIcons(), presetWind4()],
});
