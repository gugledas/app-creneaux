import createApp from "@shopify/app-bridge";
import { Redirect } from "@shopify/app-bridge/actions";
import queryString from "query-string";
// https://habeuk.online/app/creneaux/shopify-v2?hmac=2cb74988dbe8d885f0da869451cdf37f07140e0ce5b7b8306a6e2552922dfb85&shop=stephane-kouwa.myshopify.com&timestamp=1626934463

const Shopify = {
  apiKey: "",
  redirectUri: "",
  shopOrigin: "",
  App: {},
};
/**
 * @param() apiKey
 * @param() redirectUri
 */
class InitShopifyAppBridge {
  constructor(apiKey, redirectUri) {
    this.apiKey = apiKey;
    this.redirectUri = redirectUri;
    this.query = queryString.parse(window.location.search);
    this.permissionUrl =
      "https://" +
      this.query.shop +
      "/admin/oauth/authorize?client_id=" +
      this.apiKey +
      "&scope=read_products,read_content&redirect_uri=" +
      this.redirectUri;
  }

  run() {
    if (window.parent != window.top) {
      console.log("Nous sommes dans l'IFRAME");
    }
    if (window.top != window.self) {
      console.log("Nous sommes dans l'IFRAME 2");
    }
    return new Promise((resolv) => {
      // If the current window is the 'parent', change the URL by setting location.href
      if (!this.query.host && !this.query.code) {
        console.log(" Initialisation de l'application ");
        window.location.assign(this.permissionUrl);
      } else if (this.query.host && this.query.code) {
        if (window.location.host !== this.query.host) {
          console.log("Redirection vers le tableau de bord de l'utilisateur ");
          const app = createApp({
            apiKey: this.apiKey,
            host: this.query.host,
            shopOrigin: this.query.shop,
            forceRedirect: true,
          });
          Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
        } else {
          console.log("Ouverture de l'application dans l'iframe");
          const app = createApp({
            apiKey: this.apiKey,
            host: this.query.host,
            shopOrigin: this.query.shop,
          });
          Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
        }
      } else {
        console.log("Application chargée");
        const App = createApp({
          apiKey: this.apiKey,
          host: this.query.host,
          shopOrigin: this.query.shop,
        });
        Shopify.apiKey = this.apiKey;
        Shopify.redirectUri = this.redirectUri;
        Shopify.shopOrigin = this.query.host;
        Shopify.App = App;
        resolv(App);
      }
    });
    //
  }
  test() {
    console.log("WBU :: InitShopifyAppBridge test");
  }
}

export { InitShopifyAppBridge, Shopify };
