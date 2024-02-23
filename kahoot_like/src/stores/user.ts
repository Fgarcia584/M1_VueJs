import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "firebase/auth";

export const useUserStore = defineStore('user', () => {
    const user = ref({});

    const setUser = (newUser: User ) => {
        user.value = newUser;
    }

    const clearUser = () => {
        user.value = {};
    }

    return {
        user,
        setUser,
        clearUser
    }
});