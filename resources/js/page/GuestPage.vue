<template>
    <div class="w-full py-5 px-5">
        <TableUserComponent @searchData="searchData">
            <template #btn-delete>
                <button type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>
            </template>
            <template #header>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Nama
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Username
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Email
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </template>

            <template #body>
                <tr v-for="(item, index) in guest" :key="index" class="odd:bg-white even:bg-green-100 ">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.nama }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                            @click="getSingleData(item.id)">Edit</a>
                        <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                            @click="deleteData(item.id)">delete</a>
                    </td>
                </tr>
            </template>
        </TableUserComponent>
        <PaginationComponent :pagination="pagination" @getPagination="getPagination" />
        <ModalComponent :isOpen="isOpen" id_modal="form-guest">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Guest Form
                    </h3>
                    <button type="button" @click="resetSingleData"
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
import PaginationComponent from '../components/PaginationComponent.vue';
import TableUserComponent from '../components/TableComponent.vue';
import inputFormGuest from '../components/InputFormGuest.vue'
import { useGuestStore } from '../store/guest';
import { useGlobalStore } from '../store/global';
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const guestStore = useGuestStore()
const store = useGlobalStore()
const isOpen = ref(false)
const { guest, singleData, pagination } = storeToRefs(guestStore)

const handleClose = () => {
    isOpen.value = false
}

const resetSingleData = () => {
    isOpen.value = false;
    store.resetSingleData()
}

const getSingleData = (id) => {
    isOpen.value = true;
    console.log(isOpen)
    guestStore.getSingleData(id);
};

const deleteData = (id) => {
    guestStore.deleteData(id);
};

const fetchData = () => {
    store.setGuest("25");
};

const getPagination = (url) => {
    store.getPagination(url)
}

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
