<script setup>
    import { ref } from 'vue'
    import { useMenuStore } from '../store/appStore';

    import SideMenuOption from './layout/SideMenuOption.vue'

    const appStore = useMenuStore()

    const aboutButton = (payload) => {
        appStore.isExpanded=false
        emits('aboutButton', payload)
    }

    const beginButton = (payload) => {
        appStore.isExpanded=false
        emits('beginButton', payload)
    }

    const portButton = (payload) => {
        appStore.isExpanded=false
        emits('portButton', payload)
    }

    const skillButton = (payload) => {
        appStore.isExpanded=false
        emits('skillButton', payload)
    }

    const serviceButton = (payload) => {
        appStore.isExpanded=false
        emits('serviceButton', payload)
    }

    const contButton = (payload) => {
        emits('contButton', payload)
    }

    const emits = defineEmits(['aboutButton', 'beginButton', 'portButton', 'skillButton', 'serviceButton', 'contButton'])

</script>

<template>
    <transition name="slide-fade">
        <aside class="w-5/6 bg-slate-950 flex flex-col p-6 fixed h-screen z-10 shadow-2xl" v-if="appStore.isExpanded">
            <header class="mb-10 flex flex-row justify-start items-baseline">
                <span class="text-2xl font-extrabold tracking-tight">Vini</span>
                <span class="text-sm font-bold tracking-tighter text-slate-400">Developer</span>
            </header>
            <main class="flex flex-col py-2 gap-6">
                <SideMenuOption icon="fas fa-house" title="Início" @emitEvent="beginButton"/>
                <SideMenuOption icon="fas fa-circle-info" title="Sobre" @emit-event="aboutButton"/>
                <SideMenuOption icon="fas fa-briefcase" title="Portfólio" @emit-event="portButton"/>
                <SideMenuOption icon="fas fa-laptop-code" title="Skills" @emit-event="skillButton"/>
                <SideMenuOption icon="fas fa-mug-saucer" title="Serviços" @emit-event="serviceButton"/>
            </main>
            <footer class="mt-10 w-full flex flex-col items-center justify-center">
                <a href="https://api.whatsapp.com/send?phone=5511981080308&text=Olá,%20quero%20mandar%20uma%20mensagem" target="_blank" class="flex justify-center items-center">
                    <button class="flex flex-row items-center text-xl font-extrabold px-10 py-2 bg-slate-900 shadow-sm shadow-slate-800 justify-center gap-2 w-10/12">
                        <i class="fab fa-whatsapp"></i>
                        <span>Contato</span>
                    </button>
                </a>
                <div class="flex w-full justify-evenly mt-10 text-3xl font-extrabold">
                    <div>
                        <a href="https://www.linkedin.com/in/vinnylioni/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/VinnyLioni">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/vinnylioni/">
                            <i class="fab fa-instagram"></i>
                        </a>
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