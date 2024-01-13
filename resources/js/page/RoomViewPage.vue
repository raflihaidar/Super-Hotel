<template>
    <nav class="flex flex-col-reverse gap-y-2">
        <section class="text-3xl font-bold">Room</section>
        <section class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Admin
                    </a>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Room</a>
                    </div>
                </li>
            </ol>
        </section>
    </nav>

    <TableComponent :header="header" tableName="Room" :pagination="pagination" :addData="true" route="add-room"
        @handleSearch="searchData" v-if="room">
        <template #body>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                v-for="(item, index) in room" :key="index">
                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                    item.room_name }}</th>
                <td class="px-4 py-3">{{ item.kategori }}</td>
                <td class="px-4 py-3">{{ item.fasilitas }}</td>
                <td class="px-4 py-3">Rp {{ item.harga }}</td>
                <td class="px-4 py-3">{{ item.status }}</td>
                <td>
                    <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                        @click="getSingleData(item.id)" data-modal-target="form-room" data-modal-toggle="form-room">Edit</a>
                    <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                        @click="deleteData(item.id)">delete</a>
                </td>
            </tr>
        </template>
    </TableComponent>
    <TableComponent v-else :pagination="pagination" :addData="true" route="add-room" @handleSearch="searchData">
        <template #body>
            <tr class="odd:bg-white even:bg-green-100">
                <td class="w-full p-4 text-center text-red-500 font-bold text-2xl">
                    Tidak Ada Data
                </td>
            </tr>
        </template>
    </TableComponent>
    <ModalComponent id_modal="form-room">
        <template #header>
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Room Form
                </h3>
                <button type="button" @click="resetSingleData" data-modal-hide="form-room"
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
            <DetailRoomCompoonent />
        </template>
    </ModalComponent>
</template>

<script setup>
import ModalComponent from '../components/ModalComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import DetailRoomCompoonent from '../components/DetailRoomComponent.vue'
import { useRoomStore } from '../store/room'
import { useGlobalStore } from '../store/global';
import { ref, watch, onMounted, provide } from 'vue';
import { storeToRefs } from 'pinia';

provide('path', 'kamar')
const roomStore = useRoomStore()
const store = useGlobalStore()
const header = ref(['NOMOR KAMAR', 'KATEGORI', 'FASILITAS', 'HARGA', 'STATUS'])
const { room, singleData, pagination } = storeToRefs(roomStore)

const resetSingleData = () => {
    store.resetSingleData()
}

const getSingleData = (id) => {
    roomStore.getSingleData(id);
};

const deleteData = (id) => {
    roomStore.deleteData(id);
};


const fetchData = () => {
    store.setRoom("25");
};

const searchData = (search) => {
    roomStore.searchData(search)
}

onMounted(() => {
    fetchData();
});

watch(() => store.$state.singleData, () => {
    fetchData();
})

</script>t
