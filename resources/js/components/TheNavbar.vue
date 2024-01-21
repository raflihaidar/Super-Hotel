<script setup>
import { onMounted, ref } from "vue";
import { useGuestStore } from "../store/guest";
import { storeToRefs } from "pinia";
import router from "../routes";
import { useBookingStore } from "../store/booking";

const imageProfile = ref(null)
const guestStore = useGuestStore()
const bookingStore = useBookingStore()
const { guestAuth } = storeToRefs(guestStore)
const openDropDown = ref(false)
const emits = defineEmits(['logout'])

const handleLogout = () => {
    emits('logout')
}

const handleBack = () => {
    router.go(-1)
    console.log("connect")
}

const viewBookingHistory = () => {
    bookingStore.viewHistoryBooking(guestAuth.value.id)
}

const handleOpenDropDown = () => {
    window.addEventListener('click', (event) => {
        console.log(imageProfile.value)
        if (event.target === imageProfile.value) {
            openDropDown.value = !openDropDown.value
        } else {
            openDropDown.value = false
        }
        console.log("status", openDropDown.value)
    })
}

onMounted(() => {
    handleOpenDropDown()
})
</script>

<template>
    <nav
        class="fixed top-0 z-50 w-full bg-green-700 text-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end cursor-pointer" @click="handleBack">
                    <button type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <p class="flex items-center ms-2 md:me-24">
                        <img src="../../assets/logo.png" class="w-10 h-10 text-center" alt="Super Hotel Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Super
                            Hotel</span>
                    </p>
                </div>
                <div class="flex items-center relative">
                    <div class="flex items-center ms-3" v-if="guestAuth">
                        <div class="flex justify-center items-center gap-x-3">
                            <p class="text-semibold">{{ guestAuth.username }}</p>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" ref="imageProfile"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                            </button>
                        </div>
                        <div v-if="openDropDown"
                            class="z-50 my-4 absolute top-7 -right-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div class="px-4 py-3" role="none">
                                <p class="text-sm text-gray-900 dark:text-white" role="none">
                                    {{ guestAuth.nama }}
                                </p>
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    {{ guestAuth.email }}
                                </p>
                            </div>
                            <ul class="py-1" role="none">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Settings</a>
                                </li>
                                <router-link :to="{ name: 'bookings', params: { id: guestAuth.id } }"
                                    @click="viewBookingHistory">
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Bookings</a>
                                </router-link>
                                <li>
                                    <a href="#" @click="handleLogout"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-2 cursor-pointer font-semibold" v-else>
                        <router-link :to="{ name: 'sign-in' }" class="hover:underline">Login</router-link>
                        <span>/</span>
                        <router-link :to="{ name: 'sign-up' }" class="hover:underline">Daftar</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
