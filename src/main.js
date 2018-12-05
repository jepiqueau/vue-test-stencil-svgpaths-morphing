import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";
import Ionic from "@ionic/vue";

Vue.use(Ionic);

Vue.config.ignoredElements = [/jeep-\w*/];

svgmorphing(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
