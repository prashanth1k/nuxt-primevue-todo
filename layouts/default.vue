<template>
    <div>
        <NuxtLoadingIndicator />
        <NavbarAnon />
        <div class=layout-main-container>
            <div class=layout-main>
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>