import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import router from "../routes.js";
import Swal from "sweetalert2";
import axios from "axios";

export const useGuestStore = defineStore(
    "guest",
    () => {
        const BASE_URL = "http://127.0.0.1:8000/api/tamu";
        const URL_LOGIN = "http://127.0.0.1:8000/api/login";
        const URL_LOGOUT = "http://127.0.0.1:8000/api/logout";
        const URL_REGISTER = "http://127.0.0.1:8000/api/register";

        const store = useGlobalStore();
        const { guest, singleData, pagination } = storeToRefs(store);
        const guestAuth = ref(null);
        const status = ref(false);
        const token = ref(null);

        const login = async (payload) => {
            try {
                if (payload.email === "admin@gmail.com") {
                    router.push({ name: "admin" });
                } else if (!guestAuth.value) {
                    const res = await axios.post(URL_LOGIN, {
                        email: payload.email,
                        password: payload.password,
                    });
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Login successfully",
                    });
                    status.value = true;
                    token.value = res.data.access_token;
                    fetchGuestData(res.data.access_token);
                    router.push({ name: "home" });
                } else {
                    Swal.fire({
                        title: "Anda Sudah Login!",
                        icon: "Error",
                        confirmButtonText: "Ok",
                    });
                    status.value = false;
                }
            } catch (error) {
                Swal.fire({
                    title: "Login Error!",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                status.value = false;
            }

            return status.value;
        };

        const logout = async () => {
            try {
                Swal.fire({
                    title: "Are you sure to logout ?",
                    icon: "question",
                    showConfirmButton: true,
                    showCancelButton: true,
                    cancelButtonText: "cancel",
                    confirmButtonText: "logout",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            },
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Logout successfully",
                        });
                        await axios.post(URL_LOGOUT, null, {
                            headers: {
                                Authorization: `Bearer ${token.value}`,
                            },
                        });

                        token.value = null;
                        guestAuth.value = null;
                        router.push({ name: "sign-in" });
                    }
                });
            } catch (error) {
                console.log(error);
            }
        };

        const register = async (payload) => {
            try {
                if (payload.passwordConfim === payload.password) {
                    const res = await axios.post(URL_REGISTER, {
                        nama: payload.nama,
                        username: payload.username,
                        email: payload.email,
                        telephone: payload.telephone,
                        password: payload.password,
                    });
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Logout successfully",
                    });
                    status.value = true;
                    router.push({ name: "sign-in" });
                } else {
                    status.value = false;
                    Swal.fire({
                        title: "Register Error!",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            } catch (error) {
                console.log(error);
                status.value = false;
            }

            return status.value;
        };

        const fetchGuestData = async (token) => {
            try {
                const res = await axios.get(BASE_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                guestAuth.value = res.data;
                console.log("User Data:", guestAuth.value);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        return {
            guest,
            guestAuth,
            singleData,
            pagination,
            token,
            login,
            logout,
            register,
            fetchGuestData,
        };
    },
    {
        persist: true,
    }
);
