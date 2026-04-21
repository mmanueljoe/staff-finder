import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './apollo/client';
import router from './router/index'


const pinia = createPinia()


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})


app.use(pinia)
app.use(router).mount('#app')
