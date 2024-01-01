<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-full w-full">
        <section class="flex justify-end">
            <div class="hidden">
                <slot name="btn-delete"></slot>
            </div>

            <div class="mb-5">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3"
                        @click="searchData(valueSearchInput)">
                        <SearchIcon />
                    </div>
                    <!-- <div v-else class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3"
                        @click="deleteValue">
                        <SearchIcon />
                    </div> -->
                    <input type="text" id="table-search-users" v-model="valueSearchInput"
                        class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="Search for users">
                </div>
            </div>
        </section>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <slot name="header"></slot>
                </tr>
            </thead>
            <tbody>
                <slot name="body"></slot>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue"
import SearchIcon from '../icons/SearchIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
const emits = defineEmits(['searchData'])
const valueSearchInput = ref('')

const searchData = (search) => {
    emits('searchData', search)
    console.log(valueSearchInput.value)
}

const deleteValue = () => {
    valueSearchInput.value = ''
}
</script>
