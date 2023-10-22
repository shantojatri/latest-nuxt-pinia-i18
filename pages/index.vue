<script setup lang="ts">
import { useCounterStore } from "../stores/user";
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { x, y } = useMouse();
console.log(locale.value);

const userStore = useCounterStore();

const getUsersData = async () => {
  const data = await userStore.fetchUsersFromApi();
  console.log(data.value);
};
getUsersData();
</script>

<template>
  <div class="flex items-center justify-between px-8 bg-gray-300 py-4">
    <i class="ri-admin-line"></i>
    <h2 class="font-bold text-red-500 text-3xl">Home Page</h2>
  </div>
  <div class="p-4">
    <div class="text-stone-900 py-4">pos: {{ x }}, {{ y }}</div>
    <p>{{ $t("welcome") }}</p>
    <div class="mt-5"> 
      <NuxtLink :to="switchLocalePath('bn')" class="bg-red-500 px-4 py-2 text-white cursor-pointer rounded-md mr-4">Bangla</NuxtLink>
        <NuxtLink :to="switchLocalePath('en')" class="bg-red-500 px-4 py-2 text-white cursor-pointer rounded-md">English</NuxtLink>
    </div>
  </div>
</template>
