<script setup>
import NavbarComponent from '../../../components/TheNavbar.vue'
import NumberInputComponent from '../../../components/BaseNumberInput.vue'
import BaseButtonToTop from '../../../components/BaseButtonToTop.vue';
import Index from '../../home/index.vue';
import { useGuestStore } from '../../../store/guest';
import { useRoomStore } from '../../../store/room';
import { ref } from 'vue'
import SearchIcon from '../../../../assets/icons/SearchIcon.vue';
import { storeToRefs } from 'pinia';

const guestStore = useGuestStore()
const roomStore = useRoomStore()
const { quantity } = storeToRefs(roomStore)
const { guestAuth } = storeToRefs(guestStore)


const payload = ref({
    id_status: 1,
    check_in: null,
    check_out: null,
    total: 0,
    id_tamu: null,
    id_kamar: null,
    jumlah_kamar: 0,
    jumlah_tamu: 0,
    tanggal_booking: null,
    subtotal: 0,
    catatan: null
})

const checkAvailability = () => {
    payload.value.jumlah_kamar = quantity.value.roomQuantity
    payload.value.jumlah_tamu = quantity.value.personQuantity
    payload.value.id_tamu = guestAuth.value ? guestAuth.value.id : 0
    roomStore.checkAvailability(payload.value)
}
</script>

<template>
    <NavbarComponent @logout="guestStore.logout" />
    <section class="flex justify-between mt-0">
        <div class="bg-green-900 w-[50%]">
            <div class="w-[80%] mx-auto text-white flex flex-col gap-y-10" div v-motion-fade>
                <h1
                    class="mt-40 text-3xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">
                    Find Your Perfect Place to Stay</h1>
                <p>
                    Raih pengalaman menginap tak terlupakan di Super Hotel - simbol keindahan dan kemewahan di setiap
                    sudutnya.
                </p>
                <span class="flex gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                        <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                            clip-rule="evenodd" />
                    </svg>
                    <p>Watch Video</p>
                </span>
            </div>
        </div>
        <div class="py-8 px-4 home-background h-screen text-center lg:py-16 z-10 w-[50%]">
        </div>
        <form class="w-[85%] mx-auto absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 "
            @submit.prevent="checkAvailability">
            <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email
                sign-up</label>
            <div class="relative bg-white flex justify-between py-8 px-5 rounded-full">
                <ul class="flex justify-around items-center w-[80%] text-lime-700">
                    <li class="flex justify-between items-center cursor-pointer gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="flex flex-col">
                            <p class="text-md font-semibold"> Location</p>
                            <p class="text-xs">Indonesia</p>
                        </span>
                        <span class="border-l border-gray-400 h-20 mx-16"></span>
                    </li>
                    <li class="flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            <path fill-rule="evenodd"
                                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="flex flex-col items-center">
                            <p class="text-md font-semibold justify-center">Check In</p>
                            <input name="check-in" type="date" class="border-none outline-none text-center"
                                v-model="payload.check_in">
                        </span>
                        <span class="border-l border-gray-400 h-20  mx-16"></span>
                    </li>
                    <li class="flex justify-between items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            <path fill-rule="evenodd"
                                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="flex flex-col items-center">
                            <p class="text-md font-semibold"> Check Out</p>
                            <input name="check-out" type="date" class="border-none outline-none text-center"
                                v-model="payload.check_out">
                        </span>
                        <span class="border-l border-gray-400 h-20  mx-16"></span>
                    </li>
                    <li class="flex justify-between items-center cursor-pointer gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="flex flex-col item-start" data-dropdown-toggle="dropdown">
                            <p class="text-md font-semibold"> Rooms for</p>
                            <p class="text-xs">{{ quantity.roomQuantity }} room</p>
                            <p class="text-xs">{{ quantity.personQuantity }} person</p>
                        </span>
                        <!-- Dropdown menu -->
                        <div id="dropdown"
                            class="z-10 hidden bg-white divide-y divide-gray-100 px-5 rounded-lg shadow w-56 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton">
                                <li class="flex mt-5">
                                    <p
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Room</p>
                                    <NumberInputComponent inputName="person" @increment="roomStore.incQuantity('room')"
                                        @decrement="roomStore.decQuantity('room')" />
                                </li>
                                <li class="flex mt-5">
                                    <p
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Person</p>
                                    <NumberInputComponent inputName="room" @increment="roomStore.incQuantity('person')"
                                        @decrement="roomStore.decQuantity('person')" />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <button type="submit"
                    class="text-white w-[15%] h-full absolute right-0 top-0 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm py-8 px-5 flex items-center justify-center gap-x-2 rounded-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><span>
                        <SearchIcon />
                    </span>Search</button>
            </div>
        </form>
        <BaseButtonToTop />
    </section>
    <section>
        <Index />
    </section>
</template>


<style>
.home-background {
    background-image: url('../../../../assets/image-home.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}
</style>
