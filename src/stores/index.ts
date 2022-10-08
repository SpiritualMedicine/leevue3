import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Names } from "./store-name";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

const Login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "promise", current: 9999 });
    }, 3000);
  });
};
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: "leolee",
    };
  },
  //类似于computed
  getters: {
    newName(): string {
      return this.name + this.current;
    },
  },
  //类似于method
  actions: {
    async setCurrent() {
      const res = await Login();
      const { current, name } = res as any;
      this.current = current;
      this.name = name;
    },
  },
});
