<template>
    <div v-if="isScrolledDown">
        <div
            class="fixed w-[40px] h-[40px] bg-lime-600 right-[30px] xl:bottom-[30px] bottom-[100px] rounded-[5px] hover:-translate-y-1 hover:bg-lime-500 transition-all">
            <button @click="scrollOnTop" class="text-white flex justify-center items-center w-full">
                <ArrowUp />
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ArrowUp from '../../assets/icons/ArrowUp.vue'

const scrollOnTop = () => {
    window.scrollTo(0, 0);
}

const isScrolledDown = ref(false)

const handleScroll = () => {
    window.scrollY > 400 ? isScrolledDown.value = true : isScrolledDown.value = false
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
</script>

