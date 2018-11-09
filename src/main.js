import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements } from "stencil-linechart/dist/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.config.ignoredElements = [/jeep-\w*/];

defineCustomElements(window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
