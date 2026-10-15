<template>
  <section class="py-16 sm:py-24" aria-labelledby="hero-title">
    <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
      <img
        src="/face.jpeg"
        alt="Portrait of Christian Benseler"
        width="200"
        height="200"
        fetchpriority="high"
        class="size-28 shrink-0 rounded-full object-cover ring-4 ring-accent-100 sm:size-36 dark:ring-accent-950"
      />

      <div>
        <ul class="mb-4 flex flex-wrap gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <li class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-1 dark:border-zinc-800">
            <Icon name="lucide:map-pin" class="size-3.5 text-accent-700 dark:text-accent-300" />
            Lisbon, Portugal
          </li>
          <li class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-1 dark:border-zinc-800">
            <Icon name="lucide:code-xml" class="size-3.5 text-accent-700 dark:text-accent-300" />
            Building for the web since 2005
          </li>
        </ul>

        <h1
          id="hero-title"
          class="font-display text-4xl font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl dark:text-white"
        >
          Christian Benseler
        </h1>
        <p class="mt-3 text-lg text-pretty text-zinc-600 dark:text-zinc-400">
          Fullstack & frontend developer, passionate sports practitioner,
          80/90's rock fan.
        </p>
      </div>
    </div>

    <ul class="mt-10 flex flex-wrap gap-2" aria-label="Find me on">
      <li v-for="item in socialNetworks" :key="item.url">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :title="`${item.title}: ${item.label}`"
          class="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-accent-300 hover:bg-accent-50 hover:text-accent-800 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-accent-800 dark:hover:bg-accent-950 dark:hover:text-accent-200"
        >
          <Icon :name="item.icon" class="size-4" />
          {{ item.title }}
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { socialNetworks } from "~/data/social";
</script>
