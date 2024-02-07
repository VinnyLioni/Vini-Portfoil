<script setup>
    import { ref } from 'vue'
    import { useMenuStore } from '../store/appStore'
    import HeaderOption from './layout/HeaderOption.vue';

    const appStore = useMenuStore()
    
    const toggleMenu = (payload) => {
        appStore.toggleMenu(payload)
    }

    const aboutButton = (payload) => {
        emits('aboutButton', payload)
    }

    const beginButton = (payload) => {
        emits('beginButton', payload)
    }

    const portButton = (payload) => {
        emits('portButton', payload)
    }

    const skillButton = (payload) => {
        emits('skillButton', payload)
    }

    const serviceButton = (payload) => {
        emits('serviceButton', payload)
    }

    const contButton = (payload) => {
        emits('contButton', payload)
    }

    const emits = defineEmits(['aboutButton', 'beginButton', 'portButton', 'skillButton', 'serviceButton', 'contButton'])

</script>

<template>
    <header class="
            p-6 gap-2 w-full z-10 flex justify-center fixed shadow-md bg-vini-blue
            md:flex-row md:items-baseline            
        ">
        <header class="flex flex-row justify-start items-baseline md:w-1/4 md:ml-auto">
            <span class="text-2xl font-extrabold tracking-tight">Vini</span>
            <span class="text-sm font-bold tracking-tighter text-slate-400">Developer</span>
        </header>
        <div class="hidden md:flex md:flex-row md:w-3/4 justify-start">
            <HeaderOption title="Início" @emitEvent="beginButton"/>
            <HeaderOption title="Sobre" @emitEvent="aboutButton"/>
            <HeaderOption title="Portfólio" @emitEvent="portButton"/>
            <HeaderOption title="Skills" @emitEvent="skillButton"/>
            <HeaderOption title="Serviços" @emitEvent="serviceButton"/>
            <HeaderOption title="Contato" @emitEvent="contButton"/>
        </div>
        <button class="md:hidden ml-auto flex flex-col justify-center items-center gap-2 h-8" @click="toggleMenu(true)">
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class=" appStore.isExpanded ? 'rotate-12 duration-200' : 'duration-200'"></div>
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class="appStore.isExpanded ? 'duration-200 -ml-1' : 'duration-200'"></div>
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class="appStore.isExpanded ? '-rotate-12 duration-200' : 'duration-200'"></div>
        </button>
    </header>
</template>

<style>
</style>