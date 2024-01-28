<script setup>
import { storeToRefs } from 'pinia';
import { useRoomStore } from '../../../../store/room';
import { useGuestStore } from '../../../../store/guest';
import NavbarComponnet from '../../../../components/TheNavbar.vue';
import RatingComponent from '../../../../components/BaseRating.vue'
import { initFlowbite } from 'flowbite';
import { useBookingStore } from '../../../../store/booking';
import { onMounted, ref } from 'vue';
import router from '../../../../routes'

const roomStore = useRoomStore()
const guestStore = useGuestStore()
const bookingStore = useBookingStore()
const { category, searchField, quantity } = storeToRefs(roomStore)
const { guestAuth } = storeToRefs(guestStore)

const id_kategori = ref(null)

const handleClick = (item) => {
    id_kategori.value = item.id
    searchField.value.subtotal = item.harga
}

const createBooking = async () => {
    const id_kamar = await roomStore.getRoomId(id_kategori.value)
    searchField.value.id_kategori = id_kategori.value
    searchField.value.id_kamar = id_kamar
    console.log(searchField.value)
    await bookingStore.addData(searchField.value)
}

onMounted(() => {
    initFlowbite()
})

</script>

<template>
    <div>
        <NavbarComponnet />
        <section class="my-28 w-[80%] mx-auto">
            <div class="grid grid-cols-1 w-full gap-y-5">
                <template v-if="category?.length">
                    <div v-for="(item, index) in category" :key="index"
                        class="flex justify-between items-center w-full gap-x-5">
                        <img :src="'/storage/' + item.foto" alt="image-category" class="w-[30%] rounded-lg">
                        <div class="flex flex-col gap-y-2 w-[35%]">
                            <p class="text-2xl font-semibold">{{ item.nama }}</p>
                            <p class="text-xs">{{ item.fasilitas }}</p>
                            <RatingComponent />
                        </div>
                        <div class="flex flex-col items-end gap-y-10 w-[35%]">
                            <span>
                                <p class="text-lg">Rp {{ item.harga }}</p>
                                <p class="text-xs text-right mt-2">Harga/malam</p>
                            </span>
                            <button type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                                @click="handleClick(item)"
                                class="text-white items-end bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Tentukan
                                Tanggal</button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div
                        class="my-40 text-center text-red-500 text-2xl font-semibold border-green-500 border-2 py-20 rounded-3xl">
                        <p>Tidak Ada Kamar yang Tersedia</p>
                    </div>
                </template>
            </div>
        </section>
        <div id="crud-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Book
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form class="p-4 md:p-5" @submit.prevent="createBooking">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                <input type="text" name="name" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" disabled :value="guestAuth.nama">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="check-in"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check In</label>
                                <input type="date" id="check-in" :value="searchField.check_in"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    disabled>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="check-out"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check Out</label>
                                <input type="date" id="check-out" :value="searchField.check_out"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    disabled>
                            </div>
                            <div class="col-span-2">
                                <label for="room"
                                    class="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white">Room</label>
                                <input type="text" name="name" id="name" :value="quantity.roomQuantity"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" disabled>
                            </div>
                            <div class="col-span-2">
                                <label for="person"
                                    class="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white">Person</label>
                                <input type="text" name="person" id="person" :value="quantity.personQuantity"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" disabled>
                            </div>
                            <div>
                                <label for="message"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                                <textarea id="message" rows="4" v-model="searchField.catatan"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."></textarea>
                            </div>
                        </div>
                        <button type="submit" data-modal-hide="crud-modal"
                            class="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
