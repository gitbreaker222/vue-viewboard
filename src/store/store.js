import Vue from "vue";
import Vuex from "vuex";
import { settings } from "@/store/settings";

Vue.use(Vuex);
const settingsStore = new Vuex.Store(settings);

export const store = {};
store.settings = settingsStore;

if (process.env.NODE_ENV === "development") {
  window.store = store;
  console.clear();
  console.info('store:', store);
}
