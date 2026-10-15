<template>
  <section id="courses" class="section reveal">
    <SectionHeading title="Courses" icon="lucide:graduation-cap" />

    <ul id="courses-list" class="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
      <li
        v-for="course in visibleCourses"
        :key="course.title"
        class="flex items-start justify-between gap-4 py-3"
      >
        <span class="text-[15px]/6">
          {{ course.title }}
          <span v-if="course.note" class="text-zinc-400 dark:text-zinc-500">· {{ course.note }}</span>
        </span>
        <span class="chip shrink-0">{{ course.provider }}</span>
      </li>
    </ul>

    <button
      v-if="courses.length > PREVIEW_COUNT"
      type="button"
      class="mt-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-accent-300 hover:text-accent-800 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-accent-800 dark:hover:text-accent-200"
      aria-controls="courses-list"
      :aria-expanded="showAll"
      @click="showAll = !showAll"
    >
      {{ showAll ? "Show fewer" : `Show all ${courses.length} courses` }}
      <Icon name="lucide:chevron-down" class="size-4 transition-transform" :class="{ 'rotate-180': showAll }" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { courses } from "~/data/courses";

const PREVIEW_COUNT = 6;

const showAll = ref(false);
const visibleCourses = computed(() => (showAll.value ? courses : courses.slice(0, PREVIEW_COUNT)));
</script>
