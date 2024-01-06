<template>
    <div class="mb-6">
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <div id="id" :data-dropdown-toggle="id" data-dropdown-placement="bottom"
            class="flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input type=" text" class="w-full outline-none border-none" :value="dropDown">
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </div>
    </div>

    <!-- Dropdown menu -->
    <div :id="id" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
        <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" id="input-group-search"
                    class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search user">
            </div>
        </div>
        <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton">
            <li v-for="(item, index) in data" :key="index" @click="handleClick(item.kategori)">
                <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label for="checkbox-item-11"
                        class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        {{ item.kategori }}</label>
                </div>
            </li>
        </ul>
        <a href="#"
            class="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 18">
                <path
                    d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
            </svg>
            Add {{ label }}
        </a>
    </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import { onMounted, ref, toRefs } from "vue";

const dropDown = ref(null)
const props = defineProps({
    label: String,
    id: String,
    data: Array
})

const { id, label, data } = toRefs(props)

const handleClick = (item) => {
    dropDown.value = item
}

onMounted(() => {
    initFlowbite()
})
</script>
