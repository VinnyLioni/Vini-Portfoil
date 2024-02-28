<script setup>
    const props = defineProps({
        ref: String
    })

    const skills = 'Encaro cada projeto como meu próprio negócio, impulsionando meu engajamento e comprometimento. Abordo os desafios com paixão, cuidando de cada detalhe para alcançar resultados excepcionais, fortalecendo minha conexão com o projeto e buscando constantemente a excelência.'
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center p-10 2xl:pt-32 pt-20" :ref="ref">
        <span class="text-4xl text-center tracking-tight font-extrabold">Habilidades <span class="text-slate-300">&</span> Conhecimentos</span>
        <span class="text-slate-100 py-6 text-justify w-full sm:w-3/4">{{ skills }}</span>
        <div class="flex flex-col sm:flex-row justify-center items-center">
            <div class="sm:w-[32rem] w-[18rem]">
                <img src="../assets/Code typing-bro.svg" alt="">
            </div>
            <div class="flex text-5xl gap-12 justify-center items-center sm:p-10 py-6 flex-wrap sm:w-1/3 w-full 2xl:w-1/4">
                <img src="../assets/vue.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/react.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/ionic.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/javascript.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/typescript.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/bootstrap.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/html5.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/css3.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
                <img src="../assets/plsql.svg" alt="" class="h-12 sm:h-16 2xl:h-20">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .white-svg {
        fill: white
    }
</style>