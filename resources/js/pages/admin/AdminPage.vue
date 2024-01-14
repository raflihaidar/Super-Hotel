<script setup>
import { ref } from "vue";
import router from '../../routes'
import Swal from "sweetalert2";

const handleClick = (item) => {
    router.push({ name: item.route })
    sidebar.value.forEach((data) => {
        data.status = data === item
        data.submenu.forEach((value) => {
            value.status = false
        })
    })
}

const handleSubmenuClick = (menu, submenu) => {
    router.push({ name: submenu.route })
    sidebar.value.forEach((data) => {
        data.status = data === menu
        data.submenu.forEach((value) => {
            value.status = value === submenu
        })
    })
}

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
            router.push({ name: 'home' })
        }
    });
}

const sidebar = ref([
    {
        name: 'Dashboard',
        route: 'dashboard',
        status: true,
        hasSubmenu: false,
        submenu: [],
    },
    {
        name: 'Master Room',
        route: '',
        status: true,
        hasSubmenu: true,
        submenu: [
            {
                name: 'Room',
                route: 'room',
                status: false,

            },
            {
                name: 'Category',
                route: 'category',
                status: false,

            },
            {
                name: 'Booking',
                route: 'booking',
                status: false,
            },
        ],
    },
    {
        name: 'Staff Management',
        route: '',
        status: true,
        hasSubmenu: true,
        submenu: [
            {
                name: 'Staff',
                route: 'staff',
                status: false,

            },
            {
                name: 'Shift',
                route: 'shift',
                status: false,

            },
            {
                name: 'Divisi',
                route: 'divisi',
                status: false,

            }
        ],
    },
    {
        name: 'Guest',
        route: 'guest',
        status: false,
        hasSubmenu: false,
        submenu: [],
    }])
</script>
<template>
    <nav
        class="fixed top-0 z-50 w-full bg-green-700 text-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="sidebar-multi-level-sidebar"
                        data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <a href="#" class="flex ms-2 md:me-24">
                        <img src="../../../assets/logo.png" class="w-10 h-10 text-center" alt="Super Hotel Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Super
                            Hotel</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                            </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown-user">
                            <div class="px-4 py-3" role="none">
                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                    Neil Sims
                                </p>
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul class="py-1" role="none">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Earnings</a>
                                </li>
                                <li @click="handleSignOut">
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium" v-for="(item, index) in sidebar" :key="index">
                <router-link :to="{ name: item.route }" v-if="!item.hasSubmenu" @click="handleClick(item)"
                    :class="item.status ? 'bg-green-700 text-white hover:bg-green-900' : ''"
                    class="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <!-- <component :is="item.icon"
                        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true" /> -->
                    <span class="ms-3">{{ item.name }}</span>
                </router-link>
                <li v-else>
                    <button type="button"
                        class="flex items-center  w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        :aria-controls="'dropdown ' + item.name" :data-collapse-toggle="'dropdown ' + item.name">
                        <!-- <component :is="item.icon"
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" /> -->
                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.name }}</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <ul :id="'dropdown ' + item.name" class="hidden py-2 space-y-2">
                        <li v-for="(value, submenuIndex) in item.submenu" :key="submenuIndex"
                            @click="handleSubmenuClick(item, value)">
                            <router-link :to="{ name: value.route }"
                                :class="value.status ? 'bg-green-700 text-white hover:bg-green-900' : ''"
                                class="flex items-center  w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{
                                    value.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>

    <div class="p-4 sm:ml-64">
        <div class="p-4 mt-14">
            <router-view></router-view>
        </div>
    </div>
</template>
