import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWind4,
} from 'unocss'

export default defineConfig({
	presets: [presetAttributify(), presetIcons(), presetWind4()],
})
