<script setup>
import { initFlowbite } from 'flowbite';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '../store/global';
import SpinnerComponent from './BaseSpinner.vue';
import BlockIcon from '../../assets/icons/BlockIcon.vue';
import CheckIcon from '../../assets/icons/CheckIcon.vue';
import BaseDropSearch from './BaseDropSearch.vue';

const dropDown1 = ref(false)
const dropDown2 = ref(false)
const store = useGlobalStore()
const { shift, divisi, singleData } = storeToRefs(store)

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



<template>
    <form class="p-10" @submit.prevent="store.updateData(0, singleData)">
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
                <input type="text" id="id" v-model="singleData.id" name="id" disabled
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="nama" v-model="singleData.nama" name="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="input-divisi"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Divisi</label>
                <BaseDropSearch id="dropDownDivisiMenu" label="divisi" :data="divisi" :singleData="singleData.nama_divisi"
                    @addItem="changeDivisi" />
            </div>
            <div>
                <label for="input-shift" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shift</label>
                <BaseDropSearch id="dropDownShiftMenu" label="shift" :data="shift" :singleData="singleData.nama_shift"
                    @addItem="changeShift" />
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
