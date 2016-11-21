<template>
  <div class="level todo" :id="todo.id">
    <div class="level-left">
      <div class="level-item">
        <label v-show="editing == false">
          <input type="checkbox" @click="toggleTodo(todo)" :checked="todo.done">
          <span :class="{ completed: todo.done }">{{ todo.task }}</span>
        </label>
        <p class="control" v-if="editing">
          <input class="input"
            :value="todo.task"
            v-focus="editing"
            @blur="doneEdit"
            @keyup.enter="doneEdit">
        </p>
      </div>
    </div>
    <div class="level-right">
      <p class="control">
        <a class="button is-small move">
          <span>Move</span>
          <span class="icon is-small">
            <i class="fa fa-arrows"></i>
          </span>
        </a>
        <a class="button is-small" @click="find(todo)">
          <span>Zoom</span>
          <span class="icon is-small">
            <i class="fa fa-tv"></i>
          </span>
        </a>
        <a class="button is-primary is-outlined is-small" @click="editing = true">
          <span>Edit</span>
          <span class="icon is-small">
            <i class="fa fa-pencil"></i>
          </span>
        </a>
        <a class="button is-danger is-outlined is-small" @click="deleteTodo(todo)">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fa fa-times"></i>
          </span>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { focus } from 'vue-focus'

  export default {
    name: 'todo',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        editing: false
      }
    },
    mounted () {
      // console.log(this.todo)
    },
    updated () {
      // console.log(this.editing)
    },
    methods: {
      find (todo) {
        const todoDb = this.$store.dispatch('findTodo', todo)
        todoDb.then((resp) => {
          this.$emit('zoom', resp)
        })
      },
      doneEdit (e) {
        const task = e.target.value
        const { todo } = this
        if (task === '') {
          this.deleteTodo(todo)
        } else if (this.editing) {
          this.editTodo({ todo, task })
          this.editing = false
        }
      },
      ...mapActions([
        'toggleTodo',
        'deleteTodo',
        'editTodo'
      ])
    },
    directives: { focus: focus }
  }
</script>
<style scoped>
  .todo { padding: 5px 20px; margin: 0; }
  .completed { text-decoration: line-through }
</style>
