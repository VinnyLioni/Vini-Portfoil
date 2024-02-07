<script setup>
    const props = defineProps({
        title: String,
        icon: String
    })

    const emitEvent = (payload) => {
        emits('emitEvent', payload)
    }

    const emits = defineEmits(['emitEvent'])
</script>

<template>
    <div class="flex flex-row items-center w-full justify-start text-xl font-extrabold tracking-tight">
        <i :class="icon" class="w-2/12"></i>
        <span class="w-9/12" @click="emitEvent">{{ title }}</span>
    </div>
</template>