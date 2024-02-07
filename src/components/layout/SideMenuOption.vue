<script setup>
    const props = defineProps({
        title: String,
        icon: String
    })
</script>

<template>
    <div class="flex flex-row items-center w-full justify-start text-xl font-extrabold tracking-tight">
        <i :class="icon" class="w-2/12"></i>
        <span class="w-9/12">{{ title }}</span>
    </div>
</template>