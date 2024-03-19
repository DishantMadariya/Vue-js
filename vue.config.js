const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const vueFeatureFlags = {
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_OPTIONS_API__': true,
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_FULL_INSTALLATION__': true,
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_PROD_ERROR_CAPTURE__': false,
        '__VUE_PROD_HYDRATE__': true,
        '__VUE_PROD_SELF_NAME__': false,
        '__VUE_PROD_PROVIDE_INJECT__': false,
        '__VUE_PROD_DEFINE_PROPS__': false,
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_OPTIONS_API__': true,
        '__VUE_PROD_DEVTOOLS__': false,
      };

      args[0]['__VUE_OPTIONS_API__'] = vueFeatureFlags['__VUE_OPTIONS_API__'];
      args[0]['__VUE_PROD_HYDRATE__'] = vueFeatureFlags['__VUE_PROD_HYDRATE__'];

      return args;
    });
  },
});
