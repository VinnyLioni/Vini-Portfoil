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
        // if (appRoot.value && !appRoot.value.contains(e.target) && appStore.isExpanded === true) {
        //     appStore.toggleMenu(false)
        //     console.log('fora')
        // }

        const navBarElement = document.querySelector('aside')
        const buttonElement = document.querySelector('button')

        if (navBarElement && !navBarElement.contains(e.target) && !buttonElement.contains(e.target)) {
            appStore.toggleMenu(false)
            console.log('fora')
        }
    }

    const aboutRef = ref(null)
    const beginRef = ref(null)
    const portRef = ref(null)
    const skillRef = ref(null)
    const servRef = ref(null)
    const footerRef = ref(null)

    const scrollToAbout = () => {
        if (aboutRef.value && aboutRef.value.$el) {
            const yOffset = aboutRef.value.$el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }

    const scrollToBegin = () => {
        if (beginRef.value && beginRef.value.$el) {
            const yOffset = beginRef.value.$el.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: yOffset, behavior: 'smooth'})
        }
    }

    const scrollToPort = () => {
        if (portRef.value && portRef.value.$el) {
            const yOffset = portRef.value.$el.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: yOffset, behavior: 'smooth'})
        }
    }

    const scrollToSkill = () => {
        if (skillRef.value && skillRef.value.$el) {
            const yOffset = skillRef.value.$el.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: yOffset, behavior: 'smooth'})
        }
    }

    const scrollToService = () => {
        if (servRef.value && servRef.value.$el) {
            const yOffset = servRef.value.$el.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: yOffset, behavior: 'smooth'})
        }
    }

    const scrollToCont = () => {
        if (footerRef.value && footerRef.value.$el) {
            const yOffset = footerRef.value.$el.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({ top: yOffset, behavior: 'smooth'})
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
        <Header 
            @aboutButton="scrollToAbout" @beginButton="scrollToBegin" @portButton="scrollToPort"
            @skillButton="scrollToSkill" @serviceButton="scrollToService" @contButton="scrollToCont"/>
        <SideMenu 
            @aboutButton="scrollToAbout" @beginButton="scrollToBegin" @portButton="scrollToPort"
            @skillButton="scrollToSkill" @serviceButton="scrollToService" @contButton="scrollToCont"
        />
        <div class="flex-1 h-auto overflow-y-hidden overflow-x-scroll">
            <Main ref="beginRef" @click-button="scrollToAbout"/>
            <About ref="aboutRef" />
            <PortFoil ref="portRef"/>
            <Skills ref="skillRef"/>
            <Services ref="servRef"/>
        </div>
        <Footer ref="footerRef"/>
    </div>
</template>
