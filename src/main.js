import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.config.ignoredElements = [/jeep-\w*/];

svgmorphing(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
