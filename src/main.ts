
import { createApp } from "vue";
import {Router} from '@/routes'
import {Store} from '@/store'
import App from "./App.vue";

const app = createApp(App)
app.use(Router);
app.use(Store);
app.mount("#app");
