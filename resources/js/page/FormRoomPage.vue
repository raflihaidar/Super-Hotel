<template>
    <form enctype="multipart/form-data" @submit.prevent="submit()">
        <div class="grid grid-cols-3 gap-x-10 gap-y-5">
            <div class="mb-6">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room
                    Number</label>
                <input type="text" id="default-input" v-model="payload.room_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <DropSearchComponent id="categories" label="category" @addCategoryId="addCategoryId">
                <template #data>
                    <span v-for="(item, index) in category" :key="index" @click="handleClick(item)">
                        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label for="checkbox-item-11"
                                class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                {{ item.kategori }}</label>
                        </div>
                    </span>
                </template>
            </DropSearchComponent>

            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                    file</label>
                <input @change="onChange"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">
            </div>

            <div class="absolute right-5 bottom-40 gap-x-10">
                <button type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
                <button type="submit"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import DropSearchComponent from "../components/DropSearchComponent.vue";
import { useCategoryStore } from '../store/category'
import { useGlobalStore } from "../store/global";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoomStore } from "../store/room";

const store = useGlobalStore()
const categoryStore = useCategoryStore()
const roomStore = useRoomStore()
const { category } = storeToRefs(categoryStore)

const loadCategory = () => {
    store.setCategory(25)
}

const payload = ref({
    room_name: null,
    category: 0,
    image: null
})

const addCategoryId = (id) => {
    payload.value.category = id
}

const onChange = (e) => {
    payload.value.image = e.target.files[0]
}

const submit = () => {
    const form = new FormData()
    form.append('room_name', payload.value.room_name)
    form.append('id_kategori', payload.value.category)
    form.append('id_status_kamar', 1)
    form.append('image', payload.value.image)
    roomStore.addData(form)
}

onMounted(() => {
    loadCategory()
    initFlowbite()
})
</script>
