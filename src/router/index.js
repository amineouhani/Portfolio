import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projet from "../views/Projet.vue";
import Skills from "../views/Skills.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/projet",
        name: "Projet",
        component: Projet,
        meta: {
            title: "My projets",
        },
    },
    {
        path: "/skills",
        name: "SKills",
        component: Skills,
        meta: {
            title: "Skills",
        },
    },
    {
        path: "*",
        name: "Not Found",
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;