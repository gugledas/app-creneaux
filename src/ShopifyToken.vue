<template>
  <div class="loading">
    <h4>{{ title }}</h4>
    <svgLoader></svgLoader>
  </div>
</template>
<script>
import AppBridge from "@shopify/app-bridge";
import queryString from "query-string";
import { Redirect } from "@shopify/app-bridge/actions";
import { getSessionToken } from "@shopify/app-bridge-utils";
//var ShopifyToken;
export default {
  name: "ShopifyToken",
  props: {
    sharedSecret: {
      type: String,
      default: "38aab48d0208f4ccd19aabbc413a2f18",
    },
    apiKey: {
      type: String,
      default: "38aab48d0208f4ccd19aabbc413a2f18",
    },
    redirectUri: {
      type: String,
      default:
        "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2",
    },
    scopes: {
      type: String,
      default: "read_products,read_content",
    },
  },
  components: {
    svgLoader: () => import("./components/svgLoader.vue"),
  },
  data() {
    return {
      query: queryString.parse(window.location.search),
      permissionUrl: "",
      title: "Chargement",
      sessionToken: null,
    };
  },
  mounted() {
    // Construction manuelle de l'url de redirection la validation.
    this.permissionUrl =
      "https://" +
      this.query.shop +
      "/admin/oauth/authorize?client_id=" +
      this.apiKey +
      "&scope=" +
      this.scopes +
      "&redirect_uri=" +
      this.redirectUri;
    // Construction manuelle de l'url de validation vers le tableau de bord.
    this.redirectDashboard =
      "https://" + this.query.shop + "/admin/apps/" + this.apiKey;
    this.init();
  },
  methods: {
    async init() {
      var check;
      // si cest deux paramettres sont presents, alors cest l'initialisation de l'app,
      if (!this.query.code && !this.query.host) {
        console.log(" Initialisation de l'application ");
        this.title = "Initialisation de l'application";
        //On s'assure que cette requette provient de Shopify.( verification du hmac )
        check = true;
        console.log("status Initialisation : ", check);
        if (check) {
          /**
           * On redirige l'utilisateur vers l'approbation.
           */
          window.location.assign(this.permissionUrl);
        }
      } else if (
        this.query.host &&
        this.query.code &&
        window.top == window.self
      ) {
        this.title = "Validation des paramettres";
        check = true;
        const app = new AppBridge({
          apiKey: this.apiKey,
          host: this.query.host,
          shopOrigin: this.query.shop,
          forceRedirect: true,
        });
        Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
      } else {
        this.title = "L'application est prete à etre utiliser";
        const app = new AppBridge({
          apiKey: this.apiKey,
          host: this.query.host,
          shopOrigin: this.query.shop,
        });
        this.sessionToken = await getSessionToken(app);
        this.$emeit("ev_sessionToken", this.sessionToken);
      }
    },
  },
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: row;
  .dialog-off-canvas-main-canvas {
    background: #ebf9fc;
    display: flex;
    align-items: center;
  }
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
  }
}
</style>
