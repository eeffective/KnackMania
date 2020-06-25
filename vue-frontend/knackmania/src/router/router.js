import Vue from "vue";
import VueRouter from "vue-router";
import KnackDetails from "@/views/KnackDetails.vue";
import KnacksList from "@/views/KnacksList.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
   {
      path: "/home",
      component: Home
  },
  {
    path: "/details/:id",
    component: KnackDetails
  },
  {
    path: "/saved/:id",
    component: KnacksList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
