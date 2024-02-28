<script setup>
    import { ref } from 'vue'

    // const hasLink = ref(Boolean)

    const props = defineProps({
        title: String,
        content: String,
        hasLogin: {
            type: Boolean,
            default: false
        },
        email: String,
        password: String,
        img: {
            type: String,
            default: 'src/assets/default.jpg'
        },
        hasLink: {
            type: Boolean,
            default: true
        }
    })

    const emitEvent = (payload) => {
        emits('emitEvent', payload)
    }

    const emits=defineEmits(['emitEvent'])

</script>

<template>
    <div class="bg-slate-700 h-[27rem] sm:w-[16rem] flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden">
        <div class="border-[px] border-slate-700 mb-auto overflow-hidden h-32">
            <slot name="photo"></slot>
        </div>
        <div class="flex flex-col h-64 px-4 py-2 ">
            <span class="text-lg font-bold tracking-tighter text-center">{{ title }}</span>
            <span class="text-xs font-light tracking-wide text-justify">{{ content }}</span>
            <div v-if="hasLogin" class="flex flex-col justify-between">
                <div class="flex flex-row text-sm">
                    <span class="font-semibold pr-2">Email: </span>
                    <span>{{ email }}</span>
                </div>
                <div class="flex flex-row text-sm">
                    <span class="font-semibold pr-2">Senha: </span>
                    <span>{{ email }}</span>
                </div>
            </div>
        </div>
        <footer class="mt-auto w-full sm:mt-8 bg-slate-600 flex justify-center hover:bg-slate-800 cursor-pointer duration-100" @click="emitEvent">
            <button class="m-2 flex flex-row justify-center items-center gap-2 text-lg font-semibold tracking-tighter">
                <i class="fas fa-rocket"></i>
                <span>Saiba Mais</span>
            </button>
        </footer>
    </div>
</template>