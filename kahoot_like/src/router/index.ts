import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue") },
        { path: "/test", component: () => import("../views/Test.vue") },
        { path: "/register", component: () => import("../views/Register/index.vue") },
        { path: "/login", component: () => import("../views/Login/index.vue") },
        { path: "/quiz/add", component: () => import("../views/Quiz/Add/index.vue") },
        // { path: "/quiz/:id", component: () => import("../views/Quiz.vue") },
    ],
});

export default router;