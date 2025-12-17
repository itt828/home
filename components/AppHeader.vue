<script setup lang="ts">
//import { useBrowserLocation } from '@vueuse/core'

//const loc = useBrowserLocation()
</script>

<template>
	<header
		b="1 gray-200"
		class="px-4 py-1 flex items-center justify-between shadow-sm rounded-xl bg-gray-300"
	>
		<NuxtLink
			to="/"
			class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
		>
			<!-- {{ loc.host }} -->
            iitt.dev
		</NuxtLink>
		<nav class="flex gap-4">
			<NuxtLink
				to="/"
				class="nav-link"
				active-class="link-active"
			>
				Home
			</NuxtLink>
			<NuxtLink
				to="/blog"
				class="nav-link"
				active-class="link-active"
			>
				Blog
			</NuxtLink>
		</nav>
	</header>
</template>
