<template>
    <div class="w-full py-5 px-5">
        <TableComponent :header="header" @handleSearch="searchData" :pagination="pagination" tableName="Tamu" v-if="guest">
            <template #body>
                <tr class="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    v-for="(item, index) in guest" :key="index">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        item.id }}</th>
                    <td class="px-4 py-3">{{ item.nama }}</td>
                    <td class="px-4 py-3">{{ item.username }}</td>
                    <td class="px-4 py-3">{{ item.email }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)" data-modal-target="form-guest"
                            data-modal-toggle="form-guest">Edit</a>
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
        <ModalComponent id_modal="form-guest">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Guest Form
                    </h3>
                    <button type="button" @click="resetSingleData" data-modal-hide="form-guest"
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
                <inputFormGuest @closeModal="isOpen = false" />
            </template>
        </ModalComponent>
    </div>
</template>

<script setup>
import ModalComponent from '../components/ModalComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import inputFormGuest from '../components/DetailGuestComponent.vue'
import { useGuestStore } from '../store/guest';
import { useGlobalStore } from '../store/global';
import { ref, watch, onMounted, provide } from 'vue';
import { storeToRefs } from 'pinia';

provide('path', 'tamu')
const guestStore = useGuestStore()
const store = useGlobalStore()
const header = ref(['ID', 'NAMA', 'USERNAME', 'EMAIL'])
const { guest, singleData, pagination } = storeToRefs(guestStore)

const resetSingleData = (modalId) => {
    store.resetSingleData()
}

const getSingleData = (id) => {
    guestStore.getSingleData(id);
};

const deleteData = (id) => {
    guestStore.deleteData(id);
};


const fetchData = () => {
    store.setGuest("25");
};

const searchData = (search) => {
    guestStore.searchData(search)
}

onMounted(() => {
    fetchData();
});

watch(() => store.$state.singleData, () => {
    fetchData();
})

</script>
