import { defineStore } from "pinia";
const baseURL = "https://jsonplaceholder.typicode.com";

export const useCounterStore = defineStore("user", {
  state: ():any => ({ users: [] }),
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    async fetchUsersFromApi() {
      const { data, pending, error, refresh } = await useFetch("/users", {
        baseURL: baseURL,
      });
    //   console.log(data.value);
      this.users = data;
      return data;
    },
  },
});
