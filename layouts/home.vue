<template>
  <div
    class="min-h-screen grid grid-rows-[1fr_auto] justify-items-center gap-4 bg-stone-100 overflow-x-hidden"
  >
    <div class="fixed z-10 mt-2 w-full max-w-4xl px-4">
      <AppHeader />
    </div>
    <main class="w-full">
      <div>
        <slot name="top" />
      </div>
      <div class="max-w-4xl">
        <slot name="prof" />
      </div>
    </main>
    <AppFooter class="w-full" />
  </div>
</template>
