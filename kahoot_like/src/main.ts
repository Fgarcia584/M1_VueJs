import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import the createPinia function
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
 
app.use(pinia)
app.mount('#app')


