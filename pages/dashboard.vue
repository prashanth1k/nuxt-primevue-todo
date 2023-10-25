<script setup>
import { ref } from 'vue';

const todos = reactive({});
const title = ref('');

async function getTodos() {
    const { data } = await useFetch('/api/todo');
    console.log('getTodos data: ', data);
    todos.value = data;
}
async function createTodo() {
    const { data } = await useFetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({ title: title.value, status: 'in progress' })
    });
    console.log('createTodo data: ', data);
    todos.value.push(data);
}
// execute getTodos on mounted
onBeforeMount(() => {
    console.log('Fetching todos..');
    getTodos();

})
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Add Todo</h5>
                <div class="field p-fluid">
                    <label for="title">Description</label>
                    <InputText id="title" type="text" v-model="title" />
                </div>
                <div class="col-12">
                    <Button @click="createTodo">Add</Button>
                </div>
            </div>
        </div>


        <div class="col-12">
            <div class="card p-fluid">
                <h5>My Todos</h5>
                <div v-if="!todos && todos.value.length <= 0">
                    No todos yet.
                </div>
                <DataView :value="todos.value" v-else>
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.title }}</div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>


        </div>

    </div>
</template>