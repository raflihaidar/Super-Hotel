import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import { ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";

export const useStaffStore = defineStore(
    "staff",
    () => {
        //state
        const store = useGlobalStore();
        const { staff, singleData, pagination } = storeToRefs(store);

        const getSingleData = (id) => {
            store.getSingleData("http://127.0.0.1:8000/api/staff", id);
        };

        const searchData = async (search) => {
            try {
                const res = await axios.get(
                    `http://127.0.0.1:8000/api/staff/search?query=${search}`
                );
                staff.value = res.data;
                console.log(res.data);
            } catch {
                console.log(err);
            }
        };

        const updateData = async (payload) => {
            try {
                await axios.patch(
                    `http://127.0.0.1:8000/api/staff/${payload.id}`,
                    payload
                );
                singleData.value = [];
                console.log("payload from store" + payload.nama);
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
                console.log("payload from store " + payload);
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
                        let deletedItem = staff.value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
                            await axios.delete(
                                `http://127.0.0.1:8000/api/staff/${id}`
                            );
                            const index = staff.value.indexOf(deletedItem);
                            staff.value.splice(index, 1);
                        }
                    }
                });
            } catch (error) {
                Swal.fire({
                    title: "Delete Error!",
                    icon: "Error",
                    confirmButtonText: "Ok",
                });
                console.log(error);
            }
        };

        const addData = async (payload) => {
            const status = ref(false);
            try {
                const res = await axios.post(
                    "http://127.0.0.1:8000/api/staff",
                    payload,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
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
                staff.value.push(res.data.data);
                status.value = res.data.success;
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(error);
            } finally {
                return status.value;
            }
        };

        return {
            staff,
            singleData,
            pagination,
            getSingleData,
            searchData,
            updateData,
            deleteData,
            addData,
        };
    },
    {
        persist: true,
    }
);
