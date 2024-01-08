<template>
    <form class="p-10" @submit.prevent="updateData(singleData)">
        <div v-if="singleData.length != 0" class="grid gap-6 mb-6 md:grid-cols-2 items-center">
            <div>
                <img :src="'/storage/' + singleData.foto_kamar" alt="Image Room">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="image">Upload
                    file</label>
                <input @change="onChange" name="image"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image" type="file">
            </div>
            <div>
                <label for="room-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Number
                </label>
                <input type="text" id="room-name" v-model="singleData.room_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="id_kategori"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <input type="text" id="id_kategori" v-model="singleData.kategori"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required disabled>
            </div>

            <div>
                <label for="fasilitas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fasility</label>
                <div class="flex justify-between">
                    <input type="text" id="fasilitas" v-model="singleData.fasilitas"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required disabled>
                </div>
            </div>
            <div>
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <div class="flex justify-between">
                    <input type="text" id="price" v-model="singleData.harga"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required disabled>
                </div>
            </div>
            <div>
                <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <div class="flex justify-between">
                    <input type="text" id="status" v-model="singleData.status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required disabled>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComponent />
        </div>
        <button type="submit" data-modal-hide="form-room"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </form>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import SpinnerComponent from './SpinnerComponent.vue';
import { useGlobalStore } from '../store/global';
import { initFlowbite } from 'flowbite';
import { useRoomStore } from '../store/room';

const globalStore = useGlobalStore()
const roomStore = useRoomStore()
const emits = defineEmits(['closeModal'])
const { singleData } = storeToRefs(globalStore)

const onChange = (e) => {
    singleData.value.foto_kamar = e.target.files[0]
}

const updateData = (payload) => {
    roomStore.updateData(payload)
}

onMounted(() => {
    initFlowbite()
})

</script>
