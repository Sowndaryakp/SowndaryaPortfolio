import { createWebHistory, createRouter } from "vue-router";

import Tabs from "../views/Tabs.vue";

const routes = [

  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;