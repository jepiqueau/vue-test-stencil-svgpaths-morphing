import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as flipimages } from "stencil-flipimages/dist/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.config.ignoredElements = [/jeep-\w*/];

flipimages(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
