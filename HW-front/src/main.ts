import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
import router from './router'; // Importa o router

const app = createApp(App);

app.use(router); // Adiciona o router à aplicação
app.mount('#app');
