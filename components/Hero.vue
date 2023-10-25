<template>
    <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-7 p-6 text-center md:text-left flex align-items-center md:ml-1">
            <section>
                <span class="block text-6xl font-bold mb-1">Organize your life & everything</span>
                <div class="text-6xl text-primary font-bold mb-3">with the best todo app to ever exist</div>
                <p class="mt-0 mb-4 line-height-4">All you need to track tasks and then some.</p>

                <NuxtLink to="/#features"><Button label="Learn More" type="button" class="p-button-outlined mr-3"></Button>
                </NuxtLink>
                <NuxtLink to="/signup"><Button label="Signup" type="button" class="p-button-raised"
                        icon="pi pi-user-plus"></Button></NuxtLink>
            </section>
        </div>
        <div class="col-12 md:col-4 overflow-hidden">
            <img src="../assets/images/hero.svg" alt="Todo Image" class="md:ml-auto block md:h-full"
                style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
</template>