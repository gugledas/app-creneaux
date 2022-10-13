import { AjaxBasic } from "wbuutilities";
import { getSessionToken } from "@shopify/app-bridge-utils";

export default {
  post(
    url = "https://stephane-kouwa.myshopify.com/admin/api/2021-07/products.json"
  ) {
    getSessionToken(window.app).then((token) => {
      var config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      AjaxBasic.get(url, config);
    });
  },
  get(url = "https://stephane-kouwa.myshopify.com") {
    getSessionToken(window.app).then((token) => {
      var config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      AjaxBasic.get(url, config);
    });
  },
  getHost(url, data) {
    return AjaxBasic.post(url, data);
  },
};

// const instance = axios.create();
// // Intercept all requests on this Axios instance
// instance.interceptors.request.use(function (config) {
//   return getSessionToken(window.app) // requires a Shopify App Bridge instance
//     .then((token) => {
//       // Append your request headers with an authenticated token
//       config.headers["Authorization"] = `Bearer ${token}`;
//       return config;
//     });
// });
// // Export your Axios instance to use within your app
// export default instance;
