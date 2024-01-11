<template>
    <div class="w-full py-5 px-5">
        <TableComponent :header="header" tableName="Staff" :addData="true" route="add-staff" @handleSearch="searchData"
            :pagination="pagination" v-if="staff">
            <template #body>
                <tr class="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    v-for="(item, index) in staff" :key="index">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        item.id }}</th>
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" :src="'/storage/' + item.foto" alt="Jese image">
                        <div class="ps-3">
                            <div class="text-base font-semibold">{{ item.nama }}</div>
                            <div class="font-normal text-gray-500">{{ item.email }}</div>
                        </div>
                    </th>
                    <td class="px-4 py-3">{{ item.nama_divisi }}</td>
                    <td class="px-4 py-3">{{ item.nama_shift }}</td>
                    <td class="px-4 py-3">{{ item.nama_status }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)" data-modal-target="form-staff"
                            data-modal-toggle="form-staff">Edit</a>
                        <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                            @click="deleteData(item.id)">delete</a>
                    </td>
                </tr>
            </template>
        </TableComponent>
        <TableComponent v-else :pagination="pagination" :addData="true" route="add-staff" @handleSearch="searchData">
            <template #body>
                <tr class="odd:bg-white even:bg-green-100">
                    <td class="w-full p-4 text-center text-red-500 font-bold text-2xl">
                        Tidak Ada Data
                    </td>
                </tr>
            </template>
        </TableComponent>
        <ModalComponent id_modal="form-staff">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Staff Detail
                    </h3>
                    <button type="button" @click="resetSingleData"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="form-staff">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
            </template>
            <template #body>
                <InputFormStaff />
            </template>
        </ModalComponent>
    </div>
</template>

<script setup>
import TableComponent from '../components/TableComponent.vue';
import InputFormStaff from '../components/DetailStaffComponent.vue';
import ModalComponent from '../components/ModalComponent.vue';
import { useStaffStore } from '../store/staff.js';
import { useGlobalStore } from '../store/global';
import { storeToRefs } from 'pinia';
import { ref, watch, watchEffect, provide } from 'vue';

provide('path', 'staff')
const header = ref(['ID', 'NAMA', 'DIVISI', 'SHIFT', 'STATUS'])
const staffStore = useStaffStore()
const store = useGlobalStore()
const { staff, singleData, pagination } = storeToRefs(staffStore)
const isOpen = ref(false)

const resetSingleData = () => {
    isOpen.value = false
    store.resetSingleData()
}

const getSingleData = (id) => {
    isOpen.value = true
    staffStore.getSingleData(id);
};

const deleteData = (id) => {
    staffStore.deleteData(id);
};

const fetchData = () => {
    store.setStaff("25");
};

const getPagination = (url) => {
    store.getPagination(url)
}

const searchData = (search) => {
    staffStore.searchData(search)
}

watchEffect(() => {
    fetchData();
    store.setShift("25")
    store.setDivisi("25")
});

watch(() => staffStore.$state.singleData, () => {
    fetchData();
})
</script>

