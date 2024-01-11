<template>
    <div class="flex justify-between w-screen h-screen">
        <section class="w-[50%] my-auto">
            <p class="font-bold text-3xl max-w-sm mx-auto mb-5">Sign In</p>
            <p class="text-sm max-w-sm mx-auto mb-5 font-normal">Don't have an account ? <router-link
                    :to="{ name: 'sign-up' }" class="underline underline-offset-2 font-semibold">Create
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
                        class="flex  border border-gray-300 dark:bg-gray-700 dark:border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-green-500  focus:border-green-500  dark:focus:ring-green-500 dark:focus:border-green-500 dark:placeholder-gray-400">
                        <input type="password" id="password" v-model="payload.password"
                            class="text-gray-900 text-sm block w-full p-2.5 dark:text-white border-none outline-none"
                            required>
                        <span class="inline-flex items-center px-3 text-xs cursor-pointer">
                            <EyeIcon />
                        </span>
                    </div>
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required>
                    </div>
                    <span class="flex justify-between w-full">
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                            me</label>
                        <label for="remember"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 underline underline-offset-2 cursor-pointer">Forgot
                            Password</label>
                    </span>
                </div>
                <button type="submit"
                    class="text-white bg-[#0E2D10] w-[100%] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Sign in
                </button>
            </form>
            <div class="flex items-center justify-center max-w-md mx-auto my-5">
                <span class="border border-gray-400 w-1/4 mx-4"></span>
                <span>or</span>
                <span class="border border-gray-400 w-1/4 mx-4"></span>
            </div>
            <div class="grid grid-cols-1 max-w-md mx-auto">
                <button type="button"
                    class="text-gray-900 gap-x-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                    <img src="../../assets/google 24.png" alt="google icon">
                    sign with google
                </button>
                <button type="button"
                    class="text-gray-900 gap-x-2  rounded-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                    <!-- <img src="../../assets/facebook-icon.png" alt="facebook icon"> -->
                    sign with facebook
                </button>
            </div>
        </section>
        <div class="w-[50%] bg-[#0E2D10]">
            <p>p balap</p>
        </div>
    </div>
</template>


<script setup>
import EyeIcon from '../icons/EyeIcon.vue';
import EyeHideIcon from '../icons/EyeHideIcon.vue';
import { useGuestStore } from '../store/guest'
import { ref } from 'vue';


const payload = ref({
    email: '',
    password: '',
})

const guestStore = useGuestStore()
const handleLogin = () => {
    guestStore.login(payload.value)
}
</script>
