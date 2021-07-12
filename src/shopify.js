import createApp from "@shopify/app-bridge";
import { Redirect } from "@shopify/app-bridge/actions";

var shopOrigin;
const apiKey = "edf8a607dac939301587da862391ff9d";
const redirectUri = "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";
const permissionUrl = `https://${shopOrigin}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;

console.log("window", window.self);
// If the current window is the 'parent', change the URL by setting location.href
if (window.top == window.self) {
  window.location.assign(permissionUrl);
  console.log("iff");
  // If the current window is the 'child', change the parent's URL with Shopify App Bridge's Redirect action
} else {
  const app = createApp({
    apiKey: apiKey,
    shopOrigin: shopOrigin,
  });
  console.log("else");
  Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);
}
