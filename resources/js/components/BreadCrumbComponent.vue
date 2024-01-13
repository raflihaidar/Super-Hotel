<template>
    <section class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center" v-for="(item, index) in page" :key="index">
                <a href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    {{ item }}
                </a>
            </li>
        </ol>
    </section>
</template>

<script setup>
const props = defineProps(['page'])
</script>
