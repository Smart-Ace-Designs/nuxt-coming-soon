<script setup lang="ts"></script>

<template>
  <!-- Animated BG -->
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

    <!-- https://youtu.be/bW58B6y81y8?t=37789 -->
    <!-- Hero Section -->
    <section class="hero">
      <div class="badge">
        <span class="pulse"></span>
        Coming Soon
      </div>
      <h1>Something awesome is brewing.</h1>
      <p>We're working hard to bring you something special. Be the first to know when we launch.</p>
    </section>

    <!-- Countdown Section -->
    <section class="countdown">
      <div class="time-block">
        <span class="time-value" id="days">00</span>
        <span class="time-label">Days</span>
      </div>
      <span class="separator">:</span>

      <div class="time-block">
        <span class="time-value" id="hours">00</span>
        <span class="time-label">Hours</span>
      </div>
      <span class="separator">:</span>

      <div class="time-block">
        <span class="time-value" id="minutes">00</span>
        <span class="time-label">Minutes</span>
      </div>
      <span class="separator">:</span>

      <div class="time-block">
        <span class="time-value" id="seconds">00</span>
        <span class="time-label">Seconds</span>
      </div>
    </section>

    <!-- Email Form -->
    <form class="email-form" id="email-form">
      <div class="input-group">
        <Icon name="fa6-solid:envelope"></Icon>
        <input type="email" name="email" id="email" placeholder="Enter your email" />
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
