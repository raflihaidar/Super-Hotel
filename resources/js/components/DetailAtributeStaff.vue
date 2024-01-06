<template>
    <form class="p-10" @submit.prevent="formName === 'shift' ? updateDataShift(singleData) : updateDataDivisi(singleData)">
        <div v-if="singleData.length != 0" class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID
                </label>
                <input type="text" id="visitors" v-model="singleData.id" disabled
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input type="text" id="first_name" v-model="singleData.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required>
            </div>

            <div v-if="formName === 'shift'">
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jam
                    Masuk</label>
                <div class="flex justify-between">
                    <input type="text" id="last_name" v-model="singleData.jam_masuk"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required>
                </div>
            </div>
            <div v-if="formName === 'shift'">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jam
                    Keluar</label>
                <div class="flex justify-between">
                    <input type="text" id="company" v-model="singleData.jam_keluar"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        required>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComponent />
        </div>
        <button type="submit" :data-modal-hide="formName === 'shift' ? 'form-shift' : 'form-attribute'"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </form>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, toRefs } from 'vue';
import { useShiftStore } from '../store/shift';
import { useDivisiStore } from '../store/divisi';
import SpinnerComponent from './SpinnerComponent.vue';
import { useGlobalStore } from '../store/global';
import { initFlowbite } from 'flowbite';

const shiftStore = useShiftStore()
const divisiStore = useDivisiStore()
const globalStore = useGlobalStore()
const props = defineProps({
    formName: String
})
const emits = defineEmits(['closeModal'])
const { singleData } = storeToRefs(globalStore)
const { formName } = toRefs(props)

const updateDataShift = (payload) => {
    emits('closeModal')
    shiftStore.updateData(payload)
}

const updateDataDivisi = (payload) => {
    emits('closeModal')
    divisiStore.updateData(payload)
}

onMounted(() => {
    initFlowbite()
})

</script>
