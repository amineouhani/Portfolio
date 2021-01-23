import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLinkedin,
    faGithub,
    faHtml5,
    faPhp,
    faJs,
    faVuejs,
    faReact,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faAt,
    faAward,
    faBolt,
    faCode,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faGithub,
    faLinkedin,
    faAt,
    faAward,
    faBolt,
    faExclamationCircle,
    faHtml5,
    faPhp,
    faJs,
    faVuejs,
    faReact,
    faCss3,
    faCode
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.config.productionSourceMap = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");