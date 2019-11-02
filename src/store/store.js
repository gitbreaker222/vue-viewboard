import Vue from "vue";
import Vuex from "vuex";
import { settings } from "@/store/settings";

const isDevEnv = process.env.NODE_ENV === 'development'
const isProdEnv = process.env.NODE_ENV === 'production'

/* ACTIONS */
export const SET_URL = 'SET_URL'


/* STORE SETUP */
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    settings,
  },
  strict: !isProdEnv,
  //plugins: isProdEnv ? [] : [createLogger()],
})

if (isDevEnv) {
  window.store = store;
  console.clear();
  console.info('store:', store);
}
