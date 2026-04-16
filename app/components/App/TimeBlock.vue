<script setup lang="ts">
defineProps<{
  label: string;
  value: number;
}>();
</script>

<template>
  <div
    class="min-w-22.5 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-6 py-5 [backdrop-filter:blur(10px)]"
  >
    <span
      class="mb-1 block bg-linear-to-br from-theme-text to-theme-accent-light bg-clip-text text-[2.5rem] font-bold text-transparent"
      id="days"
      >{{ String(value).padStart(2, "0") }}
    </span>
    <span class="text-xs tracking-widest text-theme-text-dim uppercase">{{ label }}</span>
  </div>
</template>
