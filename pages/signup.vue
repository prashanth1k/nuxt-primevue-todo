<script setup>

const email = ref('');
const password = ref('');
const userExists = ref(false);

async function checkUserExists() {
    const { data } = await useFetch('/api/user-exists', {
        method: 'POST',
        body: JSON.stringify({ email: email.value })
    });
    console.log('checkUserExists data: ', data);
    userExists.value = data.userExists;
}
async function createUser() {
    const { data } = await useFetch('/api/user-create', {
        method: 'POST',
        body: JSON.stringify({ email: email.value })
    });
    console.log('createUser data: ', data);
    userExists.value = data.userExists;
    await navigateTo('/dashboard')
}
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center ">
        <div class="flex flex-column align-items-center justify-content-center">
            data:{{ data }}
            <img src="../assets/images/todo-logo.png" alt="todo app" class="mb-5 w-6rem flex-shrink-0" />
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                        <div class="text-900 text-3xl font-medium mb-3">Hello Chief!</div>
                        <span class="text-600 font-medium">Are you ready to get organized?</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-30rem"
                            v-model="email" @change="checkUserExists" />
                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <small>Login if your user/email id is found. Else, just create one!</small>
                        </div>

                        <label for="password1" class="block text-900 font-medium text-xl mb-2"
                            v-if="userExists">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true"
                            class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }" v-if="userExists">
                        </Password>



                        <Button label="Signup / Login" class="w-full p-3 text-xl" @click="createUser"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>