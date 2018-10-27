import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "board",
      component: () => import("./views/Board.vue"),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/editboard",
      name: "editboard",
      component: () => import("./views/Edit_board.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/Signin.vue"),
      meta: {
        requiresGuest: true
      }
    }
  ]
});

//

router.beforeEach((to, from, next) => {
  // RequiredAuth
  if(to.matched.some(record => {record.meta.requiresAuth})){
    // If not logged in
    if(!firebase.auth().currentUser){
      next({ path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
    } else {
      // Proceed to route
      next()
    }
  } else if(to.matched.some(record => {record.meta.requiresGuest})) {
    // If logged in
    if(firebase.auth().currentUser){
      next({ path: '/',
      query: {
        redirect: to.fullPath
      }
    })
    } else {
    // Proceed to route
    next()
    }
  } else {
    // Proceed to route
    next()
  }
})

export default router;