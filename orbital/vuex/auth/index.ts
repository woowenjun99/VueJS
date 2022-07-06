import { createStore } from "vuex";

export const authStore = createStore({
  state() {
    return {
      isAuth: false,
    };
  },
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
  },
});
