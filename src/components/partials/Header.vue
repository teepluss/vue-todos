<template>
  <section class="hero is-bold" :class="color">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <i class="fa fa-list"></i> Todos
        </h1>
        <h2 class="subtitle">
          Simeple todo with vue and vuex
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'header',
    props: {
      color: {
        type: String,
        required: false,
        default () {
          return 'is-primary'
        }
      }
    },
    mounted () {
      // console.log(this.color)
    }
  }
</script>
