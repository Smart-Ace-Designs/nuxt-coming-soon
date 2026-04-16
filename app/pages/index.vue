<script setup lang="ts">
const target = new Date("2026-06-19T23:59:59");
const { days, hours, minutes, seconds } = useCountdown(target);
</script>

<template>
  <div class="absolute inset-0 -z-10">
    <div
      class="blob absolute -top-[15%] -left-[10%] size-125 rounded-full bg-linear-to-br from-theme-accent to-[#8b5cf6] opacity-60 blur-[80px]"
    ></div>
    <div
      class="blob-2 blob absolute -right-[10%] -bottom-[10%] size-100 rounded-full bg-linear-to-br from-[#ec4489] to-[#8b5cf6] opacity-60 blur-[80px]"
    ></div>
    <div
      class="blob-3 blob absolute top-1/2 left-1/2 size-75 rounded-full bg-linear-to-br from-[#06b6d4] to-theme-accent opacity-60 blur-[80px]"
    ></div>
  </div>

  <main class="w-full max-w-162.5 p-8 text-center">
    <div class="mb-12 flex items-center justify-center gap-x-3">
      <div
        class="flex size-12 items-center justify-center rounded-[14px] bg-linear-to-br from-theme-accent to-theme-accent-light text-xl"
      >
        <Icon name="fa6-solid:bolt"></Icon>
      </div>
      <span class="text-[2rem] font-bold tracking-widest uppercase">Flux</span>
    </div>

    <AppHeroSection />

    <ClientOnly>
      <section class="mb-12 flex items-center justify-center gap-x-4">
        <AppTimeBlock label="Days" :value="days" />
        <span class="text-[2rem] font-bold text-theme-text-dim/50">:</span>
        <AppTimeBlock label="Hours" :value="hours" />
        <span class="text-[2rem] font-bold text-theme-text-dim/50">:</span>
        <AppTimeBlock label="Minutes" :value="minutes" />
        <span class="text-[2rem] font-bold text-theme-text-dim/50">:</span>
        <AppTimeBlock label="Seconds" :value="seconds" />
      </section>
      <template #fallback>
        <div class="mb-12 flex h-25 items-center justify-center">Loading countdown...</div>
      </template>
    </ClientOnly>

    <!-- https://youtu.be/bW58B6y81y8?t=38279 -->
    <!-- Email Form -->
    <form class="email-form" id="email-form">
      <div class="relative mb-4">
        <Icon
          name="fa6-solid:envelope"
          class="absolute top-1/2 left-3 -translate-y-1/2 text-theme-text"
        ></Icon>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="w-full rounded-lg border p-[0.85rem] pl-10 text-[1rem] transition-all duration-300 focus:outline-none"
        />
      </div>
      <button type="submit">
        Notify Me
        <Icon name="fa6-solid:arrow-right"></Icon>
      </button>
    </form>

    <!-- Success Message -->
    <div class="success-message hidden" id="success">
      <Icon name="fa6-solid:circle-check"></Icon>
      <span>You're on the list! We'll notify you when we launch.</span>
    </div>

    <!-- Social Links -->
    <div class="socials">
      <a href="#">
        <Icon name="fa6-brands:x-twitter"></Icon>
        <Icon name="fa6-brands:instagram"></Icon>
        <Icon name="fa6-brands:discord"></Icon>
      </a>
    </div>
  </main>
</template>
