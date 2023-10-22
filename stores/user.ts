import { defineStore } from "pinia";
const config = useRuntimeConfig(); 

export const useCounterStore = defineStore("user", {
  state: ():any => ({ users: [] }),
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    async fetchUsersFromApi() {
      const { data, pending, error, refresh } = await useFetch("/users", {
        baseURL: config.public.apiURL,
      });
    //   console.log(data.value);
      this.users = data;
      return data;
    },
  },
});
