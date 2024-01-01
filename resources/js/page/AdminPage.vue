<template>
    <Navbar />
    <SideBar />
    <div class="p-4 sm:ml-64 selection:bg-green-500 selection:text-white">
        <router-view></router-view>
    </div>
</template>

<script setup>
import SideBar from "../components/SidebarComponent.vue"
import Navbar from "../components/NavbarAdminComponent.vue"
</script>
