export const useCounterStore2 = defineStore('counter2', () => {
  const count2 = ref(0)

  function increment() {
    count2.value++
  }

  return { count2, increment }
})
