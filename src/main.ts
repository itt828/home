// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import { routes } from './router'

// createApp(App).use(router).mount('#app')

export const createApp = ViteSSG(App, { routes })
