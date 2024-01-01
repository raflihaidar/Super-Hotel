<template>
    <nav class="flex items-center absolute right-2 px-7 my-5">
        <div class="flex flex-col items-center">
            <span class="text-xs text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">{{ pagination.from }}</span> to <span
                    class="font-semibold text-gray-900 dark:text-white">{{ pagination.to }}</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <div>
                <DropDownComponent />
                <div class="inline-flex mt-2 xs:mt-0 w-[30%]">
                    <button @click="prevPage"
                        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-green-600 rounded-s hover:bg-green-800 dark:bg-green-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Prev
                    </button>
                    <button @click="nextPage"
                        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-green-600 border-0 border-s border-gray-700 rounded-e hover:bg-green-800 dark:bg-green-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { toRefs } from 'vue';
import DropDownComponent from './DropDownComponent.vue';


const emits = defineEmits(['getPagination'])
const props = defineProps({
    pagination: Object,
})
const { pagination } = toRefs(props)


const nextPage = () => {
    emits('getPagination', pagination.value.nextPage)
}

const prevPage = () => {
    emits('getPagination', pagination.value.prevPage)
}
</script>
