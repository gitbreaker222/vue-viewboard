import Vue from "vue";
import "@/registerServiceWorker";
import "@/store/store";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
