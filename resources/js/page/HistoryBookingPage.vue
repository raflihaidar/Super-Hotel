<template>
    <div>
        <NavigationComponent />
        <div class="my-20 w-[80%] absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="#" v-for="(item, index) in  detailBooking " :key="index"
                class="flex flex-col justify-between w-[100%] p-5 relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex justify-center">
                    <img class="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        :src="'/storage/' + item.foto" alt="image category">
                    <div class="flex flex-col justify-between p-4 leading-normal text-sm">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.kategori }}
                        </h5>
                        <p class="font-bold"><span>Fasilitas :</span>{{ item.fasilitas }}</p>
                        <p><span class="font-bold">Check in : </span>{{ item.check_in }}</p>
                        <p><span class="font-bold">Check out : </span>{{ item.check_out }}</p>
                        <p><span class="font-bold">Tanggal booking : </span>{{ item.tanggal_booking }}</p>
                    </div>
                    <div class="absolute top-0 right-0 p-2">
                        <button class="text-lime-600 font-bold">view invoice</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import NavigationComponent from '../components/NavbarComponnet.vue'
import { useBookingStore } from '../store/booking';

const bookingStore = useBookingStore()
const { detailBooking } = storeToRefs(bookingStore)
onMounted(() => {
    initFlowbite()
})
</script>
