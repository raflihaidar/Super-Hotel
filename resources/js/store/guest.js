import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import Swal from "sweetalert2";
import axios from "axios";

export const useGuestStore = defineStore(
    "guest",
    () => {
        const store = useGlobalStore();
        const { guest, singleData, pagination } = storeToRefs(store);

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
                    `http://127.0.0.1:8000/api/tamu/update/${payload.id}`,
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
                                `http://127.0.0.1:8000/api/tamu/delete/${id}`
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
            singleData,
            pagination,
            getSingleData,
            searchData,
            updateData,
            deleteData,
        };
    },
    {
        persist: true,
    }
);
