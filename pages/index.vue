<script setup lang="ts">
import {useCounterStore} from "../stores/user";
const { locale } = useI18n();
const { x, y } = useMouse()
console.log(locale.value);

const userStore = useCounterStore();

const getUsersData = async () => {
    const data = await userStore.fetchUsersFromApi() 
    console.log(data.value);
}
getUsersData();
</script> 

<template>
    <div class="flex items-center justify-between px-8 bg-gray-300 py-4">
        <i class="ri-admin-line"></i>
        <h2 class="font-bold text-red-500 text-3xl">Home Page</h2>
    </div>
    <div class="text-stone-900 px-8 py-4">pos: {{x}}, {{y}}</div> 
</template>

