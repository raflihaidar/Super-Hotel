import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalStore = defineStore(
    "global",
    () => {
        //state
        const STAFF_URL = "http://127.0.0.1:8000/api/staff";
        const GUEST_URL = "http://127.0.0.1:8000/api/tamu";
        const DIVISI_URL = "http://127.0.0.1:8000/api/divisi";
        const SHIFT_URL = "http://127.0.0.1:8000/api/shift";

        const staff = ref([]);
        const guest = ref([]);
        const divisi = ref([]);
        const shift = ref([]);
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
                const res = await axios.get(`${url}/id=${id}`);
                singleData.value = res.data;
            } catch {
                console.log(err);
            }
        };

        const getPagination = async (url) => {
            try {
                const res = await axios.get(url);
                pagination.value = {
                    currentPage: res.data.current_page,
                    from: res.data.from,
                    to: res.data.to,
                    nextPage: res.data.next_page_url,
                    prevPage: res.data.prev_page_url,
                    perPage: res.data.per_page,
                };

                return res.data.data;
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

        return {
            staff,
            guest,
            divisi,
            shift,
            singleData,
            pagination,
            resetSingleData,
            getSingleData,
            setGuest,
            setStaff,
            setShift,
            setDivisi,
            getPagination,
        };
    },
    {
        persist: true,
    }
);
