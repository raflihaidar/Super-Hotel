import { ref, toRefs } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const useGlobalStore = defineStore(
    "global",
    () => {
        //state
        const STAFF_URL = "http://127.0.0.1:8000/api/staff";
        const GUEST_URL = "http://127.0.0.1:8000/api/tamu";
        const DIVISI_URL = "http://127.0.0.1:8000/api/divisi";
        const SHIFT_URL = "http://127.0.0.1:8000/api/shift";
        const ROOM_URL = "http://127.0.0.1:8000/api/kamar";
        const CATEGORY_URL = "http://127.0.0.1:8000/api/kategori";
        const BOOKING_URL = "http://127.0.0.1:8000/api/booking";

        const staff = ref([]);
        const guest = ref([]);
        const divisi = ref([]);
        const shift = ref([]);
        const room = ref();
        const category = ref();
        const booking = ref();
        const singleData = ref([]);
        const pagination = ref({
            total: 0,
            currentPage: 0,
            from: 0,
            to: 0,
            nextPage: "",
            prevPage: "",
            perPage: 0,
        });

        const URL_LIST = [
            STAFF_URL,
            GUEST_URL,
            DIVISI_URL,
            SHIFT_URL,
            ROOM_URL,
            CATEGORY_URL,
            BOOKING_URL,
        ];

        const STATE_LIST = toRefs([
            staff,
            guest,
            divisi,
            shift,
            room,
            category,
            booking,
        ]);

        //action
        const resetSingleData = () => {
            singleData.value = [];
        };

        const getSingleData = async (index, id) => {
            try {
                const res = await axios.get(`${URL_LIST[index]}/${id}`);
                singleData.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const getData = async (index, count) => {
            try {
                const res = await axios.get(`${URL_LIST[index]}/page/${count}`);
                console.log(URL_LIST[index]);
                STATE_LIST[index].value = res.data.data;
                pagination.value = {
                    total: res.data.total,
                    currentPage: res.data.current_page,
                    from: res.data.from,
                    to: res.data.to,
                    nextPage: res.data.next_page_url,
                    prevPage: res.data.prev_page_url,
                    perPage: res.data.per_page,
                };
            } catch (err) {
                console.log(URL_LIST[index]);
                console.log(err);
            }
        };

        const searchData = async (index, search) => {
            try {
                const res = await axios.get(
                    `${URL_LIST[index]}/search?query=${search}`
                );
                STATE_LIST[index].value = res.data;
                console.log("response", res.data);
                console.log("url", `${URL_LIST[index]}/search?query=${search}`);
            } catch (error) {
                console.log(error);
            }
        };

        const updateData = async (index, payload) => {
            try {
                await axios.patch(`${URL_LIST[index]}/${payload.id}`, payload);
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

        const deleteData = async (index, id) => {
            Swal.fire({
                title: "Are you sure to delete this data ?",
                icon: "question",
                showConfirmButton: true,
                showCancelButton: true,
                cancelButtonText: "cancel",
                confirmButtonText: "delete",
            }).then(async (result) => {
                try {
                    if (result.isConfirmed) {
                        let deletedItem = STATE_LIST[index].value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
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
                            await axios.delete(`${URL_LIST[index]}/${id}`);
                            console.log(`${URL_LIST[index]}/${id}`);
                            console.log(`${URL_LIST[index]}`);
                            console.log("state", STATE_LIST[index].value);

                            const itemIndex =
                                STATE_LIST[index].value.indexOf(deletedItem);
                            if (itemIndex !== -1) {
                                STATE_LIST[index].value.splice(itemIndex, 1);
                            }
                        }
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Delete Error!",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                    console.log(error);
                }
            });
        };

        const deleteAllData = (index) => {
            Swal.fire({
                title: "Are you sure to delete this data ?",
                icon: "question",
                showConfirmButton: true,
                showCancelButton: true,
                cancelButtonText: "cancel",
                confirmButtonText: "delete",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`${URL_LIST[index]}/delete-all`);
                        console.log(
                            "url delete",
                            `${URL_LIST[index]}/delete-all`
                        );
                        STATE_LIST[index].value = [];
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
                    } catch (error) {
                        Swal.fire({
                            title: "Delete Error!",
                            icon: "error",
                            confirmButtonText: "Ok",
                        });
                        console.log(error);
                    }
                }
            });
        };

        const addData = async (index, payload) => {
            const status = ref(false);
            try {
                const res = await axios.post(`${URL_LIST[index]}`, payload, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                status.value = res.data.success;
                STATE_LIST[index].value.push(res.data.data);
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

        const getPagination = async (index, count) => {
            try {
                const res = await axios.get(`${URL_LIST[index]}/page/${count}`);
                STATE_LIST[index].value = res.data.data;
                pagination.value = {
                    total: res.data.total,
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

        const nextOrPrev = async (index, url) => {
            try {
                const res = await axios.get(`${url}`);
                STATE_LIST[index].value = res.data.data;
                pagination.value = {
                    total: res.data.total,
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

        return {
            staff,
            guest,
            divisi,
            shift,
            room,
            booking,
            category,
            singleData,
            pagination,
            nextOrPrev,
            resetSingleData,
            getSingleData,
            getPagination,
            getData,
            searchData,
            deleteData,
            deleteAllData,
            updateData,
            addData,
        };
    },
    {
        persist: true,
    }
);
