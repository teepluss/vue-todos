<template>
  <form @submit.prevent="addTodo">
    <div class="panel-block">
      <p class="control has-icon has-icon-right">
        <input class="input is-large" placeholder="What you want to do?" v-model="task" required>
        <i class="fa fa-paw"></i>
      </p>
    </div>
  </form>
</template>
<script>
  // import { mapActions } from 'vuex'

  export default {
    name: 'task',
    data () {
      return {
        task: ''
      }
    },
    methods: {
      addTodo () {
        this.$store.dispatch('addTodo', this.task)
        this.task = ''
      }
    }
  }
</script>
