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
                name: "room-parent",
                component: () => import("./page/RoomPage.vue"),
                children: [
                    {
                        path: "",
                        name: "room",
                        component: () => import("./page/RoomViewPage.vue"),
                    },
                    {
                        path: "add-room",
                        name: "add-room",
                        component: () => import("./page/FormRoomPage.vue"),
                    },
                ],
            },
            {
                path: "category",
                name: "category-parent",
                component: () => import("./page/CategoryPage.vue"),
                children: [
                    {
                        path: "",
                        name: "category",
                        component: () => import("./page/CategoryViewPage.vue"),
                    },
                    {
                        path: "add-category",
                        name: "add-category",
                        component: () => import("./page/FormCategoryPage.vue"),
                    },
                ],
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
                name: "staff-parent",
                component: () => import("./page/StaffPage.vue"),
                children: [
                    {
                        path: "",
                        name: "staff",
                        component: () => import("./page/StaffViewPage.vue"),
                    },
                    {
                        path: "add-staff",
                        name: "add-staff",
                        component: () => import("./page/FormStaffPage.vue"),
                    },
                ],
            },
            {
                path: "guest",
                name: "guest",
                component: () => import("./page/GuestPage.vue"),
            },
            {
                path: "shift",
                name: "shift-parent",
                component: () => import("./page/ShiftPage.vue"),
                children: [
                    {
                        path: "",
                        name: "shift",
                        component: () => import("./page/ShiftViewPage.vue"),
                    },
                    {
                        path: "add-shift",
                        name: "add-shift",
                        component: () => import("./page/FormShiftPage.vue"),
                    },
                ],
            },
            {
                path: "divisi",
                name: "divisi-parent",
                component: () => import("./page/DivisionPage.vue"),
                children: [
                    {
                        path: "",
                        name: "divisi",
                        component: () => import("./page/DivisiViewPage.vue"),
                    },
                    {
                        path: "add-divisi",
                        name: "add-divisi",
                        component: () => import("./page/FormDivisiPage.vue"),
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
