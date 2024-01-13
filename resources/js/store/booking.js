import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import { useRoomStore } from "./room.js";
import Swal from "sweetalert2";
import axios from "axios";

export const useBookingStore = defineStore(
    "booking",
    () => {
        const URL_DETAIL_BOOKING = "http://127.0.0.1:8000/api/detail-booking";
        const BASE_URL = "http://127.0.0.1:8000/api/booking";
        const store = useGlobalStore();
        const roomStore = useRoomStore();
        const { searchField } = storeToRefs(roomStore);
        const { booking, singleData, pagination } = storeToRefs(store);
        const detailBooking = ref([]);

        const getSingleData = (id) => {
            store.getSingleData(BASE_URL, id);
        };

        const searchData = async (search) => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/search?query=${search}`
                );
                booking.value = res.data;
            } catch {
                console.log(err);
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
                        let deletedItem = booking.value.find(
                            (item) => item.id === id
                        );
                        if (deletedItem) {
                            await axios.delete(`${BASE_URL}/${id}`);
                            const index = booking.value.indexOf(deletedItem);
                            booking.value.splice(index, 1);
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

        const addData = async (payload_booking) => {
            try {
                const res = await axios.post(BASE_URL, payload_booking);
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
                    title: "Booking successfully",
                });
                searchField.value = [];
                return res.data.id;
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(error);
            }
        };

        const updateTotalBooking = async (idBooking) => {
            try {
                const response = await axios.post(
                    `${URL_DETAIL_BOOKING}/update-total`,
                    {
                        id_booking: idBooking,
                    }
                );

                if (response.data.success) {
                    console.log("Total updated successfully");
                } else {
                    console.error("Failed to update total");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        const addDetailBooking = async (payload, id_booking, id_kamar) => {
            try {
                const res = await axios.post(URL_DETAIL_BOOKING, {
                    id_booking: id_booking,
                    id_tamu: payload.id_tamu,
                    id_kamar: id_kamar,
                    jumlah_tamu: payload.jumlah_tamu,
                    jumlah_kamar: payload.jumlah_kamar,
                    catatan: payload.catatan,
                    subtotal: payload.subtotal,
                });
                detailBooking.value = res.data;
                updateTotalBooking(id_booking);
                return res.data;
            } catch (error) {
                console.log("dari detail", error);
            }
        };

        const viewHistoryBooking = async (id_tamu) => {
            try {
                const res = await axios.get(`${URL_DETAIL_BOOKING}/${id_tamu}`);
                detailBooking.value = res.data.booking_details;
                console.log(res.data.booking_details);
                console.log(id_tamu);
            } catch (error) {
                console.log(error);
            }
        };

        const getCount = async (typeOfCount) => {
            try {
                const countUrls = {
                    count: "/count",
                    "check-in": "/checkin-count",
                    "check-out": "/checkout-count",
                    stay: "/stay-count",
                };

                const res = await axios.get(
                    `${BASE_URL}${countUrls[typeOfCount]}`
                );
                return res.data;
            } catch (error) {
                console.log("dari sini", error);
            }
        };
        return {
            booking,
            detailBooking,
            singleData,
            pagination,
            getSingleData,
            searchData,
            updateData,
            deleteData,
            addData,
            addDetailBooking,
            viewHistoryBooking,
            getCount,
        };
    },
    {
        persist: true,
    }
);
