import Vue from "vue";
import Home from "./views/Home.vue";

import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/svgmorphing/:type",
      name: "svgmorphing",
      component: () =>
        import(/* webpackChunkName: "svgmorphing" */ "./views/SvgMorphing.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/testicons",
      name: "testicons",
      // route level code-splitting
      // this generates a separate chunk (testicons.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "testicons" */ "./views/TestIcons.vue")
    }
  ]
});
