export const useRole = defineStore("role", {
  state: () => {
    return {
      list: [],
      optionIndex: ["name", "id"],
    };
  },
  actions: {
    async init() {
      const { data } = await apiGetRole();
      this.list = data;
    },
  },
});
