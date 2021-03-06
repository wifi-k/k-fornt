// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

//测试环境   cccc 123qwe  
//xsrdtest 123456

var newDomain = "http://test.open.famwifi.com/"//生产环境



// var newDomain = "http://test.open.famwifi.com/api/open/"//开发环境
module.exports = {
    online: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../online_vue/index.html'),
        assetsRoot: path.resolve(__dirname, '../online_vue'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
  build: {
    // env: require('./test.env'),
    // env: require('./prod.env'),
    env: process.env.NODE_ENV === 'test' ? require('./test.env') : require('./prod.env'),
    index: process.env.NODE_ENV === 'test' ? path.resolve(__dirname, '../test/index.html'):path.resolve(__dirname, '../production/index.html'),
    assetsRoot: process.env.NODE_ENV === 'test' ? path.resolve(__dirname, '../test'):path.resolve(__dirname, '../production'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8800,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {        
        '/api/': {
            target: newDomain,
            changeOrigin: true,
            pathRewrite: {
                '^/user': ''
                // api/open/user/loginCheck
            }
        },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
