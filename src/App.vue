<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width: 300px" />
    <Home />
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      msg: "Hello",
    };
  }, methods: {
    fun() {
      console.log("");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(0, 117, 39)
  );
}
</style>
