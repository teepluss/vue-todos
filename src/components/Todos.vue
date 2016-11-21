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
          <todo v-for="todo in todo.todos" :todo="todo" v-on:zoom="show"></todo>
        </div>
        <div class="panel-block">
          <button class="button is-primary is-outlined is-fullwidth" @click="clearTodos">
            Clear completed
          </button>
        </div>
      </div>
    </div>
    <el-dialog title="Zoomer" v-model="dialogVisible" size="tiny" v-if="current !== null">
      <span>{{ current.task }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
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

      // this.$on('on:zoom', () => {
      //   console.log('aoom')
      // })

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
      show (todo) {
        this.current = todo
        this.dialogVisible = true
      },
      ...mapActions([
        'getTodos',
        'clearTodos'
      ])
    },
    watch: {
      // 'todo.zoom': {
      //   handler (val, old) {
      //     console.log(val)
      //     this.dialogVisible = true
      //   }
      // },
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
    }
  }
</script>
