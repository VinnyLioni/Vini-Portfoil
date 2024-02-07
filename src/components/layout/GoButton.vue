<script setup>
    const props = defineProps({
        title: String,
        icon: String
    })

    const emitEvent = (payload) => {
        emits('emitEvent', payload)
    }

    const emits=defineEmits(['emitEvent'])

</script>

<template>
    <button class="
        flex flex-row gap-4 items-center text-xl 
        tracking-tight font-bold border-slate-100 
        border-[0.2rem] p-2 md:px-8 md:py-4 rounded-md
        duration-200 hover:translate-x-[0.2rem] hover:bg-slate-900
        "
        @click="emitEvent"
    >
        <i :class="icon" class="duration-200"></i>
        <span class="duration-200">{{ title }}</span>
    </button>
</template>

<style>
</style>