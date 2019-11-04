import Vue from "vue";
import VueRouter from "vue-router";
import Viewboard from "@/views/Viewboard";

Vue.use(VueRouter);

const VIEWBOARD = 'viewboard'
const ABOUT = 'about'

const routes = [
  {
    path: "/",
    redirect: `/${VIEWBOARD}`,
  },
  {
    path: `/${VIEWBOARD}`,
    name: "Viewport board",
    component: Viewboard,
  },
  {
    path: `/${ABOUT}`,
    name: 'About',
    component: () => import(
      /* webpackChunkName: "about" */
      "@/views/About.vue"
    ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
