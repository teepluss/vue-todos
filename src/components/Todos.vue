<template>
  <section class="section">
    <div class="container">
      <div class="panel">
        <p class="panel-heading">Todos ({{ todoUndoneCount }}/ {{ todoCount }})</p>
        <p class="panel-tabs">
          <a class="is-active">All</a>
        </p>
        <task></task>
        <div class="structure">
          <todo v-for="todo in todo.todos" :todo="todo"></todo>
        </div>
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

  let increment = 0

  export default {
    name: 'todos',
    components: {
      Task,
      Todo
    },
    mounted () {
      this.getTodos()

      // this.$store.subscribe((mutation, state) => {
      //   console.log(mutation.type)
      //   console.log(mutation.payload)
      // })
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
    },
    watch: {
      'todo.todos': {
        handler (val, old) {
          if (increment > 0) {
            this.$notify({
              title: 'Syncing',
              message: 'The state was synced to the server.'
            })
          } else {
            this.$message('Fetching...')
          }
          increment++
        },
        deep: true
      }
    }
  }
</script>
