import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";
import "@ionic/core/css/ionic.bundle.css";

import { addIcons } from "ionicons";
import { star, trash, create, addCircle, logOut } from "ionicons/icons";

import Ionic from "@ionic/vue"; // commented to use the workaround
/* added as a workaround */
//import { defineCustomElements as ionic } from "@ionic/core/loader";
//import { addIcons } from "ionicons";
//import { ICON_PATHS } from "ionicons/icons";
/* --------------------- */

Vue.config.ignoredElements = [/jeep-\w*/]; // commented to use the workaround
/* added as a workaround */
//Vue.config.ignoredElements = [/^ion-/, /^jeep-/];
/* --------------------- */

Vue.use(Ionic); // commented to use the workaround
/* added as a workaround */
//ionic(window);
//addIcons(ICON_PATHS);
/* --------------------- */
addIcons({
  "ios-star": star.ios,
  "md-star": star.md,
  "ios-trash": trash.ios,
  "md-trash": trash.md,
  "ios-create": create.ios,
  "md-create": create.md,
  "ios-add-circle": addCircle.ios,
  "md-add-circle": addCircle.md,
  "ios-log-out": logOut.ios,
  "md-log-out": logOut.md
});
svgmorphing(window);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
