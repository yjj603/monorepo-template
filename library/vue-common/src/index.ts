import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'vue-global-api'
import 'element-plus/dist/index.css'
import type {ComponentOptions} from "vue";
import type {Router} from "vue-router";

export function createVue(App:ComponentOptions,router:Router){
    const app = createApp(App)
    app.use(ElementPlus)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
}

