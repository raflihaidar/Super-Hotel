import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalStore = defineStore(
    "global",
    () => {
        //state
        const STAFF_URL = "http://127.0.0.1:8000/api/staff/page";
        const GUEST_URL = "http://127.0.0.1:8000/api/tamu/page";
        const DIVISI_URL = "http://127.0.0.1:8000/api/divisi/page";
        const SHIFT_URL = "http://127.0.0.1:8000/api/shift/page";
        const ROOM_URL = "http://127.0.0.1:8000/api/kamar/page";
        const CATEGORY_URL = "http://127.0.0.1:8000/api/kategori/page";
        const BOOKING_URL = "http://127.0.0.1:8000/api/booking/page";

        const staff = ref([]);
        const guest = ref([]);
        const divisi = ref([]);
        const shift = ref([]);
        const room = ref();
        const category = ref();
        const booking = ref();
        const detailBooking = ref();
        const singleData = ref([]);
        const pagination = ref({
            currentPage: 0,
            from: 0,
            to: 0,
            nextPage: "",
            prevPage: "",
            perPage: 0,
        });

        //action
        const resetSingleData = () => {
            singleData.value = [];
        };

        const getSingleData = async (url, id) => {
            try {
                const res = await axios.get(`${url}/${id}`);
                singleData.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const getPagination = async (url, index) => {
            try {
                const res = await axios.get(
                    `http://127.0.0.1:8000/api/${url}/page/${index}`
                );
                console.log(url);
                switch (url) {
                    case "tamu":
                        guest.value = res.data.data;
                        break;
                    case "staff":
                        staff.value = res.data.data;
                        break;
                    case "shift":
                        shift.value = res.data.data;
                        break;
                    case "divisi":
                        divisi.value = res.data.data;
                        break;
                    case "room":
                        room.value = res.data.data;
                        break;
                    case "booking":
                        booking.value = res.data.data;
                        break;
                    case "detail-booking":
                        detailBooking.value = res.data.data;
                        break;
                }
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

        const nextOrPrev = async (name, url) => {
            try {
                const res = await axios.get(`${url}`);
                switch (name) {
                    case "tamu":
                        guest.value = res.data.data;
                        break;
                    case "staff":
                        staff.value = res.data.data;
                        break;
                    case "shift":
                        shift.value = res.data.data;
                        break;
                    case "divisi":
                        divisi.value = res.data.data;
                        break;
                    case "room":
                        room.value = res.data.data;
                        break;
                    case "booking":
                        booking.value = res.data.data;
                        break;
                    case "detail-booking":
                        detailBooking.value = res.data.data;
                        break;
                }
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

        const setStaff = async (index) => {
            try {
                const res = await axios.get(`${STAFF_URL}/${index}`);
                staff.value = res.data.data;
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

        const setGuest = async (index) => {
            try {
                const res = await axios.get(`${GUEST_URL}/${index}`);
                console.log(`${GUEST_URL}/${index}`);
                guest.value = res.data.data;
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
                console.log(`${GUEST_URL}/${index}`);
            }
        };

        const setShift = async (index) => {
            try {
                const res = await axios.get(`${SHIFT_URL}/${index}`);
                shift.value = res.data.data;
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
        const setDivisi = async (index) => {
            try {
                const res = await axios.get(`${DIVISI_URL}/${index}`);
                divisi.value = res.data.data;
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
        const setBooking = async (index) => {
            try {
                const res = await axios.get(`${BOOKING_URL}/${index}`);
                booking.value = res.data.data;
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
        const setRoom = async (index) => {
            try {
                const res = await axios.get(`${ROOM_URL}/${index}`);
                room.value = res.data.data;
                console.log(res.data.data);
                pagination.value = {
                    currentPage: res.data.current_page,
                    from: res.data.from,
                    to: res.data.to,
                    nextPage: res.data.next_page_url,
                    prevPage: res.data.prev_page_url,
                    perPage: res.data.per_page,
                };
            } catch (error) {
                console.log("error", error);
            }
        };
        const setCategory = async (index) => {
            try {
                const res = await axios.get(`${CATEGORY_URL}/${index}`);
                category.value = res.data.data;
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
            setGuest,
            setStaff,
            setShift,
            setDivisi,
            setBooking,
            setRoom,
            setCategory,
            getPagination,
        };
    },
    {
        persist: true,
    }
);
