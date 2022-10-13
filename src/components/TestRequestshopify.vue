<template>
  <div><button @click="testRequest">test request</button></div>
</template>
<script>
import config from "../configs/config";
import { getSessionToken } from "@shopify/app-bridge-utils";
export default {
  name: "TestRequestshopify",
  props: {
    shop: {
      type: String,
      required: true,
    },
  },
  methods: {
    testRequest() {
      getSessionToken(window.app).then((token) => {
        config.getHost(
          "/shopify-api-rest/request/LoadMetafields?token=" +
            token +
            "&shop=" +
            this.shop,
          { endPoint: "/admin/api/2021-07/products.json" }
        );
      });
    },
  },
};
</script>
