<template>
    <nav class="flex flex-col-reverse gap-y-2">
        <BreadCrumbComponent :page="['Admin', 'Dashboard']" />
        <section class="text-3xl font-bold">Dashboard</section>
    </nav>
    <main>
        <div class="my-5 flex justify-between">
            <CardComponent cardName="Reservation Details" :data="dataBooking" />
            <CardComponent cardName="Available Rooms" :data="dataRoom" />
        </div>
        <div class="flex items-center justify-between gap-x-5">
            <section
                class="p-5 w-[70%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <span class="flex justify-between mb-3">
                    <p class="font-bold">Total Revenue</p>
                    <p class="font-bold">Export</p>
                </span>
                <canvas id="totalRevenue"></canvas>
            </section>
            <section
                class="p-5 w-[30%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p class="font-bold mb-3">Visitors Over Time</p>
                <canvas id="visitors"></canvas>
            </section>
        </div>
        <div class="flex items-center justify-between gap-x-5">
            <section
                class="p-5 w-[70%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <span>
                    <p class="font-bold">Booking Details</p>
                    <p class="text-xs mb-3">Total Booking Report Find Here</p>
                </span>
                <canvas id="bookings"></canvas>
            </section>
            <section
                class="p-5 w-[30%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p class="font-bold mb-3">Amount Details</p>
                <canvas id="amount"></canvas>
            </section>
        </div>
    </main>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { useBookingStore } from "../store/booking";
import { useRoomStore } from "../store/room";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import Chart from 'chart.js/auto'

const CardComponent = defineAsyncComponent(() => import("../components/CardComponent.vue"))

const bookingStore = useBookingStore()
const roomStore = useRoomStore()
const dataBooking = ref([
    {
        name: "Booking",
        data: 0,
    },
    {
        name: "Checkin",
        data: 0,
    },
    {
        name: "Checkout",
        data: 0,
    },
    {
        name: "Stay",
        data: 0
    }
])

const dataRoom = ref([
    {
        name: "Rooms",
        data: 0,
    },
    {
        name: "Available",
        data: 0,
    },
    {
        name: "unavailable",
        data: 0,
    }
])


const loadBookingData = async () => {
    try {
        const [count, checkinCount, checkoutCount, stayCount] = await Promise.all([
            bookingStore.getCount('count'),
            bookingStore.getCount('check-in'),
            bookingStore.getCount('check-out'),
            bookingStore.getCount('stay')
        ]);

        dataBooking.value[0].data = count;
        dataBooking.value[1].data = checkinCount;
        dataBooking.value[2].data = checkoutCount;
        dataBooking.value[3].data = stayCount;
    } catch (error) {
        console.error("Error loading booking data:", error);
    }
};

const loadRoomData = async () => {
    try {
        const [count, available, unavailable] = await Promise.all([
            roomStore.getCount('count'),
            roomStore.getCount('available'),
            roomStore.getCount('unavailable')
        ]);

        dataRoom.value[0].data = count;
        dataRoom.value[1].data = available;
        dataRoom.value[2].data = unavailable;
    } catch (error) {
        console.error("Error loading room data:", error);
    }
};

const createChart = (id, type, labels, data, backgroundColor, label) => {
    new Chart(id, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: backgroundColor,
                data: data,
                borderWidth: 1,
                label: label
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

onMounted(() => {
    loadBookingData()
    loadRoomData()
    createChart('totalRevenue', 'bar', ['January', 'February', 'March', 'April', 'May', 'June'],
        [12, 19, 3, 5, 2, 3], '#008000', 'Total Revenue');

    createChart('visitors', 'line', ['January', 'February', 'March', 'April', 'May', 'June'],
        [65, 59, 80, 81, 56, 55, 40], 'rgb(75, 192, 192)', 'Visitors Over Time');

    createChart('bookings', 'line', ['January', 'February', 'March', 'April', 'May', 'June'],
        [65, 59, 80, 81, 56, 55, 40], 'rgb(75, 192, 192)', 'Booking Details');

    createChart('amount', 'doughnut', ['Red', 'Blue', 'Yellow'], [300, 50, 100],
        ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'], 'Amount Details');
})
</script>
