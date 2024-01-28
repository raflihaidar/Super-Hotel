<template>
    <main class="bg-amber-100 w-full">
        <div class="w-[85%] mx-auto py-32 flex" v-motion-from-right>
            <section class="w-[40%] relative">
                <figure>
                    <img src="../../../assets/layanan-4.png" class="w-60 h-80 rounded-xl" alt="img-layanan">
                </figure>
                <figure class="absolute left-40 top-20 z-20 border-amber-100 border-8 rounded-3xl">
                    <img src="../../../assets/layanan-5.png" class="w-60 h-80 rounded-xl" alt=" img-layanan">
                </figure>
                <div
                    class="bg-lime-900 opacity-80 w-40 py-5 rounded-3xl font-bold text-center absolute top-60 left-16 z-30">
                    <p class="text-lime-600 text-2xl">
                        99%
                    </p>
                    <p class="text-white text-sm">Customer Suka</p>
                </div>
            </section>
            <section class="flex flex-col gap-y-8 w-[40%]">
                <p class="text-lime-600 font-semibold text-lg uppercase tracking-widest">Layanan Terbaik</p>
                <h3 class="font-bold text-4xl">Kami Berikan Hotel dan Layanan Terbaik</h3>
                <p>Memberikan layanan terbaik sampai anda mendapatkan hotel sesuai dengan impian</p>
                <ul class="text-green-950 font-bold">
                    <li class="flex gap-x-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clip-rule="evenodd" />
                        </svg>

                        No.1 Layanan Hotel Terbaik di Indonesia
                    </li>
                    <li class="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            <path fill-rule="evenodd"
                                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                clip-rule="evenodd" />
                        </svg>
                        15 Tahun Lebih Kami Bersedia Layani Anda
                    </li>
                </ul>
                <button
                    class="w-[45%] flex items-center gap-x-2 rounded-full px-6 py-3 text-center bg-lime-900 font-normal text-white text-xs uppercase tracking-widest">
                    Lihat Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </section>
        </div>
    </main>
</template>
