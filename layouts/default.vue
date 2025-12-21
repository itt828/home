<template>
	<div
		class="min-h-svh grid grid-rows-[1fr_auto] justify-items-center gap-4 bg-stone-100"
	>
		<div class="fixed z-10 mt-2 w-full max-w-4xl px-4">
			<AppHeader />
		</div>
		<div
			v-if="$slots.top"
			class="w-full mb--16"
		>
			<slot name="top" />
		</div>
		<main class="w-full max-w-4xl flex flex-col px-4 mt-16">
			<slot />
		</main>
		<AppFooter class="w-full" />
	</div>
</template>
