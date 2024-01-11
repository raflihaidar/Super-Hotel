<template>
    <div class="w-[80%] mx-auto">
        <div v-if="statusInput">
            <AlertSuccesComponent />
        </div>
        <form class="grid grid-cols-1 gap-y-3" @submit.prevent="addData" enctype="multipart/form-data">
            <p class="text-3xl font-bold mb-5">Input New Category</p>
            <div class="mb-5">
                <label for="input-nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category
                    Name</label>
                <input type="text" id="input-nama" v-model="payload.kategori"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            </div>
            <div class="mb-5">
                <label for="input-fasilitas"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fasility</label>
                <input type="text" id="input-fasilitas" v-model="payload.fasilitas"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    required>
            </div>
            <div class="mb-5">
                <label for="input-harga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="text" id="input-harga" v-model="payload.harga"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    required>
            </div>
            <div class="mb-5">
                <label for="input-jumlah-kamar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah
                    Kamar</label>
                <input type="text" id="input-jumlah-kamar" v-model="payload.jumlah_kamar"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                    required>
            </div>
            <div class="w-[50%] h-[50%]">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category
                    Description</label>
                <textarea id="message" rows="4" v-model="payload.deskripsi"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Add Description here"></textarea>
            </div>

            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                    file</label>
                <input @change="onChange"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input" type="file">
            </div>

            <div class="flex justify-end mt-10">
                <button type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
                <button type="submit"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCategoryStore } from '../store/category';
import AlertSuccesComponent from '../components/AlertSuccesComponent.vue';

const statusInput = ref(null)
const categoryStore = useCategoryStore()
const payload = ref({
    kategori: "",
    fasilitas: "",
    deskripsi: "",
    harga: null,
    jumlah_kamar: null,
    image: null
})


const onChange = (e) => {
    payload.value.image = e.target.files[0]
}

const addData = async () => {
    const form = new FormData()
    form.append('kategori', payload.value.kategori)
    form.append('fasilitas', payload.value.fasilitas)
    form.append('deskripsi', payload.value.deskripsi)
    form.append('harga', payload.value.harga)
    form.append('jumlah_kamar', payload.value.jumlah_kamar)
    form.append('image', payload.value.image)
    statusInput.value = await categoryStore.addData(payload.value)
}

</script>

