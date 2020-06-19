import Vue from "vue";
import VueRouter from "vue-router";
import KnackDetails from "@/views/KnackDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('../views/KnackDetails.vue'),
  },
  {
      path: "/home",
      component: KnackDetails
  }
];

const router = new VueRouter({
  routes: routes,
});

export default router;
