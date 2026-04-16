export function useCountdown(target: Date) {
  const now = ref(new Date());
  const diff = computed(() => Math.max(0, target.getTime() - now.value.getTime()));

  const days = computed(() => Math.floor(diff.value / (1000 * 60 * 60 * 24)));
  const hours = computed(() => Math.floor((diff.value / (1000 * 60 * 60)) % 24));
  const minutes = computed(() => Math.floor((diff.value / (1000 * 60)) % 60));
  const seconds = computed(() => Math.floor((diff.value / 1000) % 60));

  let interval: any;

  onMounted(() => {
    now.value = new Date();

    interval = setInterval(() => {
      now.value = new Date();
      if (diff.value <= 0) clearInterval(interval);
    }, 1000);
  });

  onUnmounted(() => {
    if (interval) clearInterval(interval);
  });

  return { days, hours, minutes, seconds };
}
