import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne(): number {
      return this.doubleCount + 1
    }
  },
  actions: {
    reset() {
      this.counter = 0
    },
    add() {
      this.counter ++
    }
  },
  // pinia持久化
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
        // paths: ["token", "menus"]
      }
    ]
  }
})