<template>
    <div class="flex justify-between w-screen h-screen">
        <section class="w-[50%] my-auto">
            <p class="font-bold text-3xl max-w-sm mx-auto mb-5">Sign In</p>
            <p class="text-sm max-w-sm mx-auto mb-5 font-normal">Don't have an account ? <router-link
                    :to="{ name: 'sign-up' }" class="hover:underline underline-offset-2 transition font-semibold">Create
                    now</router-link></p>
            <form class="max-w-sm mx-auto flex flex-col gap-y-3" @submit.prevent="handleLogin">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input type="email" id="email" v-model="payload.email"
                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="example@gmail.com" required>
                </div>
                <div class="mb-5">
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div
                        class="flex border border-gray-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 text-sm rounded-lg dark:placeholder-gray-400">
                        <input type="password" id="password" v-model="payload.password" ref="passwordInput"
                            placeholder="password"
                            class="text-gray-900 text-sm block w-full p-2.5 dark:text-white border-none outline-none  focus:ring-green-500  focus:border-green-500  dark:focus:ring-green-500 dark:focus:border-green-500"
                            required>
                        <span class="inline-flex items-center px-3 text-xs cursor-pointer" @click="showPassword">
                            <EyeIcon v-if="showIcon" />
                            <EyeHideIcon v-else />
                        </span>
                    </div>
                </div>
                <div class="flex items-start mb-5">
                    <span class="flex justify-end w-full">
                        <label for="remember"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 underline underline-offset-2 cursor-pointer">Forgot
                            Password</label>
                    </span>
                </div>
                <button type="submit"
                    class="text-white bg-[#0E2D10] w-[100%] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Sign in
                </button>
                <div class="flex items-center justify-center my-5">
                    <span class="border border-gray-400 w-1/4 mx-4"></span>
                    <span>or</span>
                    <span class="border border-gray-400 w-1/4 mx-4"></span>
                </div>
                <div class="flex flex-col">
                    <button type="button"
                        class="text-gray-900 gap-x-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                        <img src="../../../assets/google 24.png" alt="google icon">
                        sign with google
                    </button>
                    <button type="button"
                        class="text-gray-900 gap-x-2  rounded-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                        <img src="../../../assets/facebook.png" class="w-7" alt="facebook icon">
                        sign with facebook
                    </button>
                </div>
            </form>
        </section>
        <div class="w-[50%] custom-background flex items-center justify-center relative">
        </div>

    </div>
</template>


<script setup>
import EyeIcon from '../../../assets/icons/EyeIcon.vue';
import EyeHideIcon from '../../../assets/icons/EyeHideIcon.vue';
import { useGuestStore } from '../../store/guest'
import { ref } from 'vue';

const passwordInput = ref(null)
const showIcon = ref(true)

const payload = ref({
    email: '',
    password: '',
})

const showPassword = () => {
    if (passwordInput.value.type === "password") {
        showIcon.value = false
        passwordInput.value.type = "text"
    }
    else {
        showIcon.value = true
        passwordInput.value.type = "password"
    }

    console.log(passwordInput.value.type)
}

const guestStore = useGuestStore()
const handleLogin = () => {
    guestStore.login(payload.value)
}
</script>

<style>
.custom-background {
    background-image: url('../../../../public/images/sign-in-image.jpg');
    background-size: cover;
}
</style>
