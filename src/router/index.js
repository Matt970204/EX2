import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import BetaTables from "../views/BetaTables.vue";
import Plot from "../views/Plot.vue";
import Plot2 from "../views/Plot2.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/betatables",
    name: "BetaTables",
    component: BetaTables
  },
  {
    path: "/Plot",
    name: "Plot",
    component: Plot
  },
  {
  path: "/Plot2",
  name: "Plot2",
  component: Plot2
},
];

const router = new VueRouter({
  routes,
});

export default router;
