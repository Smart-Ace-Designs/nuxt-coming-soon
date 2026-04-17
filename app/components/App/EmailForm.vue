<script setup lang="ts">
const email = ref<string>("");
const success = ref<boolean>(false);
const error = ref<boolean>(false);

function validateEmail() {
  if (!isValidEmail(email.value)) {
    email.value = "";
    error.value = true;
    return;
  }
  success.value = true;
  error.value = false;
}
</script>

<template>
  <form
    class="mx-auto max-w-112.5 gap-x-3"
    :class="success ? 'hidden' : 'flex'"
    id="email-form"
    @submit.prevent="validateEmail"
    novalidate="true"
  >
    <div class="flex flex-1 flex-col">
      <div
        class="flex items-center gap-x-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-5 transition duration-300 focus-within:border-theme-accent focus-within:shadow-lg"
      >
        <Icon name="fa6-solid:envelope" class="text-theme-text-dim"></Icon>

        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          class="placeholder:text-theme-dim flex-1 border-none bg-transparent py-4 text-theme-text outline-none"
          @input="error = false"
        />
      </div>

      <p :class="error ? 'visible' : 'invisible'" class="mt-2 text-left text-sm text-red-500">
        Please provide a valid email address.
      </p>
    </div>

    <button
      type="submit"
      class="flex cursor-pointer items-center gap-x-2 self-start rounded-xl border-none bg-linear-to-br from-theme-accent to-[#4f46e5] px-6 py-4 font-semibold whitespace-nowrap text-theme-text transition hover:text-theme-text/85 hover:shadow-2xl"
    >
      Notify Me
      <Icon name="fa6-solid:arrow-right"></Icon>
    </button>
  </form>

  <div
    class="success-message mx-auto mb-6 max-w-112.5 items-center justify-center gap-x-3 rounded-xl border border-[rgba(32,197,94,0.3)] bg-[rgba(34,197,94,0.15)] px-6 py-4 font-medium text-[#4ade80]"
    :class="success ? 'flex' : 'hidden'"
    id="success"
  >
    <Icon name="fa6-solid:circle-check" class="text-xl"></Icon>
    <span>You're on the list! We'll notify you when we launch.</span>
  </div>
</template>
