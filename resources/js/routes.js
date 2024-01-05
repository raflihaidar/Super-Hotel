import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./page/ExampleComponent.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("./page/AdminPage.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () => import("./page/DashboardPage.vue"),
            },
            {
                path: "room",
                name: "room",
                component: () => import("./page/RoomPage.vue"),
            },
            {
                path: "category",
                name: "category",
                component: () => import("./page/CategoryPage.vue"),
            },
            {
                path: "booking",
                name: "booking",
                component: () => import("./page/BookingPage.vue"),
                children: [
                    {
                        path: "detail-booking",
                        name: "detail-booking",
                        component: () => import("./page/DetailBookingPage.vue"),
                    },
                ],
            },
            {
                path: "staff",
                name: "staff",
                component: () => import("./page/StaffPage.vue"),
            },
            {
                path: "guest",
                name: "guest",
                component: () => import("./page/GuestPage.vue"),
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
