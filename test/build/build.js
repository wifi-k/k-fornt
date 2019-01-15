require('./check-versions')(); // 检查npm和node的版本

process.env.NODE_ENV = 'production'; // 设置环境变量NODE_ENV的值是production
console.log("-------------------"+process.env.npm_lifecycle_event)
process.env.NODE_ENV=process.env.npm_lifecycle_event==='test'?'test':'production'
var ora = require('ora'); // 终端的spinner
var rm = require('rimraf'); // node.js版本的rm -rf
var path = require('path'); // 引入path模块
var chalk = require('chalk'); // 引入显示终端颜色模块
var webpack = require('webpack'); // 引入webpack模块
var config = require('../config'); // 引入基本的配置文件
var webpackConfig = require('./webpack.prod.conf'); // 引入webpack在production环境下的配置文件  

console.log(1)
var spinner = ora('building for production...');
spinner.start()

// 删除打包目标目录下的文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  console.log('error')
  if (err) throw err
  // 进行打包
  webpack(webpackConfig, function(err, stats) {
    // 打包完成
    spinner.stop()
    if (err) throw err
    // 输出打包的状态
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    // 如果打包出现错误
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 打包完成
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
