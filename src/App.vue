<template>
  <div id="app">
    <app-header color="is-primary"></app-header>
      <todos></todos>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'todos': Todos
  }
}
</script>
