import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import the createPinia function
import './style.css'
import App from './App.vue'
import router from './router' // Import the router module
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyCRV-1BQnaKE6nKT-h0N-l-mKbSNhMSi4I",

  authDomain: "kahoot-like-f3d7e.firebaseapp.com",

  projectId: "kahoot-like-f3d7e",

  storageBucket: "kahoot-like-f3d7e.appspot.com",

  messagingSenderId: "101671170513",

  appId: "1:101671170513:web:90fd177f7bcc13197e30f0"

};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const db = getFirestore(firebase)
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const pinia = createPinia()
const app = createApp(App)
 
app.use(pinia)
app.use(router)
app.mount('#app')

export { auth, db, googleProvider }
