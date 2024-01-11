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
        const token = ref(null);

        const login = async (payload) => {
            try {
                if (payload.email === "admin@gmail.com") {
                    router.push({ name: "admin" });
                } else {
                    const res = await axios.post(URL_LOGIN, {
                        email: payload.email,
                        password: payload.password,
                    });
                    token.value = res.data.access_token;
                    fetchGuestData(res.data.access_token);
                    router.push({ name: "home" });
                }
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
            } catch (error) {
                Swal.fire({
                    title: "Login Error!",
                    icon: "Error",
                    confirmButtonText: "Ok",
                });
            }
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
                        await axios.post(URL_LOGOUT, null, {
                            headers: {
                                Authorization: `Bearer ${token.value}`,
                            },
                        });
                        token.value = null;
                        guestAuth.value = null;
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
                    console.log(res.data);
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
                    router.push({ name: "sign-in" });
                } else {
                    Swal.fire({
                        title: "Register Error!",
                        icon: "Error",
                        confirmButtonText: "Ok",
                    });
                }
            } catch (error) {
                console.log(error);
            }
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

        const getSingleData = (id) => {
            store.getSingleData("http://127.0.0.1:8000/api/tamu", id);
        };

        const searchData = async (search) => {
            try {
                const res = await axios.get(
                    `http://127.0.0.1:8000/api/tamu/search?query=${search}`
                );
                guest.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const updateData = async (payload) => {
            try {
                await axios.patch(
                    `http://127.0.0.1:8000/api/tamu/${payload.id}`,
                    payload
                );
                singleData.value = [];
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
                    title: "Update successfully",
                });
            } catch (err) {
                console.log(err);
            }
        };

        const deleteData = async (id) => {
            try {
                Swal.fire({
                    title: "Are you sure to delete this data ?",
                    icon: "question",
                    showConfirmButton: true,
                    showCancelButton: true,
                    cancelButtonText: "cancel",
                    confirmButtonText: "delete",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        let deletedItem = guest.value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
                            await axios.delete(
                                `http://127.0.0.1:8000/api/tamu/${id}`
                            );
                            const index = guest.value.indexOf(deletedItem);
                            guest.value.splice(index, 1);
                        }
                    }
                });
            } catch {
                Swal.fire({
                    title: "Delete Error!",
                    icon: "Error",
                    confirmButtonText: "Ok",
                });
            }
        };

        return {
            guest,
            guestAuth,
            singleData,
            pagination,
            token,
            getSingleData,
            searchData,
            updateData,
            deleteData,
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
