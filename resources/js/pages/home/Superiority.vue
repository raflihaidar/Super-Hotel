<script setup>
import BestIconVue from '../../../assets/icons/BestIcon.vue'
import LocationIconVue from '../../../assets/icons/LocationIcon.vue'
import FacilityIconVue from '../../../assets/icons/FacilityIcon.vue'
import HomeIconVue from '../../../assets/icons/HomeIcon.vue'
import LikeIconVue from '../../../assets/icons/LikeIcon.vue'
import ShieldIconVue from '../../../assets/icons/ShieldIcon.vue'
import ArrowIconVue from '../../../assets/icons/ArrowIcon.vue'
const Superiority = [
    {
        title: "Hotel Terbaik",
        description: "Memberikan list apartemen terbaik di seluruh Indonesia",
        icon: BestIconVue
    },
    {
        title: "Ruangan Modern",
        description: "Memberikan kamar yang modern dan sesuai dengan impian anda",
        icon: HomeIconVue
    },
    {
        title: "Fasilitas Lengkap",
        description: "Menyediakan semua fasilitas yang mendukung dan memadai",
        icon: FacilityIconVue
    },
    {
        title: "Keamanan Terjaga",
        description: "Keamanan terbaik agar pengunjung merasa lebih aman",
        icon: ShieldIconVue
    },
    {
        title: "Lokasi Strategis",
        description: "Lokasi Strategis agar pengunjung lebih nyaman",
        icon: LocationIconVue
    },
    {
        title: "Kuliner Terenak",
        description: "Menyediakan kuliner khas cita rasa khas Indonesia",
        icon: LikeIconVue
    },
]
</script>


<template>
    <main class="bg-amber-100 w-full">
        <ul class="w-[85%] mx-auto py-32  grid grid-cols-3 gap-5 text-center" v-motion-from-bottom>
            <li class="bg-white rounded-3xl py-8 px-3 group hover:bg-green-950 transition-colors"
                v-for="(item, index) in Superiority" :key="index">
                <component :is="item.icon" class="text-lime-600 mx-auto mb-5" />
                <p class="font-bold mb-5 text-lg group-hover:text-lime-200">{{ item.title }}</p>
                <p class="mx-auto w-[65%] mb-5 text-gray-500 group-hover:text-white">{{ item.description }}</p>
                <button
                    class="flex gap-x-2 mx-auto items-center bg-lime-900 text-white rounded-full px-5 py-3 uppercase tracking-widest text-xs">
                    Lihat Selengkapnya
                    <ArrowIconVue />
                </button>
            </li>
        </ul>
    </main>
</template>
