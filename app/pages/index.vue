<script setup lang="ts"></script>

<template>
  <!-- Animated BG -->
  <div class="bg">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>

  <!-- Main Content -->
  <main class="container">
    <!-- Logo -->
    <div class="logo">
      <div class="logo-icon">
        <Icon name="fa6-solid:bolt"></Icon>
      </div>
      <span>Flux</span>
    </div>

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
