<template>
    <form class="p-10" @submit.prevent="updateData(singleData)">
        <div v-if="singleData.length != 0" class="grid gap-6 mb-6 md:grid-cols-2 items-center">
            <div>
                <img :src="'/storage/' + singleData.foto" alt="Image Room">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="image">Upload
                    file</label>
                <input @change="onChange" name="image"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image" type="file">
            </div>
            <div>
                <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID Guest
                </label>
                <input type="text" id="id" v-model="singleData.id" disabled
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="nama" v-model="singleData.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="divisi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Divisi</label>
                <div class="flex justify-between">
                    <input type="text" id="divisi" v-model="singleData.nama_divisi"
                        class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required disabled>
                    <button id="dropDownDivisiMenu" @click="dropDown1 = !dropDown1"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 4 15">
                            <path
                                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                    </button>
                </div>

                <!-- Dropdown menu -->
                <div id="menu-divisi" class="z-10 absolute top-45 left-6 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
                    v-if="dropDown1">
                    <div class="p-3">
                        <label class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text"
                                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search user">
                        </div>
                    </div>
                    <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="idComponent">
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                                v-for="(item, index) in divisi" :key="index" @click="changeDivisi(item)">
                                <p class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                    {{ item.nama }}</p>
                            </div>
                        </li>
                    </ul>
                    <a href="#"
                        class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 18">
                            <path
                                d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
                        </svg>
                        Delete user
                    </a>
                </div>

            </div>
            <div>
                <label for="shift" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shift</label>
                <div class="flex justify-between">
                    <input type="text" id="shift" v-model="singleData.nama_shift"
                        class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required disabled>
                    <button id="dropDownShiftMenu" @click="dropDown2 = !dropDown2"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 4 15">
                            <path
                                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                    </button>
                </div>
                <!-- Dropdown menu -->
                <div id="menu-shift" class="z-10 absolute top-45 right-8 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
                    v-if="dropDown2">
                    <div class="p-3">
                        <label class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text"
                                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search user">
                        </div>
                    </div>
                    <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="idComponent">
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                                v-for="(item, index) in shift" :key="index" @click="changeShift(item)">
                                <p class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                    {{ item.nama }}</p>
                            </div>
                        </li>
                    </ul>
                    <a href="#"
                        class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 18">
                            <path
                                d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
                        </svg>
                        Delete user
                    </a>
                </div>
            </div>
            <div>
                <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <div class="flex justify-between gap-x-2">
                    <input type="text" id="status" v-model="singleData.nama_status" @click="changeStatus" disabled
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                    <span class="p-2 bg-red-600 cursor-pointer text-white rounded-lg" @click="changeStatus"
                        v-if="singleData.id_status == 1">
                        <BlockIcon />
                    </span>
                    <span v-else class="p-2 bg-green-400 cursor-pointer text-white rounded-lg" @click="changeStatus">
                        <CheckIcon />
                    </span>
                </div>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="email" v-model="singleData.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
        </div>
        <div v-else>
            <SpinnerComponent />
        </div>
        <button type="submit" data-modal-hide="form-staff"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </form>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useStaffStore } from '../store/staff';
import SpinnerComponent from './SpinnerComponent.vue';
import BlockIcon from '../icons/BlockIcon.vue';
import CheckIcon from '../icons/CheckIcon.vue';
import { useShiftStore } from '../store/shift';
import { useDivisiStore } from '../store/divisi';

const dropDown1 = ref(false)
const dropDown2 = ref(false)

const staffStore = useStaffStore()
const shiftStore = useShiftStore()
const divisiStore = useDivisiStore()
const emits = defineEmits(['closeModal'])
const { singleData } = storeToRefs(staffStore)
const { shift } = storeToRefs(shiftStore)
const { divisi } = storeToRefs(divisiStore)

const updateData = (payload) => {
    emits('closeModal')
    staffStore.updateData(payload)
    console.log(singleData.value)
}

const changeShift = (item) => {
    singleData.value.nama_shift = item.nama
    singleData.value.id_shift = item.id
}

const changeDivisi = (item) => {
    singleData.value.nama_divisi = item.nama
    singleData.value.id_divisi = item.id
}

const changeStatus = () => {
    if (singleData.value.id_status == 1) {
        singleData.value.id_status = 2;
        singleData.value.nama_status = "Inactive"
    } else {
        singleData.value.id_status = 1;
        singleData.value.nama_status = "Active"
    }
}

onMounted(() => {
    initFlowbite()
})
</script>
