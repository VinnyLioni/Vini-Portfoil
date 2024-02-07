<script setup>

</script>

<template>
    <div class="p-4 w-full flex flex-col justify-center items-center pt-28 pb-12 gap-10 h-full">
        <div class="border-slate-100 border-[0.25rem] w-64 h-64 rounded-full overflow-hidden relative">
            <img src="../../assets/me.jpg" alt="" class="w-96 h-96 object-cover absolute -top-20">
        </div>
        <div class="text-5xl flex-wrap w-full text-center flex font-extrabold">
            <span>Olá! Eu sou o <span class="text-slate-300">Vinicius</span>.</span>
        </div>
        <div class="mt-10">
            <button class="flex flex-row gap-4 items-center text-xl tracking-tight font-bold border-slate-100 border-[0.2rem] p-2 rounded-md">
                <i class="fas fa-rocket"></i>
                <span>Vamos Lá!</span>
            </button>
        </div>
    </div>
</template>