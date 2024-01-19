<script setup>
import ModalComponent from '../../../components/BaseModal.vue';
import BreadCrumbComponent from '../../../components/BaseBreadCrumb.vue';
import BaseSpinner from '../../../components/BaseSpinner.vue';
import DetailRoomCompoonent from '../../../components/RoomForm.vue'
import { useGlobalStore } from '../../../store/global';
import { useRoomStore } from '../../../store/room';
import { ref, watch, onMounted, provide, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';

const TableComponent = defineAsyncComponent({
    loader: () => import('../../../components/BaseTable.vue'),
    delay: 500
})

provide('path', 4)
const store = useGlobalStore()
const roomStore = useRoomStore()
const header = ref(['NOMOR KAMAR', 'KATEGORI', 'FASILITAS', 'HARGA', 'STATUS'])
const { room, singleData, pagination } = storeToRefs(store)
const { status } = storeToRefs(roomStore)

const searchData = (search) => {
    store.searchData(4, search)
}

onMounted(() => {
    roomStore.getRoomStatus()
    store.getData(4, "25")
});


watch(() => store.$state.singleData, () => {
    store.getData(4, "25");
})
</script>t


<template>
    <nav class="flex flex-col-reverse gap-y-2">
        <BreadCrumbComponent :page="['Admin', 'Room']" />
        <section class="text-3xl font-bold">Room</section>
    </nav>
    <TableComponent :header="room.length != 0 ? header : null" tableName="Room" :pagination="pagination" :addData="true"
        route="add-room" @handleSearch="searchData" @deleteAllData="store.deleteAllData(4)" :filterData="status">
        <template #body v-if="room.length != 0">
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
                        @click="store.getSingleData(4, item.id)" data-modal-target="form-room"
                        data-modal-toggle="form-room">Edit</a>
                    <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                        @click="store.deleteData(4, item.id)">delete</a>
                </td>
            </tr>
        </template>
        <template #body v-else>
            <tr
                class="odd:bg-white text-red-600 font-bold text-lg text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-600">
                <p>Tidak Ada Data</p>
            </tr>
        </template>
    </TableComponent>


    <ModalComponent id_modal="form-room">
        <template #header>
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Room Form
                </h3>
                <button type="button" @click="store.resetSingleData" data-modal-hide="form-room"
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
