<template>
    <div class="w-full">
        <TableComponent :header="header" :addData="addData" tableName="Divisi" @handleSearch="searchData"
            :pagination="pagination">
            <template #body v-if="divisi.length != 0">
                <tr class="border-b dark:border-gray-700" v-for="(item, index) in divisi" :key="index">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        item.id }}</th>
                    <td class="px-4 py-3">{{ item.nama }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)" data-modal-target="form-attribute"
                            data-modal-toggle="form-attribute">Edit</a>
                        <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                            @click="deleteData(item.id)">delete</a>
                    </td>
                </tr>
            </template>
            <template #body v-else>
                <tr class="odd:bg-white even:bg-green-100">
                    <td class="w-full p-4 text-center">
                        <p>Tidak Ada Data</p>
                    </td>
                </tr>
            </template>
        </TableComponent>
        <ModalComponent id_modal="form-attribute">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Divisi Form
                    </h3>
                    <button type="button" @click="resetSingleData"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="form-attribute">
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
                <InputAtributeStaff formName="divisi" />
            </template>
        </ModalComponent>
    </div>
</template>

<script setup>
import TableComponent from '../components/TableComponent.vue';
import InputAtributeStaff from '../components/DetailAtributeStaff.vue';
import ModalComponent from '../components/ModalComponent.vue';
import { useDivisiStore } from '../store/divisi';
import { useGlobalStore } from '../store/global';
import { storeToRefs } from 'pinia';
import { watch, onMounted, ref, provide } from 'vue';

provide('path', 'divisi')
const header = ref(['ID', 'DIVISI'])
const addData = ref(true)
const divisiStore = useDivisiStore()
const store = useGlobalStore()
const { divisi, singleData, pagination } = storeToRefs(divisiStore)

const resetSingleData = () => {
    store.resetSingleData()
}

const getSingleData = (id) => {
    divisiStore.getSingleData(id);
};

const deleteData = (id) => {
    divisiStore.deleteData(id);
};

const fetchData = () => {
    store.setDivisi("25");
};

const getPagination = (url) => {
    store.getPagination(url)
}

const searchData = (search) => {
    divisiStore.searchData(search)
}

onMounted(() => {
    fetchData();
});

watch(() => store.$state.singleData, () => {
    fetchData();
})
</script>
