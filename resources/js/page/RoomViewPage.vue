<template>
    <TableProductComponent :header="header" tableName="Product">
        <template #body>
            <tr class="border-b dark:border-gray-700" v-for="(item, index) in room" :key="index">
                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                    item.id }}</th>
                <td class="px-4 py-3">{{ item.kategori }}</td>
                <td class="px-4 py-3">{{ item.fasilitas }}</td>
                <td class="px-4 py-3">{{ item.harga }}</td>
                <td class="px-4 py-3">{{ item.status }}</td>
                <td>
                    <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                        @click="getSingleData(item.id)" data-modal-target="form-room" data-modal-toggle="form-room">Edit</a>
                    <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                        @click="deleteData(item.id)">delete</a>
                </td>
            </tr>
        </template>
    </TableProductComponent>
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
import TableProductComponent from '../components/TableProductComponent.vue';
import DetailRoomCompoonent from '../components/DetailRoomComponent.vue'
import { useRoomStore } from '../store/room'
import { useGlobalStore } from '../store/global';
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

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
