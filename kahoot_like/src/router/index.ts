import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("@/views/Home.vue") },
        { path: "/test", component: () => import("@/views/Test.vue") },
        { path: "/register", component: () => import("@/views/Register/index.vue") },
        { path: "/login", component: () => import("@/views/Login/index.vue") },
        { path: "/quiz/add", component: () => import("@/views/Quiz/Add/index.vue") },
        { name: "quiz", path: "/quiz/:id", component: () => import("@/views/Quiz/index.vue"), props: true, meta: { requiresAuth: true } },
    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(getAuth(), (user) => {
            removeListener();
            resolve(user);
        }, reject);
    }
    );
}

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    console.log("userStore2", userStore.user)
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!await getCurrentUser()) {
            next({ path: "/login" });
        } else {
            console.log("user is logged in", userStore.user.value);
            next();
        }
    } else {
        next();
    }
});

export default router;