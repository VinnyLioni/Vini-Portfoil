<script setup>
    const props = defineProps({
        title: String,
        content: String,
        icon: String
    })
</script>

<template>
    <div class="bg-slate-800 hover:bg-slate-900 duration-100 p-10 sm:w-1/4 sm:h-1/2 sm:px-4 sm:py-10 flex flex-col justify-center items-center text-center shadow-md gap-4">
        <span class="text-2xl font-extrabold tracking-tight">{{ title }}</span>
        <i :class="icon" class="text-5xl"></i>
        <span class="text-slate-300">{{ content }}</span>
    </div>
</template>