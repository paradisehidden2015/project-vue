import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: App },
  {
    path: "/weather",
    name: "Weather",
    component: () =>
      import(/*webpackChunkName:"Weather"*/ "../views/Weather.vue"),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
      import(/*webpackChunkName:"Calculator"*/ "../views/Calculator.vue"),
  },
  {
    path: "/selection",
    name: "Selection",
    component: () =>
      import(/*webpackChunkName:"Selection"*/ "../views/Selection.vue"),
  },
  {
    path: "/coin",
    name: "Coin",
    component: () => import(/*webpackChunkName:"Coin"*/ "../views/Coin.vue"),
  },
  {
    path: "/reaction",
    name: "Reaction",
    component: () =>
      import(/*webpackChunkName:"Reaction"*/ "../views/Reaction/Reaction.vue"),
  },
  {
    path: "/formSubmit",
    name: "FormSubmit",
    component: () =>
      import(/*webpackChunkName:"FormSubmit"*/ "../views/FormSubmit.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import(/*webpackChunkName:"Todo"*/ "../views/Todo.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
