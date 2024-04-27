import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerPlugins } from "./plugins";
import { createPinia } from "pinia";
import "./assets/css/style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

registerPlugins(app);

const store = createPinia();

app.use(router).use(store).use(Toast).mount("#app");
