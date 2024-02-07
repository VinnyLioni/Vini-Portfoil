<script setup>
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
        }
    })

</script>

<template>
    <div class="bg-slate-700 h-1/2 flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden">
        <img :src="img" alt="" class="object-cover">
        <div class="flex flex-col p-4">
            <span class="text-xl font-bold tracking-tighter">{{ title }}</span>
            <span class="text-sm font-thin tracking-wide">{{ content }}</span>
            <div v-if="hasLogin">
                <div class="flex flex-row text-sm gap-2">
                    <span>Email: </span>
                    <span>{{ email }}</span>
                </div>
                <div class="flex flex-row text-sm gap-2">
                    <span>Senha: </span>
                    <span>{{ email }}</span>
                </div>
            </div>
        </div>
        <footer class="w-full bg-slate-600 flex justify-center">
            <button class="m-2 flex flex-row justify-center items-center gap-2 text-lg font-semibold tracking-tighter">
                <i class="fas fa-rocket"></i>
                <span>Saiba Mais</span>
            </button>
        </footer>
    </div>
</template>