import { TitleBar, Button, Redirect } from "@shopify/app-bridge/actions";
import { Shopify } from "../shopify";
const app = Shopify.App;
const breadcrumb = Button.create(app, { label: "My breadcrumb" });
breadcrumb.subscribe(Button.Action.CLICK, () => {
  app.dispatch(Redirect.toApp({ path: "/breadcrumb-link" }));
});

const titleBarOptions = {
  title: "My page title",
  breadcrumbs: breadcrumb,
};

const myTitleBar = TitleBar.create(app, titleBarOptions);
export default myTitleBar;
