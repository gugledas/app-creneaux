import createApp from "@shopify/app-bridge";
import { Redirect } from "@shopify/app-bridge/actions";
import queryString from "query-string";
// https://habeuk.online/app/creneaux/shopify-v2?hmac=2cb74988dbe8d885f0da869451cdf37f07140e0ce5b7b8306a6e2552922dfb85&shop=stephane-kouwa.myshopify.com&timestamp=1626934463
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
    }
  }
  test() {
    console.log("WBU :: InitShopifyAppBridge test");
  }
}
export default InitShopifyAppBridge;
// export default {
//   query: queryString.parse(window.location.search),
//   apiKey: "38aab48d0208f4ccd19aabbc413a2f18",
//   redirectUri:
//     "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2",
//   permissionUrl:
//     "https://" +
//     this.query.shop +
//     "/admin/oauth/authorize?client_id=" +
//     this.apiKey +
//     "&scope=read_products,read_content&redirect_uri=" +
//     this.redirectUri,
// };

// const query = queryString.parse(window.location.search);
// console.log("query : ", query, "\n url : ", window.location);
// const apiKey = "38aab48d0208f4ccd19aabbc413a2f18";
// const redirectUri =
//   "https://habeuk.online/creneaux-mylittlepressing/permission";
// const permissionUrl = `https://${query.shop}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;
// console.log("window", window.self);
// console.log("window.frameElement, ", window.frameElement);
// if (window.parent != window.top) {
//   console.log("Nous sommes dans l'IFRAME");
// }
// if (window.top != window.self) {
//   console.log("Nous sommes dans l'IFRAME 2");
// }
// // If the current window is the 'parent', change the URL by setting location.href
// if (!query.host && !query.code) {
//   console.log(" Initialisation de l'application ");
//   window.location.assign(permissionUrl);
// } else if (query.host && query.code) {
//   if (window.location.host !== query.host) {
//     console.log("Redirection vers le tableau de bord de l'utilisateur ");
//     const app = createApp({
//       apiKey: apiKey,
//       host: query.host,
//       shopOrigin: query.shop,
//       forceRedirect: true,
//     });
//     Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
//   } else {
//     console.log("Ouverture de l'application dans l'iframe");
//     const app = createApp({
//       apiKey: apiKey,
//       host: query.host,
//       shopOrigin: query.shop,
//     });
//     Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
//   }
// } else {
//   console.log("Application chargée");
// }
