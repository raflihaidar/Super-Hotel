<script setup>
import { initFlowbite } from "flowbite";
import { onMounted, ref, toRefs } from "vue";

const emits = defineEmits(['addItem'])
const isOpen = ref(false)
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true,
    },
    singleData: {
        type: String,
        required: true
    },
})
const { data, singleData } = toRefs(props)

const modalEvent = () => {
    isOpen.value = !isOpen.value
    console.log("Connect")
}

const addItem = (item) => {
    emits('addItem', item)
    console.log(singleData.value)
}

onMounted(() => {
    initFlowbite()
})
</script>


<template>
    <div class="flex justify-between relative">
        <input type="text" :value="singleData" :id="'input-' + label"
            class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            required disabled>
        <button :id="id" @click="modalEvent"
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
    <div :id="id" class="z-10 absolute  bg-white rounded-lg shadow w-60 dark:bg-gray-700" v-if="isOpen">
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
        <ul class="h-auto px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="idComponent">
            <li>
                <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                    v-for="(item, index) in data" :key="index" @click="addItem(item)">
                    <p class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        {{ item.nama }}
                    </p>
                </div>
            </li>
        </ul>
        <router-link :to="{ name: label }"
            class="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 18">
                <path
                    d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
            </svg>
            Add {{ label }}
        </router-link>
    </div>
</template>
