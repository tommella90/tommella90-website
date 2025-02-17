<template>
  <div id="app">
    <router-view/>
    <ParticlesBackgroundView/>
  </div>
</template>

<script>
import ParticlesBackgroundView from './components/ParticlesBackgroundView.vue';

export default {
  name: 'App',
  components: {
    ParticlesBackgroundView,
  },
  mounted() {
    console.log('App component mounted');
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
  margin-top: 60px;
}
</style>