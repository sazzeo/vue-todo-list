<template>

</template>

<script setup>

import {provide, readonly, ref} from "vue";

const todos = ref([]);
provide('todos', readonly(todos));

const initTodos = (init_todos) => {
  todos.value = init_todos;
}

const addTodo = (todo, date) => {}; // 추가된 todo
const removeTodo = (id) => {};  //지워진 todo
const completeTodo = (id) => {};  //완료 된 todo

provide('addTodo' , addTodo);
provide('removeTodo' , removeTodo);
provide('completeTodo' , completeTodo);

</script>

<style scoped>

</style>