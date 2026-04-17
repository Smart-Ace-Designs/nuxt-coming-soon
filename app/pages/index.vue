<script setup lang="ts"></script>

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
    <AppLogo />
    <AppHeroSection />
    <AppTimeBlockSection />
    <AppEmailForm />

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
