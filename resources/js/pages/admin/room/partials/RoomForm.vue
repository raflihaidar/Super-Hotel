<script setup>
import { initFlowbite } from "flowbite";
import BaseDropSearch from "../../../../components/BaseDropSearch.vue";
import AlertSuccesComponent from '../../../../components/BaseAlertSucces.vue';
import { useGlobalStore } from "../../../../store/global";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const store = useGlobalStore()
const { category } = storeToRefs(store)
const statusInput = ref(null);
const dataCategory = ref(null)

const payload = ref({
    room_name: '',
    id_kategori: 0,
    id_status_kamar: 1,
})

const addCategoryId = (item) => {
    dataCategory.value = item.nama
    payload.value.category = item.id
}

const submit = async () => {
    const form = new FormData()
    form.append('room_name', payload.value.room_name)
    form.append('id_kategori', payload.value.category)
    form.append('id_status_kamar', 1)
    statusInput.value = await store.addData(4, form)
}

</script>

<template>
    <div class="w-[80%] mx-auto">
        <div v-if="statusInput">
            <AlertSuccesComponent />
        </div>
        <form enctype="multipart/form-data" @submit.prevent="submit()">
            <p class="text-3xl font-bold mb-5">Input New Room</p>
            <div class="grid grid-cols-1 gap-y-3">
                <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room
                        Number</label>
                    <input type="text" id="default-input" v-model="payload.room_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <div>
                    <BaseDropSearch id="dropDownCategoryMenu" label="category" :data="category" :singleData="dataCategory"
                        @addItem="addCategoryId" />
                </div>

                <div class="flex justify-end mt-10">
                    <button type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
                    <button type="submit"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>
