<template>
  <!-- The stored preference is only known in the browser, so render client-side
       to avoid a hydration mismatch on the statically generated page. -->
  <ClientOnly>
    <button
      type="button"
      class="grid size-9 shrink-0 place-items-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
      :aria-label="`Theme: ${current.label}. Click to switch.`"
      :title="`Theme: ${current.label}`"
      @click="cycle"
    >
      <Icon :name="current.icon" class="size-[18px]" />
    </button>
    <template #fallback>
      <span class="size-9 shrink-0" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const modes = [
  { value: "system", label: "System", icon: "lucide:monitor" },
  { value: "light", label: "Light", icon: "lucide:sun" },
  { value: "dark", label: "Dark", icon: "lucide:moon" },
] as const;

const colorMode = useColorMode();
const current = computed(
  () => modes.find((mode) => mode.value === colorMode.preference) ?? modes[0],
);

const cycle = () => {
  const next = modes[(modes.indexOf(current.value) + 1) % modes.length]!;
  colorMode.preference = next.value;
};
</script>
