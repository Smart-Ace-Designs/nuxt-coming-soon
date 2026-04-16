export function useDateCountdown(target: Date) {
  const now = ref(new Date());
  const diff = computed(() => Math.max(0, target.getTime() - now.value.getTime()));

  const days = computed(() => Math.floor(diff.value / (1000 * 60 * 60 * 24)));
  const hours = computed(() => Math.floor((diff.value / (1000 * 60 * 60)) % 24));
  const minutes = computed(() => Math.floor((diff.value / (1000 * 60)) % 60));
  const seconds = computed(() => Math.floor((diff.value / 1000) % 60));

  let interval: number | null = null; // Proper typing

  const cleanup = () => {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  };

  onMounted(() => {
    now.value = new Date();

    interval = setInterval(() => {
      now.value = new Date();
      if (diff.value <= 0) {
        cleanup();
      }
    }, 1000);
  });

  onUnmounted(cleanup);

  return { days, hours, minutes, seconds };
}
