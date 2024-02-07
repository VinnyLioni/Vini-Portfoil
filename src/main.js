import { createApp } from "vue";
import "./style.css";
import router from "./router/router.js";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/fontawesome/all.js";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
