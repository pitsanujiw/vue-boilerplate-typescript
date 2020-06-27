const path = require('path');
const WebpackCleanPlugin = require('webpack-clean');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isProd = () => process.env.NODE_ENV === 'production';

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/styles.less')],
    });
}

module.exports = {
  lintOnSave: true,
  publicPath: '/',
  configureWebpack: {
    devtool: isProd() ? 'source-map' : 'eval-source-map',
    plugins: isProd()
      ? [
          new WebpackCleanPlugin(['./dist/index.prod.html']),
          // new BundleAnalyzerPlugin({ openAnalyzer: false })
        ]
      : [],
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    );
    config.output
      .devtoolModuleFilenameTemplate((info) => {
        let filename = 'sources://' + info.resourcePath;
        if (
          info.resourcePath.match(/\.vue$/) &&
          !info.query.match(/type=script&lang=ts/)
        ) {
          filename =
            'webpack-generated:///' + info.resourcePath + '?' + info.hash;
        }
        return filename;
      })
      .devtoolFallbackModuleFilenameTemplate(
        'webpack:///[resource-path]?[hash]'
      );

    config.resolve.alias.set('views', path.resolve(__dirname, 'src/views'));
    // disable lazy loading when it run under dev mode
    if (!isProd()) {
      config.plugins.delete('prefetch');
    } else {
      config.plugin('html').tap((args) => {
        args[0].template = './public/index.html';
        return args;
      });
    }
  },
};
