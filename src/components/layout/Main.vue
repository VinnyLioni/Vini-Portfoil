<script setup>
    import GoButton from './GoButton.vue';

    const props = defineProps({
        ref: String
    })

    const clickButton=(payload) => {
        emits('clickButton', payload)
    }

    const emits=defineEmits(['clickButton'])


</script>

<template>
    <div class="
        p-4 w-full flex flex-col justify-center items-center pt-28 sm:pt-36 2xl:pt-44 pb-12 h-full
    " :ref="ref">
        <div class="border-slate-100 border-[0.25rem] w-64 h-64 sm:w-80 sm:h-80 2xl:h-96 2xl:w-96 rounded-full overflow-hidden relative">
            <img src="../../assets/MEbw.jpg" alt="" class="w-96 h-96 sm:w-auto sm:h-auto 2xl:h-96 2xl:w-96 object-cover absolute -top-20 2xl:-top-3">
        </div>
        <div class="text-5xl 2xl:text-6xl flex-wrap w-full text-center flex font-extrabold md:justify-center mt-16 2xl:m-16">
            <span>Olá! Eu sou o <span class="text-slate-300">Vinicius</span>.</span>
        </div>
        <div class="mt-16 sm:mt-10 mb-24">
            <GoButton title="Vamos Lá!" icon="fas fa-rocket" @emit-event="clickButton"/>
        </div>
    </div>
</template>