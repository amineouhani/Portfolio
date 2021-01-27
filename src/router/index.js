import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Blog from "../views/Blog.vue";
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
        path: "/projects",
        name: "Projects",
        component: Project,
        meta: {
            title: "My Projects",
        },
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
        meta: {
            title: "Skills",
        },
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        meta: {
            title: "Blog",
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