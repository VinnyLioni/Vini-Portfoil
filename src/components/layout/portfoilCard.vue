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
    <div class="bg-slate-700 sm:w-1/3 flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden">
        <div class="pt-4 rounded-md">
            <slot name="photo"></slot>
        </div>
        <div class="flex flex-col p-4">
            <span class="text-xl font-bold tracking-tighter text-center">{{ title }}</span>
            <span class="text-sm font-thin tracking-wide">{{ content }}</span>
            <div v-if="hasLogin" class="flex flex-col 2xl:flex-row justify-between">
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
        <footer class="w-full sm:mt-8 bg-slate-600 flex justify-center hover:bg-slate-800 cursor-pointer duration-100" @click="emitEvent">
            <button class="m-2 flex flex-row justify-center items-center gap-2 text-lg font-semibold tracking-tighter">
                <i class="fas fa-rocket"></i>
                <span>Saiba Mais</span>
            </button>
        </footer>
    </div>
</template>