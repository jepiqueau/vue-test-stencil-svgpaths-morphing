import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.ignoredElements = [/jeep-\w*/];

Vue.use(Ionic);
svgmorphing(window);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
