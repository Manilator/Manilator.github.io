<template>
  <div id="app">
    <AnimatedBackground/>
    <NavBar logo="assets/logo.png"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AnimatedBackground
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  background-color: transparent;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
</style>
