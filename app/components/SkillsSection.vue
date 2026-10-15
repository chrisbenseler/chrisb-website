<template>
  <section id="skills" class="section">
    <SectionHeading title="Skills" icon="lucide:wrench" subtitle="Highlighted skills are the ones I use most." />

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="reveal rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
      >
        <h3 class="flex items-center gap-2 font-display font-semibold text-zinc-900 dark:text-white">
          <Icon :name="group.icon" class="size-4 text-accent-700 dark:text-accent-300" />
          {{ group.title }}
        </h3>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill.name"
            class="rounded-full border px-3 py-1 text-sm"
            :class="
              skill.core
                ? 'border-accent-200 bg-accent-50 font-medium text-accent-800 dark:border-accent-900 dark:bg-accent-950 dark:text-accent-200'
                : 'border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'
            "
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from "~/data/skills";
</script>
