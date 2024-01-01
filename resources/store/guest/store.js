import { computed, ref } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/tamu";

export const useGuestStore = defineStore(
    "guest",
    () => {
        //state
        const guests = ref([]);
        const singleGuest = ref([]);
        const getGuest = computed(() => guests.value);
        const pagination = ref({
            currentPage: 0,
            from: 0,
            to: 0,
            nextPage: "",
            prevPage: "",
            perPage: 0,
        });

        const resetSingleData = () => {
            singleGuest.value = [];
        };

        //action
        const getData = async (index) => {
            try {
                const res = await axios.get(`/${index}`);
                guests.value = res.data.data;
                pagination.value = {
                    currentPage: res.data.current_page,
                    from: res.data.from,
                    to: res.data.to,
                    nextPage: res.data.next_page_url,
                    prevPage: res.data.prev_page_url,
                    perPage: res.data.per_page,
                };
            } catch (err) {
                console.log(err);
            }
        };

        const getPagination = async (url) => {
            try {
                const res = await axios.get(url);
                guests.value = res.data.data;
                pagination.value = {
                    currentPage: res.data.current_page,
                    from: res.data.from,
                    to: res.data.to,
                    nextPage: res.data.next_page_url,
                    prevPage: res.data.prev_page_url,
                    perPage: res.data.per_page,
                };
            } catch (err) {
                console.log(err);
            }
        };

        const getSingeData = async (id) => {
            try {
                const res = await axios.get(`id=${id}`);
                singleGuest.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const searchData = async (search) => {
            try {
                const res = await axios.get(`search?query=${search}`);
                guests.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const updateData = async (payload) => {
            try {
                await axios.patch(`/update/${payload.id}`, payload);
                singleGuest.value = [];
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
            } catch {
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
                        let deletedItem = guests.value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
                            await axios.delete(`/delete/${id}`);
                            const index = guests.value.indexOf(deletedItem);
                            guests.value.splice(index, 1);
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
            guests,
            singleGuest,
            getGuest,
            pagination,
            resetSingleData,
            getData,
            searchData,
            getPagination,
            getSingeData,
            updateData,
            deleteData,
        };
    },
    {
        persist: true,
    }
);
