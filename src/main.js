import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/app.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAt, faAward, faBolt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faAt, faAward, faBolt, faExclamationCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.config.productionSourceMap = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");