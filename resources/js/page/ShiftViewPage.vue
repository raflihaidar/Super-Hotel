<template>
    <div class="w-full">
        <TableComponent :header="header" tableName="Shift" route="add-shift" @handleSearch="searchData"
            :pagination="pagination" :addData="true" v-if="shift.length != 0">
            <template #body>
                <tr class="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    v-for="(item, index) in shift" :key="index">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        item.nama }}</th>
                    <td class="px-4 py-3">{{ item.jam_masuk }}</td>
                    <td class="px-4 py-3">{{ item.jam_keluar }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)" data-modal-target="form-shift"
                            data-modal-toggle="form-shift">Edit</a>
                        <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                            @click="deleteData(item.id)">delete</a>
                    </td>
                </tr>
            </template>
        </TableComponent>
        <TableComponent v-else>
            <template #body>
                <tr class="odd:bg-white even:bg-green-100">
                    <td class="w-full p-4 text-center text-red-500 font-bold text-2xl">
                        Tidak Ada Data
                    </td>
                </tr>
            </template>
        </TableComponent>
        <ModalComponent id_modal="form-shift">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        shift Form
                    </h3>
                    <button type="button" @click="resetSingleData"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="form-shift">
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
                <InputAtributeStaff formName="shift" />
            </template>
        </ModalComponent>
    </div>
</template>

<script setup>
import TableComponent from '../components/TableComponent.vue';
import InputAtributeStaff from '../components/DetailAtributeStaff.vue'
import ModalComponent from '../components/ModalComponent.vue';
import { useShiftStore } from '../store/shift';
import { useGlobalStore } from '../store/global';
import { storeToRefs } from 'pinia';
import { watch, onMounted, provide, ref } from 'vue';

provide('path', 'shift')
const header = ref(['SHIFT', 'JAM MASUK', 'JAM KELUAR'])
const shiftStore = useShiftStore()
const store = useGlobalStore()
const { shift, singleData, pagination } = storeToRefs(shiftStore)

const resetSingleData = () => {
    store.resetSingleData()
}

const getSingleData = (id) => {
    shiftStore.getSingleData(id);
};

const deleteData = (id) => {
    shiftStore.deleteData(id);
};

const fetchData = () => {
    store.setShift("25");
};

const getPagination = (url) => {
    store.getPagination(url)
}

const searchData = (search) => {
    shiftStore.searchData(search)
}

onMounted(() => {
    fetchData();
});

watch(() => store.$state.singleData, () => {
    fetchData();
})
</script>
