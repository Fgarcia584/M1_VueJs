import { defineStore } from "pinia";
import { ref } from "vue";
import { GoogleAuthProvider, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/main";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('authStore', () => {
    let user = ref();

    const router = useRouter();

    interface Credentials {
        email: string;
        password: string;
    }


    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            if (userDetails) {
                // User is signed in.
                user.value = {
                    uid: userDetails.uid,
                    email: userDetails.email,
                    displayName: userDetails.displayName,
                    photoURL: userDetails.photoURL
                };
            } else {
                // No user is signed in.
                user.value = {};
                router.push('/login');  
            }
        });
    }

    const registerUser = (credentials: Credentials) => {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                user.value = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                console.log(error.message);
                // ..
            });
    };

    const loginUser = (credentials: Credentials) => {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                user.value = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                handleErrors(error)
            });
    };

    const loginUserWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                user.value = result.user;
                router.push('/');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                handleErrors(error)
            });
    }

    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('loggedout');
                // Sign-out successful.
            })
            .catch((error) => {
                handleErrors(error)
            });
    };

    const handleErrors = (error: any) => {
        switch (error.code) {
            case 'auth/email-already-in-use':
                // ErrorMsg.value = 'Email already in use';
                break;
            case 'auth/invalid-email':
                // ErrorMsg.value = 'Invalid email';
                break;
            case 'auth/weak-password':
                // ErrorMsg.value = 'Weak password';
                break;
            default:
                // ErrorMsg.value = 'An error occurred';
                break;
        }
    }

    return {
        user,
        init,
        loginUser,
        loginUserWithGoogle,
        registerUser,
        logoutUser
    }
});