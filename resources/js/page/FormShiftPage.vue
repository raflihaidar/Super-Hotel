<template>
    <div class="w-[80%] mx-auto">
        <div v-if="statusInput">
            <AlertSuccesComponent />
        </div>
        <form action="" class="grid grid-cols-1 gap-y-3" @submit.prevent="addData" enctype="multipart/form-data">
            <p class="text-3xl font-bold mb-5">Input New Shift</p>
            <div class="mb-5">
                <label for="input-nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="input-nama" v-model="payload.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            </div>
            <div class="mb-5">
                <label for="input-jam-masuk" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entry
                    Time</label>
                <input type="text" id="input-jam-masuk" v-model="payload.jam_masuk"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    required>
            </div>
            <div class="mb-5">
                <label for="input-jam-keluar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exit
                    Time</label>
                <input type="text" id="input-jam-keluar" v-model="payload.jam_keluar"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    required>
            </div>

            <div class="gap-x-10">
                <button type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
                <button type="submit"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useShiftStore } from '../store/shift';
import AlertSuccesComponent from '../components/AlertSuccesComponent.vue';
import AlertErrorComponent from '../components/AlertErrorComponent.vue'

const shiftStore = useShiftStore()
const statusInput = ref(null)
const payload = ref({
    nama: "",
    jam_masuk: "",
    jam_keluar: ""
})
const addData = async () => {
    statusInput.value = await shiftStore.addData(payload.value)
}

</script>

