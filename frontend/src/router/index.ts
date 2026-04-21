import { createRouter, createWebHistory } from "vue-router";
import EmployeesView from "../views/EmployeesView.vue";
import UploadView from "../views/UploadView.vue";
import MatchView from "../views/MatchView.vue";

const routes = [
  { path: "/", component: EmployeesView },
  {path: "/profile/:id", component: () => import("../views/ProfileView.vue"), props: true},
  { path: "/upload", component: UploadView },
  { path: "/match", component: MatchView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
