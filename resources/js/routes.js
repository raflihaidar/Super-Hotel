import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: import("./page/ExampleComponent.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: import("./page/AdminPage.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () => import("./page/DashboardPage.vue"),
            },
            {
                path: "guest",
                name: "guest",
                component: () => import("./page/GuestPage.vue"),
            },
            {
                path: "staff",
                name: "staff",
                component: () => import("./page/StaffPage.vue"),
            },
            {
                path: "shift",
                name: "shift",
                component: () => import("./page/ShiftPage.vue"),
            },
            {
                path: "division",
                name: "division",
                component: () => import("./page/DivisionPage.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
