
<script setup>
import { initFlowbite } from "flowbite"
import { onMounted } from "vue"
const props = defineProps({
    page: Array,
    require: true
})

onMounted(() => {
    initFlowbite()
})
</script>

<template>
    <section class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <template v-for="(item, index) in page" :key="index">
                <li class="inline-flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" v-if="index != 0"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        {{ item }}
                    </a>
                </li>
            </template>
        </ol>
    </section>
</template>
