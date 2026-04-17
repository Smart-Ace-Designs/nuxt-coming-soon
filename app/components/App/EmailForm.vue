<script setup lang="ts"></script>

<template>
  <form class="mx-auto flex max-w-112.5 gap-x-3" id="email-form">
    <div
      class="flex flex-1 items-center gap-x-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-5 transition duration-300 focus-within:border-theme-accent focus-within:shadow-lg"
    >
      <Icon name="fa6-solid:envelope" class="text-theme-text-dim"></Icon>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        class="placeholder:text-theme-dim flex-1 border-none bg-transparent py-4 text-theme-text outline-none"
      />
    </div>
    <button
      type="submit"
      class="flex cursor-pointer items-center gap-x-2 rounded-xl border-none bg-linear-to-br from-theme-accent to-[#4f46e5] px-6 py-4 font-semibold whitespace-nowrap text-theme-text transition hover:text-theme-text/85 hover:shadow-2xl"
    >
      Notify Me
      <Icon name="fa6-solid:arrow-right"></Icon>
    </button>
  </form>
</template>
