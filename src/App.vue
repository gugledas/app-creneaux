<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import InitShopifyAppBridge from "./shopify.js";
const Sp = new InitShopifyAppBridge(
  "38aab48d0208f4ccd19aabbc413a2f18",
  "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2"
);
Sp.run();
export default {
  name: "App",
  components: {
    HelloWorld,
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
}
</style>
