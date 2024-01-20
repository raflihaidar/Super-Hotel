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
        const roomStore = useRoomStore();
        const { searchField } = storeToRefs(roomStore);
        const detailBooking = ref([]);

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

        const addData = async (payload_booking) => {
            try {
                const res = await axios.post(BASE_URL, payload_booking);
                console.log(res.data);
                if (detailBooking) {
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
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(error);
            }
        };

        // const addDetailBooking = async (payload, id_booking, id_kamar) => {
        //     try {
        //         const res = await axios.post(URL_DETAIL_BOOKING, {
        //             id_booking: id_booking,
        //             id_tamu: payload.id_tamu,
        //             id_kamar: id_kamar,
        //             jumlah_tamu: payload.jumlah_tamu,
        //             jumlah_kamar: payload.jumlah_kamar,
        //             catatan: payload.catatan,
        //             subtotal: payload.subtotal,
        //         });
        //         detailBooking.value = res.data;
        //         updateTotalBooking(id_booking);
        //         return res.data;
        //     } catch (error) {
        //         console.log("dari detail", error);
        //     }
        // };

        const viewHistoryBooking = async (id_tamu) => {
            try {
                const res = await axios.get(`${URL_DETAIL_BOOKING}/${id_tamu}`);
                detailBooking.value = res.data.booking_details;
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
            detailBooking,
            addData,
            // addDetailBooking,
            viewHistoryBooking,
            getCount,
        };
    },
    {
        persist: true,
    }
);
