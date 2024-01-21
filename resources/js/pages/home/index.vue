
<script setup>
import { defineAsyncComponent } from 'vue';

const Layanan = defineAsyncComponent(() => import('./Layanan.vue'))
const LayananTerbaik = defineAsyncComponent(() => import('./LayananTerbaik.vue'))
const Superiority = defineAsyncComponent(() => import('./Superiority.vue'))
const LayananService = defineAsyncComponent(() => import('./LayananService.vue'))
</script>

<template>
    <Layanan />
    <LayananTerbaik />
    <Superiority />
    <LayananService />
</template>
