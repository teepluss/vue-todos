<template>
  <section class="section">
    <div class="container">
      <div class="panel">
        <p class="panel-heading">Todos ({{ todoUndoneCount }}/ {{ todoCount }})</p>
        <p class="panel-tabs">
          <a class="is-active">All</a>
        </p>
        <task></task>
        <todo v-for="todo in todo.todos" :todo="todo"></todo>
        <div class="panel-block">
          <button class="button is-primary is-outlined is-fullwidth" @click="clearTodos">
            Clear completed
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import Task from './Task'
  import Todo from './Todo'

  export default {
    name: 'todos',
    components: {
      Task,
      Todo
    },
    mounted () {
      this.getTodos()
    },
    computed: {
      ...mapState([
        'todo'
      ]),
      ...mapGetters([
        'todoCount',
        'todoUndoneCount'
      ])
    },
    methods: {
      ...mapActions([
        'getTodos',
        'addTodo',
        'clearTodos'
      ])
    }
  }
</script>
