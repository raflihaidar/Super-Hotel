import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import routes from "./routes.js";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(routes);
app.use(MotionPlugin, {
    directives: {
        "from-bottom": {
            initial: {
                opacity: 0,
                y: 100,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 200,
                },
            },
        },
        "from-right": {
            initial: {
                opacity: 0,
                x: 100,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: 200,
                },
            },
        },
    },
});
app.mount("#app");
