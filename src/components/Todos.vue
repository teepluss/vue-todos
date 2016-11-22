<template>
  <section class="section">
    <div class="container">
      <div class="panel">
        <p class="panel-heading">Todos ({{ todoUndoneCount }}/ {{ todoCount }})</p>
        <p class="panel-tabs">
          <a class="is-active">All</a>
        </p>
        <task></task>
        <div class="structure" v-sortable="{ onUpdate: onUpdate, handle: '.move' }">
          <!-- You need to add :key that the same is :track-by="$index" in Vue 1.x -->
          <todo v-for="todo in todo.todos" :todo="todo" :key="todo.id" v-on:hi="sayHi"></todo>
        </div>
        <div class="panel-block">
          <button class="button is-primary is-outlined is-fullwidth" @click="clearTodos">
            Clear completed
          </button>
        </div>
      </div>
    </div>
    <el-dialog
      title="JSON"
      v-model="dialogVisible"
      size="tiny"
      v-on:close="close"
      v-if="todo.view !== null">
      <pre><code>{{ JSON.stringify(todo.view, null, 2) }}</code></pre>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import Sortable from 'sortablejs'
  import Task from './Task'
  import Todo from './Todo'

  // let increment = 0

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
    data () {
      return {
        dialogVisible: false,
        current: null
      }
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
      // This method is call from child $emit
      sayHi (message) {
        console.log(message)
      },
      close () {
        this.$store.dispatch('clearTodoView')
      },
      onUpdate (event) {
        const todos = this.$el.querySelectorAll('.todo')
        let positions = []
        todos.forEach((v, i) => {
          positions.push(v.id)
        })

        this.$store.dispatch('positionTodo', positions)
      },
      ...mapActions([
        'getTodos',
        'clearTodos',
        'positionTodo'
      ])
    },
    watch: {
      'todo.view': {
        handler (val, old) {
          if (val !== null) {
            this.dialogVisible = true
          }
        }
      }
      // 'todo.todos': {
      //   handler (val, old) {
      //     if (increment > 0) {
      //       this.$notify({
      //         title: 'Syncing',
      //         message: 'The state was synced to the server.'
      //       })
      //     } else {
      //       this.$message('Fetching...')
      //     }
      //     increment++
      //   },
      //   deep: true
      // }
    },
    directives: {
      sortable (el, binding, vnode) {
        const options = binding.value || {}
        Sortable.create(el, options)
      }
    }
  }
</script>
<style scoped>
  [draggable="true"] {
    border-color: #666;
    border-style: dotted;
    border-width: 1px;
  }
</style>
