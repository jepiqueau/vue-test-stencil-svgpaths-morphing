import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";
import "@ionic/core/css/ionic.bundle.css";

//import Ionic from "@ionic/vue"; // commented to use the workaround
/* added as a workaround */
import { defineCustomElements as ionic } from "@ionic/core/loader";
import { addIcons } from "ionicons";
import { ICON_PATHS } from "ionicons/icons";
/* --------------------- */

//Vue.config.ignoredElements = [/jeep-\w*/]; // commented to use the workaround
/* added as a workaround */
Vue.config.ignoredElements = [/^ion-/, /^jeep-/];
/* --------------------- */

//Vue.use(Ionic); // commented to use the workaround
/* added as a workaround */
ionic(window);
addIcons(ICON_PATHS);
/* --------------------- */

svgmorphing(window);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
