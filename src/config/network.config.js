export default {
  baseUrl:
    import.meta.env.MODE === "development" ? "http://jiayupearl.shop/java/" : "/",
  href:
    import.meta.env.MODE === "development"
      ? "http://jiayupearl.shop/java/"
      : `${window.location.protocol}//${window.location.host}`,
  authorizationKey: "Authorization"
};
