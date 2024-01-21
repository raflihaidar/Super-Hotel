<template>
    <main class="bg-amber-100 w-full">
        <div class="w-[85%] mx-auto py-20 flex flex-col gap-y-10">
            <p class="text-lime-600 font-semibold text-lg uppercase tracking-widest">Layanan Kami</p>
            <section class="flex justify-between items-center">
                <h1 class="font-bold text-4xl w-[40%]">Hotel impian dan ruangan yang modern.</h1>
                <div class="flex gap-x-2 items-center text-lime-600 hover:underline transition cursor-pointer">
                    <p class="uppercase tracking-widest">Lihat
                        selengkapnya</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </section>
            <section class="flex items-center">
                <span class="bg-green-900 text-zinc-300 w-[40%] h-96 p-10 rounded-3xl relative">
                    <p class="w-[45%] italic font-semibold my-16 text-2xl">"Layanan hotel paling terbaik di Indonesia, suka
                        banget.."
                    </p>
                    <h3 class="text-lime-50 font-bold text-2xl">Rafli Haidar</h3>
                </span>
                <span class="grid grid-cols-3 gap-x-8 z-20 absolute right-32">
                    <figure class="border-amber-100 border-8 rounded-3xl">
                        <img src="../../../assets/layanan-1.png" class="w-72 h-72 rounded-xl" alt="img-layanan">
                    </figure>
                    <figure class="border-amber-100 border-8 rounded-3xl">
                        <img src="../../../assets/layanan-2.png" class="w-72 h-72 rounded-xl" alt="img-layanan">
                    </figure>
                    <figure class="border-amber-100 border-8 rounded-3xl">
                        <img src="../../../assets/layanan-3.png" class="w-72 h-72 rounded-xl" alt="img-layanan">
                    </figure>
                </span>
            </section>
        </div>
    </main>
</template>
