import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useGlobalStore } from "./global.js";
import Swal from "sweetalert2";
import axios from "axios";
import router from "../routes.js";

export const useRoomStore = defineStore("room", () => {
    const BASE_URL = "http://127.0.0.1:8000/api/kamar";
    const STATUS_ROOM_URL = "http://127.0.0.1:8000/api/status-kamar";
    const store = useGlobalStore();
    const searchField = ref(null);
    const status = ref([]);
    const quantity = ref({
        roomQuantity: 1,
        personQuantity: 1,
    });
    const { room, category, singleData, pagination } = storeToRefs(store);

    const getRoomStatus = async () => {
        try {
            const res = await axios.get(STATUS_ROOM_URL);
            status.value = res.data;
        } catch (error) {
            console.log(error);
        }
    };

    // const filteredData = async (payload) => {
    //     try {
    //         const res = await axios.post(`${BASE_URL}/filter-status`, {
    //             available: payload[0],
    //             unavaialable: payload[1],
    //         });
    //         room.value = res.data;
    //         console.log(room.value);
    //         console.log("response", res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const incQuantity = (value) => {
        if (value === "room" && quantity.value.roomQuantity < 5) {
            quantity.value.roomQuantity += 1;
        } else if (value === "person" && quantity.value.personQuantity < 5) {
            quantity.value.personQuantity += 1;
        }
    };

    const decQuantity = (value) => {
        if (value === "room" && quantity.value.roomQuantity > 1) {
            quantity.value.roomQuantity -= 1;
        } else if (value === "person" && quantity.value.personQuantity > 1) {
            quantity.value.personQuantity -= 1;
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
        status,
        category,
        quantity,
        singleData,
        searchField,
        pagination,
        // filteredData,
        incQuantity,
        decQuantity,
        getRoomId,
        checkAvailability,
        getCount,
        getRoomStatus,
    };
});
