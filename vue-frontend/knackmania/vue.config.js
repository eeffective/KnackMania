module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://knackmania.herokuapp.com/api/",
    port: 8081,
  },
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html",
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://knackmania.herokuapp.com/api/saved/"),
          handler: "networkFirst",
          options: {
            networkTimeoutSeconds: 20,
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};
