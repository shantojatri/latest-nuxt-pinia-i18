<script setup lang="ts">
const { locale } = useI18n();
console.log(locale.value);
const { x, y } = useMouse()
</script> 

<template>
    <div class="flex items-center justify-between px-8 bg-gray-300 py-4">
        <i class="ri-admin-line"></i>
        <h2 class="font-bold text-red-500 text-3xl">Home Page</h2>
    </div>
    <div class="text-stone-900 px-8 py-4">pos: {{x}}, {{y}}</div>
</template>

