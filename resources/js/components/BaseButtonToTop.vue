<template>
    <div v-if="isScrolledDown">
        <div
            class="fixed w-[40px] h-[40px] bg-lime-600 right-[30px] xl:bottom-[30px] bottom-[100px] rounded-[5px] hover:-translate-y-1 hover:bg-lime-500 transition-all">
            <a href="#top" class="text-white flex justify-center items-center">
                <ArrowUp />
            </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ArrowUp from '../../assets/icons/ArrowUp.vue'

const isScrolledDown = ref(false)
const handleScroll = () => {
    window.scrollY > 400 ? isScrolledDown.value = true : isScrolledDown.value = false
    console.log("scroll y : ", window.scrollY);
    console.log(isScrolledDown.value)
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
</script>

