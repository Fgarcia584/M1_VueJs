import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/user";
import { auth } from "@/main";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("@/views/Home.vue") },
        { path: "/test", component: () => import("@/views/Test.vue") },
        { path: "/register", component: () => import("@/views/Register/index.vue") },
        { path: "/login", component: () => import("@/views/Login/index.vue") },
        { path: "/quiz/add", component: () => import("@/views/Quiz/Add/index.vue"), meta: { requiresAuth: true } },
        { name: "quiz", path: "/quiz/:id", component: () => import("@/views/Quiz/index.vue"), props: true, meta: { requiresAuth: true } },
    ],
});



router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
        console.log("user is not logged in");
        next({ path: "/login" });
        return
    }
    next();

});

export default router;