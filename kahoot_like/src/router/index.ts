import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue") },
        { path: "/test", component: () => import("../views/Test.vue") },
        { path: "/register", component: () => import("../views/Register/index.vue") },
        { path: "/login", component: () => import("../views/Login/index.vue") },
        // { path: "/quizz/:id", component: () => import("../views/Quizz.vue") },
    ],
});

export default router;