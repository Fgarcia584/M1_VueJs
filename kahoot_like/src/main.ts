import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import the createPinia function
import './style.css'
import App from './App.vue'
import router from './router' // Import the router module

const pinia = createPinia()
const app = createApp(App)
 
app.use(pinia)
app.use(router)
app.mount('#app')


