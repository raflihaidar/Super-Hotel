<script setup>
import { onMounted, ref, inject } from 'vue';
import { initFlowbite } from 'flowbite';
import { useGlobalStore } from '../store/global';

const isOpen = ref(false)
const store = useGlobalStore()

const path = inject('path')
const currentValue = ref(25)
const option = [5, 25, 50, 100]

const changeOption = (item) => {
    currentValue.value = item
    isOpen.value = false
    store.getPagination(path, item)
    console.log("path", path)
}

onMounted(() => {
    initFlowbite()
})
</script>


<template>
    <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top"
        class="me-3 mb-3 md:mb-0 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">{{ currentValue }} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownTop" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            <li v-for="(item, index) in option" :key="index" @click="changeOption(item)">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
                    item
                }}<span> per page</span></a>
            </li>
        </ul>
    </div>
</template>
