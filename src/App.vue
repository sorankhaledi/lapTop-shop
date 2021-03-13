<template>
  <div id="app">
    <app-header class="header"></app-header>
    <router-view class="router"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 62px;
}

</style>
