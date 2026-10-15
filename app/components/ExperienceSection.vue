<template>
  <section id="experience" class="section">
    <SectionHeading title="Experience" icon="lucide:briefcase" />

    <ol class="ml-1.5 space-y-12 border-l border-zinc-200 dark:border-zinc-800">
      <li v-for="experience in experiences" :key="experience.company" class="reveal relative pl-8">
        <span
          aria-hidden="true"
          class="absolute top-1.5 -left-[7.5px] size-3.5 rounded-full border-2 border-white dark:border-zinc-950"
          :class="
            isCurrent(experience)
              ? 'bg-accent-700 ring-4 ring-accent-100 dark:bg-accent-400 dark:ring-accent-950'
              : 'bg-zinc-300 dark:bg-zinc-700'
          "
        />

        <h3 class="font-display text-xl font-semibold text-zinc-900 dark:text-white">
          {{ experience.company }}
        </h3>
        <p v-if="experience.tagline" class="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
          {{ experience.tagline }}
        </p>

        <div v-for="role in experience.roles" :key="role.start" class="mt-5">
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 class="font-medium text-zinc-800 dark:text-zinc-200">{{ role.title }}</h4>
            <p class="text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
              <time :datetime="role.start">{{ formatPeriodDate(role.start) }}</time>
              –
              <time v-if="role.end" :datetime="role.end">{{ formatPeriodDate(role.end) }}</time>
              <span v-else class="font-medium text-accent-700 dark:text-accent-300">Present</span>
            </p>
          </div>

          <p v-for="(paragraph, index) in role.description" :key="index" class="mt-2 text-[15px]/7">
            {{ paragraph }}
          </p>

          <ul v-if="role.stack?.length" class="mt-3 flex flex-wrap gap-1.5" aria-label="Main stack">
            <li v-for="tech in role.stack" :key="tech" class="chip">{{ tech }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { experiences, type Experience } from "~/data/experience";

const isCurrent = (experience: Experience) => experience.roles.some((role) => !role.end);
</script>
