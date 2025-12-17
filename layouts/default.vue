<template>
  <div
    class="min-h-screen grid grid-rows-[1fr_auto] justify-items-center gap-4 bg-stone-100 overflow-x-hidden"
  >
    <div class="fixed z-10 mt-2 w-full max-w-4xl px-4">
        <AppHeader />
    </div>
    <div class="flex flex-col mt-16 px-4">
      <main class="w-full max-w-4xl">
        <slot />
      </main>
    </div>
    <AppFooter class="w-full" />
  </div>
</template>
