<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    import Header from '../components/Header.vue';
    import SideMenu from '../components/SideMenu.vue'
    import Main from '../components/layout/Main.vue';
    import About from '../components/About.vue'
    import PortFoil from '../components/PortFoil.vue'
    import Skills from '../components/Skills.vue';
    import Services from '../components/Services.vue';
    import Footer from '../components/Footer.vue'

    import { useMenuStore } from '../store/appStore';

    const appStore = useMenuStore()

    const appRoot = ref(null)

    const handleClickOutside = (e) => {
        if (appRoot.value && !appRoot.value.contains(e.target) && appStore.isExpanded === true) {
            appStore.toggleMenu(false)
            console.log('fora')
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

</script>

<template>
    <div class="flex flex-col h-full" ref="appRoot">
        <Header />
        <SideMenu />
        <div class="flex-1 h-auto overflow-y-hidden overflow-x-scroll">
            <Main />
            <About />
            <PortFoil />
            <Skills />
            <Services />
        </div>
        <Footer />
    </div>
</template>