<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ titre }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { getSessionToken } from "@shopify/app-bridge-utils";
//import myTitleBar from "./components/TitleBar";
import { InitShopifyAppBridge } from "./shopify.js";
const Sp = new InitShopifyAppBridge(
  "38aab48d0208f4ccd19aabbc413a2f18",
  "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2"
);

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      titre: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const app = await Sp.run();
      //console.log("App : ", app, "\n Shopify : ", Shopify);
      const sessionToken = await getSessionToken(app);
      console.log("sessionToken : ", sessionToken);
      this.titre = sessionToken;
    },
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
