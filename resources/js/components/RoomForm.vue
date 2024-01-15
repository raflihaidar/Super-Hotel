<script setup>
import { storeToRefs } from 'pinia';
import SpinnerComponent from './BaseSpinner.vue';
import BaseDropSearch from './BaseDropSearch.vue';
import { useGlobalStore } from '../store/global';

const store = useGlobalStore()
const emits = defineEmits(['closeModal'])
const { singleData, category } = storeToRefs(store)

const onChange = (e) => {
    singleData.value.foto_kamar = e.target.files[0]
}

const changeCategory = (item) => {
    singleData.value.kategori = item.nama
    singleData.value.id_kategori = item.id
}
</script>


<template>
    <form class="p-10" @submit.prevent=" store.updateData(4, singleData)">
        <div v-if="singleData.length != 0" class="grid gap-6 mb-6 md:grid-cols-2 items-center">
            <div>
                <label for="room-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Number
                </label>
                <input type="text" id="room-name" v-model="singleData.room_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="input-divisi"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Divisi</label>
                <BaseDropSearch id="dropDownCategoryMenu" label="category" :data="category"
                    :singleData="singleData.kategori" @addItem="changeCategory" />
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
