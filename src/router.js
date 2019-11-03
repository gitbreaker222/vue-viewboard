import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hello-vue",
    name: "hello vue",
    component: () =>
      import(/* webpackChunkName: "hello-vue" */ "@/views/HelloVue.vue"),
  },
  {
    path: "/viewboard",
    name: "Viewport board",
    component: () =>
      import(
        /* webpackChunkName: "viewboard" */ "@/views/Viewboard.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
