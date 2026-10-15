<template>
  <section id="projects" class="section">
    <SectionHeading title="Projects" icon="lucide:folder-git-2" />

    <ul class="grid gap-4 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.url" class="reveal">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex h-full flex-col rounded-2xl border border-zinc-200 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-lg hover:shadow-accent-900/5 motion-reduce:hover:translate-y-0 dark:border-zinc-800 dark:hover:border-accent-800 dark:hover:shadow-black/40"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display font-semibold text-zinc-900 dark:text-white">
              {{ project.title }}
            </h3>
            <Icon
              name="lucide:arrow-up-right"
              class="size-4 shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-700 dark:group-hover:text-accent-300"
            />
          </div>
          <p class="mt-2 flex-1 text-sm/6">{{ project.description }}</p>
          <span class="chip mt-4 self-start">{{ project.org }}</span>
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>
