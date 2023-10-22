<script lang="ts" setup>
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

onMounted(async () => { 
  await switchLocalePath('bn');
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
