<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '../../../../store/global';
import router from '../../../../routes';
import AlertSuccesComponent from '../../../../components/BaseAlertSucces.vue';

const store = useGlobalStore()
const payload = ref({
    nama: "",
})
const statusInput = ref(null)
const addData = async () => {
    statusInput.value = await store.addData(2, payload.value)
}
</script>

<template>
    <div class="w-[80%] mx-auto">
        <div v-if="statusInput">
            <AlertSuccesComponent />
        </div>
        <form action="" class="grid grid-cols-1 gap-y-3" @submit.prevent="addData" enctype="multipart/form-data">
            <p class="text-3xl font-bold mb-5">Input New Divisi</p>
            <div class="mb-5">
                <label for="input-nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="input-nama" v-model="payload.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            </div>

            <div class="flex justify-end mt-10">
                <button type="button" @click="router.back()"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
                <button type="submit"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
            </div>
        </form>
    </div>
</template>
