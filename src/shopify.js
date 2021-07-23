// import createApp from "@shopify/app-bridge";
// import { Redirect } from "@shopify/app-bridge/actions";

// const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());

// var size = Object.keys(params).length;
// var hasCode = Object.keys(params).includes("code");
// console.log("aa", size, hasCode);
// if (size > 0) {
//   var shopOrigin = params.shop;
//   console.log("params", params);
// }

// const apiKey = "edf8a607dac939301587da862391ff9d";
// const redirectUri = `https://4dbda8bf1ac8.ngrok.io/auth/callback`;
// const permissionUrl = `https://${shopOrigin}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;

// //If the current window is the 'parent', change the URL by setting location.href
// if (size > 0) {
//   if (window.top == window.self) {
//     window.location.assign(permissionUrl);
//     console.log("iff");
//     // If the current window is the 'child', change the parent's URL with Shopify App Bridge's Redirect action
//   } else {
//     const app = createApp({
//       apiKey: apiKey,
//       shopOrigin: shopOrigin,
//     });
//     console.log("else", app);
//     Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);
//   }
// }

// //il ne doit redirigé vers la premission  que s'il les paramètres sont > 0 et si code n'est pas présent
// //si params > 0 et code présent il doit verifier que les params sont identique au second
