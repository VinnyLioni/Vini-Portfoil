<script setup>
    import { ref } from 'vue'
    import { useMenuStore } from '../store/appStore';

    import SideMenuOption from './layout/SideMenuOption.vue'

    const appStore = useMenuStore()

</script>

<template>
    <transition name="slide-fade">
        <aside class="w-5/6 bg-slate-950 flex flex-col p-6 fixed h-screen z-10 shadow-2xl" v-if="appStore.isExpanded">
            <header class="mb-10 flex flex-row justify-start items-baseline">
                <span class="text-2xl font-extrabold tracking-tight">Lioni</span>
                <span class="text-sm font-bold tracking-tighter text-slate-400">Code</span>
            </header>
            <main class="flex flex-col py-2 gap-6">
                <SideMenuOption icon="fas fa-house" title="Início"/>
                <SideMenuOption icon="fas fa-circle-info" title="Sobre"/>
                <SideMenuOption icon="fas fa-briefcase" title="Portfólio"/>
                <SideMenuOption icon="fas fa-laptop-code" title="Skills"/>
                <SideMenuOption icon="fas fa-mug-saucer" title="Serviços"/>
            </main>
            <footer class="mt-10 w-full flex flex-col items-center justify-center">
                <button class="flex flex-row items-center text-xl font-extrabold p-2 bg-slate-900 shadow-sm shadow-slate-800 justify-center gap-2 w-10/12">
                    <i class="fab fa-whatsapp"></i>
                    <span>Contato</span>
                </button>
                <div class="flex w-full justify-evenly mt-10 text-3xl font-extrabold">
                    <div>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                    <div>
                        <i class="fab fa-github"></i>
                    </div>
                    <div>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </footer>
        </aside>
    </transition>

</template>

<style>
    .slide-fade-enter-active {
    transition: all 0.1s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
    }
</style>