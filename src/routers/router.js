import Vue from "vue";
import VueRouter from "vue-router";
import App from "./../App.vue";
import Weather from "../views/Weather.vue";
import Calculator from "../views/Calculator.vue";
import Selection from "../views/Selection.vue";
import Coin from "../views/Coin.vue";
import Reaction from "../views/Reaction/Reaction.vue";
import FormSubmit from "../views/FormSubmit.vue";

Vue.use(VueRouter);

const routes = [
  // { path: "/", name: "home", component: App, },
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/selection",
    name: "Selection",
    component: Selection,
  },
  {
    path: "/coin",
    name: "Coin",
    component: Coin,
  },
  {
    path: "/reaction",
    name: "Reaction",
    component: Reaction,
  },
  {
    path: "/formSubmit",
    name: "FormSubmit",
    component: FormSubmit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
