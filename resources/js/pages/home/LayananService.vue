<script setup>
import VerifyIcon from "../../../assets/icons/VerifyIcon.vue"
import ShieldIcon from "../../../assets/icons/ShieldIcon.vue"
import ListIcon from "../../../assets/icons/ListIcon.vue"
import ChatIcon from "../../../assets/icons/ChatIcon.vue"
</script>


<template>
    <main class="w-full bg-green-900">
        <div class="w-[85%] mx-auto py-20 flex justify-between items-center">
            <section class="w-[45%]">
                <p class="text-lime-600 font-semibold text-sm uppercase tracking-widest mb-8">Kenapa Harus Menggunakan
                    Layanan
                    Kami</p>
                <h1 class="text-lime-100 text-4xl font-bold capitalize mb-8">Kami memberikan hasil layanan terbaik untuk
                    anda
                </h1>
                <span class="flex items-center gap-x-5">
                    <figure class="border-amber-100 border-8 rounded-3xl w-[40%]">
                        <img src="../../../assets/layanan-3.png" alt="image" class="w-full rounded-xl">
                    </figure>
                    <ul>
                        <li class="mb-5 flex gap-x-2 items-center">
                            <ShieldIcon class=" text-lime-100" />
                            <span>
                                <p class="text-lime-100">Garansi Layanan</p>
                                <p class="text-lime-50">Mendapatkan keamanan</p>
                            </span>
                        </li>
                        <li class="mb-5 flex gap-x-2 items-center">
                            <ListIcon class=" text-lime-100" />
                            <span>
                                <p class=" text-lime-100">List Kategori Kamar Terbaik</p>
                                <p class="text-lime-50">Hotel terbaik di Indonesia</p>
                            </span>
                        </li>
                        <li class="mb-5 flex gap-x-2 items-center">
                            <ChatIcon class=" text-lime-100" />
                            <span>
                                <p class=" text-lime-100">Free Consultation</p>
                                <p class="text-lime-50">Tersedia konsultasi terbaik</p>
                            </span>
                        </li>
                    </ul>
                </span>
            </section>
            <section class="w-[45%]">
                <div class="w-[50%] flex flex-col gap-y-5 mx-auto py-4 px-8 rounded-3xl bg-emerald-800">
                    <p class="text-lime-100 text-lg">"Fasilitas memadai tempat yang modern"</p>
                    <p class="text-lime-50 text-sm"> Nikmati pengalaman menginap yang tak terlupakan di destinasi impian
                        Anda.
                        Segera pesan kamar Anda
                        sekarang untuk menjamin tempat Anda dan rasakan kenyamanan tanpa batas bersama kami.</p>
                    <ul>
                        <li class="text-lime-50 flex gap-x-2 mb-4">
                            <VerifyIcon />
                            24 Hours Consultation
                        </li>
                        <li class="text-lime-50 flex gap-x-2 mb-4">
                            <VerifyIcon />
                            Certification Team
                        </li>
                        <li class="text-lime-50 flex gap-x-2 mb-4">
                            <VerifyIcon />
                            More Office Branch
                        </li>
                        <li class="text-lime-50 flex gap-x-2 mb-4">
                            <VerifyIcon />
                            Best Work Result
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>
