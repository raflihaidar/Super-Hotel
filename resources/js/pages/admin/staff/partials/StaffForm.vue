<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import BaseDropSearch from '../../../../components/BaseDropSearch.vue';
import AlertSuccesComponent from '../../../../components/BaseAlertSucces.vue';
import { useGlobalStore } from '../../../../store/global';
import router from '../../../../routes';

const statusInput = ref(false)
const store = useGlobalStore()
const dropDownDivisi = ref(null)
const dropDownShift = ref(null)
const payload = ref({
    nama: "",
    email: "",
    alamat: "",
    image: null,
    id_divisi: null,
    id_shift: null,
    id_status: 1,

})
const { divisi, shift } = storeToRefs(store)

const onUpload = (e) => {
    payload.value.image = e.target.files[0]
}

const addDivisiId = (item) => {
    dropDownDivisi.value = item.nama
    payload.value.id_divisi = item.id
}

const addShiftId = (item) => {
    dropDownShift.value = item.nama
    payload.value.id_shift = item.id
}

const addData = async () => {
    statusInput.value = await store.addData(0, payload.value)
}

onMounted(() => {
    store.getData(2, 25)
    store.getData(3, 25)
})
</script>

<template>
    <div class="w-[80%] mx-auto">
        <div v-if="statusInput">
            <AlertSuccesComponent />
        </div>
        <form action="" class="grid grid-cols-1 gap-y-3" @submit.prevent="addData" enctype="multipart/form-data">
            <p class="text-3xl font-bold mb-5">Input New Staff</p>
            <div class="mb-5">
                <label for="input-nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="input-nama" v-model="payload.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" v-model="payload.email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com" required>
            </div>
            <div class="flex items-center justify-between">
                <span class="w-[40%]">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                        file</label>
                    <input name="image" @change="onUpload"
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                        800x400px).</p>
                </span>
                <span class="40%">
                    <img src="" alt="staff image">
                </span>
            </div>
            <div class="flex gap-x-4">
                <div>
                    <BaseDropSearch id="dropDownDivisiMenu" label="divisi" :data="divisi" :singleData="dropDownDivisi"
                        @addItem="addDivisiId" />
                </div>
                <div>
                    <BaseDropSearch id="dropDownShiftMenu" label="shift" :data="shift" :singleData="dropDownShift"
                        @addItem="addShiftId" />
                </div>
            </div>
            <div class="w-[50%] h-[50%]">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="message" rows="4" v-model="payload.alamat"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Write Address for staff"></textarea>
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
