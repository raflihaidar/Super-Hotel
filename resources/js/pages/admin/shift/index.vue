<script setup>
import BreadCrumbComponent from '../../../components/BaseBreadCrumb.vue';
import InputAtributeStaff from '../../../components/AtributeStaffForm.vue'
import ModalComponent from '../../../components/BaseModal.vue';
import BaseSpinner from '../../../components/BaseSpinner.vue'
import { useGlobalStore } from '../../../store/global';
import { storeToRefs } from 'pinia';
import { watch, onMounted, provide, ref, defineAsyncComponent } from 'vue';

const TableComponent = defineAsyncComponent({
    loader: () => import('../../../components/BaseTable.vue'),
    suspensible: true
})

provide('path', 3)
const header = ref(['SHIFT', 'JAM MASUK', 'JAM KELUAR'])
const store = useGlobalStore()
const { shift, singleData, pagination } = storeToRefs(store)

const searchData = (search) => {
    store.searchData(3, search)
}

onMounted(() => {
    store.getData(3, "25");
});

watch(() => store.$state.singleData, () => {
    store.getData(3, "25");
})
</script>

<template>
    <div class="w-full">
        <nav class="flex flex-col-reverse gap-y-2">
            <BreadCrumbComponent :page="['Admin', 'Shift']" />
            <section class="text-3xl font-bold">Shift</section>
        </nav>

        <Suspense v-if="shift">
            <template #default>
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
                                    @click="store.getSingleData(3, item.id);" data-modal-target="form-shift"
                                    data-modal-toggle="form-shift">Edit</a>
                                <a class="font-medium text-red-600 dark:text-green-500 hover:underline cursor-pointer"
                                    @click="store.deleteData(3, item.id);">delete</a>
                            </td>
                        </tr>
                    </template>
                </TableComponent>
                <TableComponent tableName="Shift" @handleSearch="searchData" v-else>
                    <template #body>
                        <tr
                            class="odd:bg-white text-red-600 font-bold text-lg text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-600">
                            <p>Tidak Ada Data</p>
                        </tr>
                    </template>
                </TableComponent>
            </template>
            <template #fallback>
                <BaseSpinner />
            </template>
        </Suspense>
        <ModalComponent id_modal="form-shift">
            <template #header>
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        shift Form
                    </h3>
                    <button type="button" @click="store.resetSingleData"
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
