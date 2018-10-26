import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "board",
      component: () => import("./views/Board.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/Signin.vue")
    }
  ]
});