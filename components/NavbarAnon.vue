
<template>
    <Toolbar class="layout-topbar">
        <template #start>
            <NuxtLink to="/">
                <NuxtImg alt="logo" src="../assets/images/todo-logo.png" sizes="150vw sm:100vw md:200vw" class="mr-2" />
            </NuxtLink>
        </template>

        <template #end>
            <i class="pi pi-question-circle"></i>
        </template>
    </Toolbar>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';
</script>
