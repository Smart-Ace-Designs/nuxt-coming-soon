<script setup lang="ts">
const target = new Date("2026-06-19T23:59:59");
const { days, hours, minutes, seconds } = useDateCountdown(target);
</script>

<template>
  <ClientOnly>
    <section class="mb-12 flex items-center justify-center gap-x-2 sm:gap-x-4">
      <AppTimeBlock label="Days" :value="days" />
      <span class="text-[1.5rem] font-bold text-theme-text-dim/50 sm:text-[2rem]">:</span>
      <AppTimeBlock label="Hours" :value="hours" />
      <span class="text-[1.5rem] font-bold text-theme-text-dim/50 sm:text-[2rem]">:</span>
      <AppTimeBlock label="Minutes" :value="minutes" />
      <span class="text-[1.5rem] font-bold text-theme-text-dim/50 sm:text-[2rem]">:</span>
      <AppTimeBlock label="Seconds" :value="seconds" />
    </section>
    <template #fallback>
      <div class="mb-12 flex h-25 items-center justify-center">Loading countdown...</div>
    </template>
  </ClientOnly>
</template>
