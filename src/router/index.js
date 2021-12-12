import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Facilities from "../views/Facilities.vue"
import FacilityUsage from "../views/FacilityUsage.vue"
import store from "../store";
import { getUser, logout } from "../service/user";

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
      path: "/facilities/:id",
      name: "facilityusage",
      component: FacilityUsage,
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
      meta: { requiresAuth: true }
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("user") == null && store.state.user == '') {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      getUser().catch(function () {
        logout();
        next({
          path: "/login",
        });
      });

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
    if (localStorage.getItem("user") == null || store.state.user == '') {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else {
    next();
  }
});

export default router;
