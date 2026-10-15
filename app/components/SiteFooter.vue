<template>
  <footer class="border-t border-zinc-200/70 bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-900/40">
    <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <figure class="reveal text-center">
        <Icon name="lucide:quote" class="mx-auto size-6 text-accent-300 dark:text-accent-800" />
        <blockquote
          class="mx-auto mt-4 max-w-xl font-display text-xl/8 text-balance text-zinc-800 sm:text-2xl/9 dark:text-zinc-200"
        >
          <p>
            If you don’t have answers to your problems after a four-hour run,
            you ain’t getting them.
          </p>
        </blockquote>
        <figcaption class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">— Christopher McDougall</figcaption>
      </figure>

      <div
        class="mt-16 flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400"
      >
        <p>© {{ year }} Christian Benseler · Built with Nuxt</p>
        <a href="#top" class="inline-flex items-center gap-1 transition-colors hover:text-accent-700 dark:hover:text-accent-300">
          Back to top
          <Icon name="lucide:arrow-up" class="size-4" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
