import { ref } from "vue";
import { defineStore } from "pinia";
import router from "../routes.js";
import Swal from "sweetalert2";

export const useSidebarStore = defineStore(
    "sidebar",
    () => {
        const sidebar = ref([
            {
                name: "Dashboard",
                route: "dashboard",
                status: true,
                hasSubmenu: false,
                submenu: [],
            },
            {
                name: "Master Room",
                route: "",
                status: true,
                hasSubmenu: true,
                submenu: [
                    {
                        name: "Room",
                        route: "room",
                        status: false,
                    },
                    {
                        name: "Category",
                        route: "category",
                        status: false,
                    },
                    {
                        name: "Booking",
                        route: "booking",
                        status: false,
                    },
                ],
            },
            {
                name: "Staff Management",
                route: "",
                status: true,
                hasSubmenu: true,
                submenu: [
                    {
                        name: "Staff",
                        route: "staff",
                        status: false,
                    },
                    {
                        name: "Shift",
                        route: "shift",
                        status: false,
                    },
                    {
                        name: "Divisi",
                        route: "divisi",
                        status: false,
                    },
                ],
            },
            {
                name: "Guest",
                route: "guest",
                status: false,
                hasSubmenu: false,
                submenu: [],
            },
        ]);

        const handleClick = (item) => {
            router.push({ name: item.route });
            sidebar.value.forEach((data) => {
                data.status = data === item;
                data.submenu.forEach((value) => {
                    value.status = false;
                });
            });
        };

        const handleSubmenuClick = (menu, submenu) => {
            router.push({ name: submenu.route });
            sidebar.value.forEach((data) => {
                data.status = data === menu;
                data.submenu.forEach((value) => {
                    value.status = value === submenu;
                });
            });
        };

        const handleSignOut = () => {
            Swal.fire({
                title: "Are you sure to Sign Out ?",
                icon: "question",
                showConfirmButton: true,
                showCancelButton: true,
                cancelButtonText: "Cancel",
                confirmButtonText: "Sign Out",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    router.push({ name: "home" });
                }
            });
        };
        return {
            sidebar,
            handleClick,
            handleSubmenuClick,
            handleSignOut,
        };
    },
    {
        persist: true,
    }
);
