<script setup>
import ModalComponent from '../../../components/BaseModal.vue';
import BreadCrumbComponent from '../../../components/BaseBreadCrumb.vue';
import BaseSpinner from '../../../components/BaseSpinner.vue';
import { useGlobalStore } from '../../../store/global';
import { ref, watch, onMounted, provide, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';

const TableComponent = defineAsyncComponent({
    loader: () => import('../../../components/BaseTable.vue'),
    suspensible: true
})

provide('path', 6)
const header = ref(['ID', 'CHECK IN', 'CHECK OUT', 'TANGGAL', 'TOTAL', 'STATUS'])
const store = useGlobalStore()
const { booking, singleData, pagination } = storeToRefs(store)

const searchData = (search) => {
    store.searchData(6, search)
}

onMounted(() => {
    store.getData(6, "25");
});

watch(() => store.$state.singleData, () => {
    store.getData(6, "25");
})

</script>


<template>
    <section class="text-3xl font-bold mb-2">Booking</section>
    <BreadCrumbComponent :page="['Admin', 'Booking']" />
    <Suspense v-if="booking">
        <template #default>
            <TableComponent :header="header" tableName="Room" :pagination="pagination" @handleSearch="searchData">
                <template #body>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                        v-for="(item, index) in booking" :key="index">
                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                            item.id }}</th>
                        <td class="px-4 py-3">{{ item.check_in }}</td>
                        <td class="px-4 py-3">{{ item.check_out }}</td>
                        <td class="px-4 py-3">{{ item.tanggal_booking }}</td>
                        <td class="px-4 py-3">Rp {{ item.total }}</td>
                        <td>
                            <a class="font-medium text-green-500 dark:text-green-500 hover:underline cursor-pointer mr-4"
                                @click="store.getSingleData(6, item.id);" data-modal-target="form-booking"
                                data-modal-toggle="form-booking">Edit</a>
                            <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                                @click="store.deleteData(6, item.id);">delete</a>
                        </td>
                    </tr>
                </template>
            </TableComponent>
        </template>
        <template #fallback>
            <BaseSpinner />
        </template>
    </Suspense>
    <ModalComponent id_modal="form-booking">
        <template #header>
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Room Form
                </h3>
                <button type="button" @click=" store.resetSingleData" data-modal-hide="form-booking"
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
        </template>
    </ModalComponent>
</template>
