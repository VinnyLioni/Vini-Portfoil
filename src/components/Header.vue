<script setup>
    import { ref } from 'vue'
    import { useMenuStore } from '../store/appStore'

    const appStore = useMenuStore()
    
    const toggleMenu = (payload) => {
        appStore.toggleMenu(payload)
    }
</script>

<template>
    <header class="p-6 gap-2 w-full z-10 flex justify-center fixed shadow-md bg-vini-blue">
        <header class="flex flex-row justify-start items-baseline">
            <span class="text-2xl font-extrabold tracking-tight">Vini</span>
            <span class="text-sm font-bold tracking-tighter text-slate-400">Developer</span>
        </header>
        <div class="hidden md:flex">
            <div>Início</div>
            <div>Sobre</div>
            <div>Portfolio</div>
            <div>Skills</div>
            <div>Serviços</div>
            <div>Contato</div>
        </div>
        <button class="ml-auto flex flex-col justify-center items-center gap-2 h-8" @click="toggleMenu(true)">
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class=" appStore.isExpanded ? 'rotate-12 duration-200' : 'duration-200'"></div>
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class="appStore.isExpanded ? 'duration-200 -ml-1' : 'duration-200'"></div>
            <div class="content-[''] bg-slate-100 w-8 h-[4px] rounded-lg" :class="appStore.isExpanded ? '-rotate-12 duration-200' : 'duration-200'"></div>
        </button>
    </header>
</template>

<style>
</style>