import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./pages/admin/booking/create.vue"),
    },
    {
        path: "/result",
        name: "result",
        component: () => import("./pages/admin/booking/ResultPage.vue"),
    },
    {
        path: "/bookings/:id",
        name: "bookings",
        component: () => import("./pages/admin/booking/HistoryBookingPage.vue"),
    },
    {
        path: "/sign-up",
        name: "sign-up",
        component: () => import("./pages/authentification/SignUpPage.vue"),
    },
    {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("./pages/authentification/SignInPage.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("./pages/admin/AdminPage.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () => import("./pages/admin/dashboard/index.vue"),
            },
            {
                path: "room",
                name: "room-parent",
                component: () => import("./pages/admin/room/RoomPage.vue"),
                children: [
                    {
                        path: "",
                        name: "room",
                        component: () => import("./pages/admin/room/index.vue"),
                    },
                    {
                        path: "add-room",
                        name: "add-room",
                        component: () =>
                            import("./pages/admin/room/partials/RoomForm.vue"),
                    },
                ],
            },
            {
                path: "category",
                name: "category-parent",
                component: () =>
                    import("./pages/admin/category/CategoryPage.vue"),
                children: [
                    {
                        path: "",
                        name: "category",
                        component: () =>
                            import("./pages/admin/category/index.vue"),
                    },
                    {
                        path: "add-category",
                        name: "add-category",
                        component: () =>
                            import(
                                "./pages/admin/category/partials/CategoryForm.vue"
                            ),
                    },
                ],
            },
            {
                path: "booking",
                name: "booking",
                component: () => import("./pages/admin/booking/index.vue"),
            },
            {
                path: "staff",
                name: "staff-parent",
                component: () => import("./pages/admin/staff/StaffPage.vue"),
                children: [
                    {
                        path: "",
                        name: "staff",
                        component: () =>
                            import("./pages/admin/staff/index.vue"),
                    },
                    {
                        path: "add-staff",
                        name: "add-staff",
                        component: () =>
                            import(
                                "./pages/admin/staff/partials/StaffForm.vue"
                            ),
                    },
                ],
            },
            {
                path: "guest",
                name: "guest",
                component: () => import("./pages/admin/guest/index.vue"),
            },
            {
                path: "shift",
                name: "shift-parent",
                component: () => import("./pages/admin/shift/ShiftPage.vue"),
                children: [
                    {
                        path: "",
                        name: "shift",
                        component: () =>
                            import("./pages/admin/shift/index.vue"),
                    },
                    {
                        path: "add-shift",
                        name: "add-shift",
                        component: () =>
                            import(
                                "./pages/admin/shift/partials/ShiftForm.vue"
                            ),
                    },
                ],
            },
            {
                path: "divisi",
                name: "divisi-parent",
                component: () =>
                    import("./pages/admin/division/DivisionPage.vue"),
                children: [
                    {
                        path: "",
                        name: "divisi",
                        component: () =>
                            import("./pages/admin/division/index.vue"),
                    },
                    {
                        path: "add-divisi",
                        name: "add-divisi",
                        component: () =>
                            import(
                                "./pages/admin/division/partials/DivisiForm.vue"
                            ),
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
