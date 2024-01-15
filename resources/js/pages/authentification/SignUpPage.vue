<template>
    <div class="flex justify-between w-screen h-screen">
        <section class="w-[50%] my-auto order-2">
            <p class="max-w-md mx-auto text-center text-3xl font-normal mb-5">Create Account</p>
            <div class="flex  max-w-md mx-auto justify-evenly">
                <button type="button"
                    class="text-gray-900 gap-x-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                    <img src="../../../assets/google 24.png" alt="google icon">
                    sign with google
                </button>
                <button type="button"
                    class="text-gray-900 gap-x-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                    <!-- <img src="../../assets/facebook-icon.png" alt="facebook icon"> -->
                    sign with facebook
                </button>
            </div>
            <div class="flex items-center justify-center max-w-md mx-auto">
                <span class="border border-gray-400 w-1/4 mx-4"></span>
                <span>or</span>
                <span class="border border-gray-400 w-1/4 mx-4"></span>
            </div>
            <form class="max-w-md mx-auto flex flex-col" @submit.prevent="handleRegister">
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="nama" id="nama" v-model="firstName"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                            name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" v-model="lastName"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" " required />
                        <label for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                            name</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input name="username" id="floating_username" v-model="payload.username"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="username"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="email" id="floating_email" v-model="payload.email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                        Address</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="telephone" id="floating_telephone" v-model="payload.telephone"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="telephone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="floating_password" v-model="payload.password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password"
                        v-model="payload.passwordConfim"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" " required />
                    <label for="floating_repeat_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
                        password</label>
                </div>
                <button type="submit"
                    class="text-white bg-[#0E2D10] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </form>
            <p class="max-w-md mx-auto text-sm mt-5">Already have an account? <router-link :to="{ name: 'sign-in' }"
                    class="hover:underline underline-offset-2 transition">Login</router-link></p>

        </section>
        <div class="w-[50%] bg-[#0E2D10] order-1">
            <p>p balap</p>
        </div>
    </div>
</template>


<script setup>
import EyeIcon from '../../../assets/icons/EyeIcon.vue'
import { useGuestStore } from '../../store/guest'
import { ref, watch } from 'vue';
const guestStore = useGuestStore()
const firstName = ref(null)
const lastName = ref(null)
const payload = ref({
    nama: '',
    username: '',
    email: '',
    telephone: '',
    password: '',
    passwordConfim: ''
})

watch(firstName, () => {
    payload.value.nama = firstName.value + ' ' + lastName.value
    console.log(payload.value.nama)
})

watch(lastName, () => {
    payload.value.nama = firstName.value + ' ' + lastName.value
    console.log(payload.value.nama)
})

const handleRegister = () => {
    guestStore.register(payload.value)
}

</script>
