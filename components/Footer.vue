<template>
    <div class="layout-footer">
        <div class="layout-main-container">
            <div class="layout-main">
                <div class="grid">
                    <div class="col-12 md:col-6">
                        (c) Blah Blah Inc. 2021-2023
                    </div>
                    <div class="col-12 md:col-6 text-right">
                        <Button label="Credits" link icon="pi pi-star" @click="visible = true" />

                        <Dialog v-model:visible="visible" modal header="Credits" :style="{ width: '50vw' }">
                            <div class="grid grid-nogutter surface-section text-800">
                                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                                    <section>
                                        <h3>Images</h3>
                                        - <a
                                            href="https://www.freepik.com/free-vector/hand-drawn-business-planning_20286010.htm#query=todo%20list&position=46&from_view=keyword&track=ais">Image
                                            by pikisuperstar</a> on Freepik
                                    </section>

                                </div>

                            </div>
                            <template #footer>

                                <Button label="OK" icon="pi pi-check" @click="visible = false" autofocus />
                            </template>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
let visible = ref(false);
</script>