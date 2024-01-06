<template>
    <div class="grid grid-cols-3 gap-x-10 gap-y-5">
        <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room
                Number</label>
            <input type="text" id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <DropSearchComponent id="categories" label="Category" :data="category" />

        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file">
        </div>

        <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write a Romm Description"></textarea>
        </div>


        <div class="absolute right-5 bottom-40 gap-x-10">
            <button type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
            <button type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
        </div>
    </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import DropSearchComponent from "../components/DropSearchComponent.vue";
import { useCategoryStore } from '../store/category'
import { useGlobalStore } from "../store/global";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const store = useGlobalStore()
const categoryStore = useCategoryStore()
const { category } = storeToRefs(categoryStore)

const loadCategory = () => {
    store.setCategory(25)
}
// const loadCategory = () => {
//     categoryStore.se
// }


onMounted(() => {
    loadCategory()
    initFlowbite()
})
</script>
