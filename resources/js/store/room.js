import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import Swal from "sweetalert2";
import axios from "axios";
import router from "../routes.js";

export const useRoomStore = defineStore(
    "room",
    () => {
        const BASE_URL = "http://127.0.0.1:8000/api/kamar";
        const store = useGlobalStore();
        const searchField = ref(null);
        const quantity = ref({
            roomQuantity: 1,
            personQuantity: 1,
        });
        const { room, category, singleData, pagination } = storeToRefs(store);

        const incQuantity = (value) => {
            if (value === "room" && quantity.value.roomQuantity < 5) {
                quantity.value.roomQuantity += 1;
            } else if (
                value === "person" &&
                quantity.value.personQuantity < 5
            ) {
                quantity.value.personQuantity += 1;
            }
        };

        const decQuantity = (value) => {
            if (value === "room" && quantity.value.roomQuantity > 1) {
                quantity.value.roomQuantity -= 1;
            } else if (
                value === "person" &&
                quantity.value.personQuantity > 1
            ) {
                quantity.value.personQuantity -= 1;
            }
        };

        const getSingleData = (id) => {
            try {
                store.getSingleData(BASE_URL, id);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        };

        const searchData = async (search) => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/search?query=${search}`
                );
                console.log("response : ", res.data);
                room.value = res.data;
            } catch {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        };

        const updateData = async (payload) => {
            try {
                await axios.patch(`${BASE_URL}/${payload.id}`, payload);
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
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
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
                        let deletedItem = room.value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
                            await axios.delete(`${BASE_URL}/${id}`);
                            const index = room.value.indexOf(deletedItem);
                            room.value.splice(index, 1);
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

        const addData = async (payload) => {
            const status = ref(false);
            try {
                const res = await axios.post(BASE_URL, payload);
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
                room.value.push(res.data.data);
                status.value = res.data.success;
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            } finally {
                return status.value;
            }
        };

        const checkAvailability = async (payload) => {
            try {
                if (payload.check_in && payload.check_out) {
                    const res = await axios.get(`${BASE_URL}/check`, {
                        checkin: payload.check_in,
                        checkout: payload.check_out,
                    });
                    searchField.value = payload;
                    category.value = res.data.categories;
                    router.push({ name: "result" });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        const getRoomId = async (id_kategori) => {
            try {
                const res = await axios.get(`${BASE_URL}/get-room-id`, {
                    params: {
                        id_kategori,
                    },
                });
                return res.data.id_kamar;
            } catch (error) {
                console.log(error);
            }
        };

        const getCount = async (typeOfCount) => {
            try {
                let res = "";
                if (typeOfCount === "count") {
                    res = await axios.get(`${BASE_URL}/count`);
                } else if (typeOfCount === "available") {
                    res = await axios.get(`${BASE_URL}/available-count`);
                    console.log("dari store kamar ", res.data);
                } else {
                    res = await axios.get(`${BASE_URL}/unavailable-count`);
                }
                return res.data;
            } catch (error) {
                console.log(error);
            }
        };

        return {
            room,
            category,
            quantity,
            singleData,
            searchField,
            pagination,
            incQuantity,
            decQuantity,
            getSingleData,
            getRoomId,
            searchData,
            updateData,
            deleteData,
            addData,
            checkAvailability,
            getCount,
        };
    },
    {
        persist: true,
        paths: ["room", "category", "singleData", "pagination"],
    }
);
