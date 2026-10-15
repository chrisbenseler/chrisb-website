<template>
  <div class="mb-10">
    <h2 class="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
      <span
        class="grid size-9 place-items-center rounded-lg bg-accent-50 text-accent-800 ring-1 ring-accent-100 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-900"
        aria-hidden="true"
      >
        <Icon :name="icon" class="size-[18px]" />
      </span>
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon: string; subtitle?: string }>();
</script>
