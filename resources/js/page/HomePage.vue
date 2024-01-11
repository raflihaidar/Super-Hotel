<template>
    <NavbarComponent @logout="guestStore.logout" />
    <section
        class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <h1
                class="mb-4 my-20 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Find Your Perfect Place to Stay</h1>
            <form class="w-full" @submit.prevent="checkAvailability">
                <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email
                    sign-up</label>
                <div class="relative bg-white flex justify-between py-8 px-5 rounded-full">
                    <ul class="flex justify-between items-center w-[80%] text-lime-700 gap-x-1">
                        <li class="flex justify-between items-top cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex flex-col">
                                <p class="text-md font-semibold"> Location</p>
                                <p class="text-xs">Indonesia</p>
                            </span>
                            <span class="border-l border-gray-400 h-10 mx-4"></span>
                        </li>
                        <li class="flex justify-between items-top cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path
                                    d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fill-rule="evenodd"
                                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex flex-col items-start" data-dropdown-ignore-click-outside-class="datepicker">
                                <p class="text-md font-semibold"> Check In</p>
                                <input name="start" type="date" class="" v-model="payload.check_in">
                            </span>
                            <span class="border-l border-gray-400 h-10 mx-4"></span>
                        </li>
                        <li class="flex justify-between items-top cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path
                                    d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fill-rule="evenodd"
                                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex flex-col item-start">
                                <p class="text-md font-semibold"> Check Out</p>
                                <input name="start" type="date" class="" v-model="payload.check_out">
                            </span>
                            <span class="border-l border-gray-400 h-10 mx-4"></span>
                        </li>
                        <li class="flex justify-between items-top cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex flex-col item-start" data-dropdown-toggle="dropdown">
                                <p class="text-md font-semibold"> Rooms for</p>
                                <p class="text-xs">{{ quantity.personQuantity }} person</p>
                                <p class="text-xs">{{ quantity.roomQuantity }} room</p>
                            </span>
                            <!-- Dropdown menu -->
                            <div id="dropdown"
                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton">
                                    <li class="flex mt-5">
                                        <p
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Person</p>
                                        <NumberInputComponent inputName="person" @increment="roomStore.incQuantity('room')"
                                            @decrement="roomStore.decQuantity('room')" />
                                    </li>
                                    <li class="flex mt-5">
                                        <p
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Room</p>
                                        <NumberInputComponent inputName="room" @increment="roomStore.incQuantity('person')"
                                            @decrement="roomStore.decQuantity('person')" />
                                    </li>
                                </ul>
                            </div>
                            <span class="border-l border-gray-400 h-10 mx-4"></span>
                        </li>
                    </ul>
                    <button type="submit"
                        class="text-white w-[15%] h-full absolute right-0 top-0 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm py-8 px-5 flex items-center justify-center gap-x-2 rounded-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><span>
                            <SearchIcon />
                        </span>Search</button>
                </div>
            </form>
        </div>
        <div
            class="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0">
        </div>
    </section>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponnet.vue'
import NumberInputComponent from '../components/NumberInputComponent.vue'
import { useGuestStore } from '../store/guest';
import { useRoomStore } from '../store/room';
import { ref } from 'vue'
import SearchIcon from '../icons/SearchIcon.vue';
import { storeToRefs } from 'pinia';

const guestStore = useGuestStore()
const roomStore = useRoomStore()
const { quantity } = storeToRefs(roomStore)

const payload = ref({
    id_status: 1,
    check_in: '',
    check_out: '',
    total: 0
})

console.log(quantity.value.personQuantity)

const checkAvailability = () => {
    roomStore.checkAvailability(payload.value)
}
</script>
