import Vue from "vue";
import VueRouter from "vue-router";
import App from "./../App.vue";
import Weather from "./../components/Weather.vue";
import Calculator from "./../components/Calculator.vue";
import Selection from "./../components/Selection.vue";

Vue.use(VueRouter);

const routes = [
  // { path: "/", name: "home", component: App, },
  {
    path: "/",
    name: "weather",
    component: Weather,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: Calculator,
  },
  {
    path: "/selection",
    name: "selection",
    component: Selection,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
