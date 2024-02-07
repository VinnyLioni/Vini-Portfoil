<script setup>
    const props = defineProps({
        title: String
    })

    const emitEvent = (payload) => {
        emits('emitEvent', payload)
    }

    const emits = defineEmits(['emitEvent'])
</script>

<template>
    <div class="sm:text-md 2xl:text-xl sm:pr-20 2xl:pr-32">
        <span class="hover:cursor-pointer hover:text-slate-400 duration-200" @click="emitEvent">
            {{ title }}
        </span>
    </div>
</template>