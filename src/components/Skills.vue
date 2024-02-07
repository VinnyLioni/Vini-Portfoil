<script setup>
    const props = defineProps({
        ref: String
    })

    const skills = 'Encaro cada projeto como meu próprio negócio, impulsionando meu engajamento e comprometimento. Abordo os desafios com paixão, cuidando de cada detalhe para alcançar resultados excepcionais, fortalecendo minha conexão com o projeto e buscando constantemente a excelência.'
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center p-10 2xl:pt-32 pt-36" :ref="ref">
        <span class="text-4xl text-center tracking-tight font-extrabold">Habilidades <span class="text-slate-300">&</span> Conhecimentos</span>
        <span class="text-slate-300 p-4 text-center">{{ skills }}</span>
        <div class="flex-wrap flex text-5xl gap-12 justify-center items-center p-10">
            <img src="../assets/vue.svg" alt="" class="h-16">
            <img src="../assets/react.svg" alt="" class="h-16">
            <img src="../assets/ionic.svg" alt="" class="h-16">
            <img src="../assets/javascript.svg" alt="" class="h-16">
            <img src="../assets/typescript.svg" alt="" class="h-16">
            <img src="../assets/bootstrap.svg" alt="" class="h-16">
            <img src="../assets/html5.svg" alt="" class="h-16">
            <img src="../assets/css3.svg" alt="" class="h-16">
            <img src="../assets/plsql.svg" alt="" class="h-16">
        </div>
    </div>
</template>

<style scoped>
    .white-svg {
        fill: white
    }
</style>