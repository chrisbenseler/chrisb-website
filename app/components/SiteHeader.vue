<template>
  <header
    class="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75"
  >
    <div class="mx-auto flex h-16 max-w-3xl items-center gap-4 px-4 sm:px-6">
      <a
        href="#top"
        class="shrink-0 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
        aria-label="Christian Benseler, back to top"
      >
        CB<span class="text-accent-700 dark:text-accent-400">.</span>
      </a>

      <nav aria-label="Sections" class="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]">
        <ul class="flex items-center gap-0.5 text-sm sm:justify-end">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-md px-2.5 py-2 whitespace-nowrap text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:px-3 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#courses", label: "Courses" },
];
</script>
