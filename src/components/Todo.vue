<template>
  <label class="panel-block" :class="{ completed: todo.done }">
    <input type="checkbox" @click="toggleTodo(todo)" :checked="todo.done">
    {{ todo.task }}
  </label>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'todo',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions([
        'toggleTodo'
      ])
    },
    mounted () {
      // console.log(this.todo)
    }
  }
</script>
<style scoped>
  .completed { text-decoration: line-through }
</style>
