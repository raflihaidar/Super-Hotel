<script setup>
import ModalComponent from '../../../components/BaseModal.vue';
import BreadCrumbComponent from '../../../components/BaseBreadCrumb.vue';
import inputFormGuest from '../../../components/GuestForm.vue'
import BaseSpinner from '../../../components/BaseSpinner.vue';
import { useGlobalStore } from '../../../store/global';
import { ref, watch, onMounted, provide, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';

const TableComponent = defineAsyncComponent({
    loader: () => import('../../../components/BaseTable.vue'),
    delay: 1000,
    suspensible: true
})


provide('path', 'tamu')
const store = useGlobalStore()
const header = ref(['ID', 'NAMA', 'USERNAME', 'EMAIL'])
const { guest, singleData, pagination } = storeToRefs(store)

const searchData = (search) => {
    store.searchData(1, search)
}

onMounted(() => {
    store.getData(1, "25");
});

watch(() => store.$state.singleData, () => {
    store.getData(1, "25");
})
</script>


<template>
    <div class="w-full py-5 px-5">
        <section class="text-3xl font-bold mb-2">Guest</section>
        <BreadCrumbComponent :page="['Admin', 'Guest']" />
        <Suspense v-if="guest">
            <template #default>
                <TableComponent :header="header" @handleSearch="searchData" :pagination="pagination" tableName="Tamu">
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
                                    @click="store.getSingleData(1, item.id);" data-modal-target="form-guest"
                                    data-modal-toggle="form-guest">Edit</a>
                                <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                                    @click="store.deleteData(1, item.id);">delete</a>
                            </td>
                        </tr>
                    </template>
                </TableComponent>
            </template>
            <template #fallback>
                <BaseSpinner />
            </template>
        </Suspense>
        <ModalComponent id_modal="form-guest">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Guest Form
                    </h3>
                    <button type="button" @click="store.resetSingleData" data-modal-hide="form-guest"
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
                <inputFormGuest />
            </template>
        </ModalComponent>
    </div>
</template>
