import { createRouter, createWebHistory } from "vue-router";
import { ProductPage, ErrorPage } from "../pages";

const routes = [
    { path: "/", component: ProductPage },
    { path: "/:pathMatch(.*)", component: ErrorPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
