<script setup>
import { toRefs } from "vue"


const props = defineProps({
    cardName: String,
    data: Array,
})

const { cardName, data } = toRefs(props)
</script>

<template>
    <section
        class="p-5 w-[45%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <p class="font-bold mb-4">{{ cardName }}</p>
        <ul class="flex items-center gap-x-10">
            <li v-for="(item, index) in data" :key="index">
                <p class="text-xl font-bold gap-x-2">{{ item.data }}</p>
                <p class="text-xs text-gray-500 hover:underline transition cursor-pointer">{{ item.name }}</p>
            </li>
        </ul>
    </section>
</template>
