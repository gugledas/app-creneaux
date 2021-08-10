<template>
  <div>
    <h4>{{ title }}</h4>
  </div>
</template>
<script>
import ShopifyToken from "shopify-token";
import queryString from "query-string";
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
  data() {
    return {
      query: queryString.parse(window.location.search),
      permissionUrl: "",
      title: "Chargement",
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
    // construction manuelle de l'url de validation vers le tableau de bord.
    this.redirectDashboard =
      "https://" + this.query.shop + "/admin/apps/" + this.apiKey;
    this.init();
  },
  methods: {
    init() {
      const shopifyToken = new ShopifyToken({
        sharedSecret: this.sharedSecret,
        redirectUri: this.redirectUri,
        apiKey: this.apiKey,
        scopes: this.scopes,
        timeout: 60000,
        accessMode: "per-user",
      });
      var check;
      // si cest deux paramettres sont presents, alors cest l'initialisation de l'app,
      if (!this.query.code && !this.query.host) {
        console.log(" Initialisation de l'application ");
        this.title = "Initialisation de l'application";
        //on s'assure que cette requette provient de Shopify.
        check = shopifyToken.verifyHmac(this.query);
        console.log("status Initialisation : ", check);
        var userShop = this.query.shop.split(".myshopify.com");
        console.log("userShop : ", userShop);
        /**
         * on redirige l'utilisateur vers l'approbation.
         */
        this.permissionUrl = shopifyToken.generateAuthUrl(userShop[0]);
        window.location.assign(this.permissionUrl);
      } else if (this.query.host && this.query.code) {
        this.title = "Validation des paramettres";
        check = shopifyToken.verifyHmac(this.query);
        console.log("Status Validation des paramettres : ", check);
        window.location.assign(this.redirectDashboard);
      } else {
        this.title = "L'application est prete à etre utiliser";
      }
    },
  },
};
</script>
