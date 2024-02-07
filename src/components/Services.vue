<script setup>
    const props = defineProps({
        ref: String
    })

    import ServicesOption from './layout/ServicesOption.vue';
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center p-10 2xl:pt-32 pt-36" :ref=ref>
        <span class="text-5xl text-center tracking-tight font-extrabold">Serviços</span>
        <span class="text-slate-300 p-4">Confira os serviços disponíveis.</span>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 m-2">
            <ServicesOption title="Aplicações Web" content="Soluções para quem procura o desenvolvimeto de sua aplicação web." icon="fas fa-store"/>
            <ServicesOption title="Aplicações Mobile" content="Soluções para quem procura o desenvolvimento de uma aplicação Mobile." icon="fas fa-mobile"/>
            <ServicesOption title="Website Personalizado" content="Soluções para quem procura o desenvolvimento de seu website totalmente personalizado." icon="fas fa-globe"/>
        </div>
    </div>
</template>