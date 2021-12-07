import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Facilities from "../views/Facilities.vue"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/facilities",
      name: "facilities",
      component: Facilities,
      meta: { requiresAuth: true }
    },
    {
      path: "/register",
      component: Register,
      meta: { guest: true }
    },
    {
      path: "/login",
      component: Login,
      meta: { guest: true }
    },
    {
      path: "/logout",
      component: Logout,
      meta: { guest: true }
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("user") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.role == 1) {
          next();
        } else {
          next({ name: "Dashboard" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("user") == null) {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else {
    next();
  }
});

export default router;
