<template>
  <NuxtLayout :name="layout">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
const user = { id: "" }
const layout = user.id ? "user" : "default"
</script>

