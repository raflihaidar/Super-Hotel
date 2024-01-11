<template>
    <div class="w-full py-5 px-5">
        <TableComponent :header="header" route="add-category" tableName="Category" @handleSearch="searchData"
            :pagination="pagination" :addData="true" v-if="category">
            <template #body>
                <tr class="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    v-for="(item, index) in category" :key="index">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.kategori }}</th>
                    <td class="px-4 py-3">{{ item.fasilitas }}</td>
                    <td class="px-4 py-3">{{ item.deskripsi }}</td>
                    <td class="px-4 py-3">Rp {{ item.harga }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)" data-modal-target="form-category"
                            data-modal-toggle="form-category">Edit</a>
                        <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                            @click="deleteData(item.id)">delete</a>
                    </td>
                </tr>
            </template>
        </TableComponent>
        <TableComponent v-else :pagination="pagination" :addData="true" route="add-category" @handleSearch="searchData">
            <template #body>
                <tr class="odd:bg-white even:bg-green-100">
                    <td class="w-full p-4 text-center text-red-500 font-bold text-2xl">
                        Tidak Ada Data
                    </td>
                </tr>
            </template>
        </TableComponent>
        <ModalComponent id_modal="form-category">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Guest Form
                    </h3>
                    <button type="button" @click="resetSingleData" data-modal-hide="form-category"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
                <DetailCategoryComponent />
            </template>
        </ModalComponent>
    </div>
</template>

<script setup>
import ModalComponent from '../components/ModalComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import DetailCategoryComponent from '../components/DetailCategoryComponent.vue';
import { useGlobalStore } from '../store/global';
import { ref, watch, onMounted, provide } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '../store/category';


provide('path', 'kategori')
const header = ref(['KATEGORI', 'FASILITAS', 'DESKRIPSI', 'HARGA'])
const categoryStore = useCategoryStore()
const store = useGlobalStore()
const { category, singleData, pagination } = storeToRefs(categoryStore)

const resetSingleData = () => {
    store.resetSingleData()
}

const getSingleData = (id) => {
    categoryStore.getSingleData(id);
};

const deleteData = (id) => {
    categoryStore.deleteData(id);
};


const fetchData = () => {
    store.setCategory("25");
};

const searchData = (search) => {
    categoryStore.searchData(search)
}

onMounted(() => {
    fetchData();
});

watch(() => store.$state.singleData, () => {
    fetchData();
})

</script>
