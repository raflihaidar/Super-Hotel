<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from "../../store/booking"

const bookingStore = useBookingStore()
const { faktur } = storeToRefs(bookingStore)
const generateInvoice = () => {
    document.getElementById('button').style.display = 'none'
    window.print()
    document.getElementById('button').style.display = 'block'
}
</script>

<template>
    <nav
        class="w-full flex justify-end px-5 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mb-5">
        <button class="bg-lime-900 text-white rounded-xl px-3 py-2 text-sm font-bold" id="button"
            @click="generateInvoice">Cetak</button>
    </nav>
    <div class="w-[60%] mx-auto">
        <section>
            <p class="font-bold text-4xl text-green-500">Super Hotel</p>
        </section>
        <section class="w-[55%] text-sm">
            <ul class="my-10">
                <li class="flex justify-between items-center">
                    <p>Nama : </p>
                    <p>{{ faktur.nama_tamu }}</p>
                </li>
                <li class="flex justify-between items-center">
                    <p>Alamat :</p>
                    <p>{{ faktur.alamat }}</p>
                </li>
            </ul>
            <ul>
                <li class="flex justify-between items-center">
                    <p>No faktur : </p>
                    <p>{{ faktur.kode }}</p>
                </li>
                <li class="flex justify-between items-center">
                    <p>Tanggal : </p>
                    <p>{{ faktur.tanggal_booking }}</p>
                </li>
                <li class="flex justify-between items-center">
                    <p>Periode : </p>
                    <p>
                        <span>{{ faktur.check_in }}</span>
                        <span> - </span>
                        <span>{{ faktur.check_out }}</span>
                    </p>
                </li>
            </ul>
        </section>
        <section>
            <p class="font-bold text-4xl text-center my-5 border-b-2 pb-2 border-black">Faktur</p>
        </section>
        <section>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-s-lg">
                                Deskripsi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Jumlah
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-e-lg">
                                Tarif
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ faktur.kategori }}
                            </th>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                Rp {{ faktur.subtotal }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" class="px-6 py-3 text-base">Total</th>
                            <td class="px-6 py-3">1</td>
                            <td class="px-6 py-3">Rp {{ faktur.total }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    </div>
</template>
