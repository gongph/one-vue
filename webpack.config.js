'use strict'

// 设置环境常量
const [DEV, PRO] = ['development', 'production'];
const NODE_ENV = process.env.NODE_ENV || DEV;

const webpack = require('webpack');
const path = require('path');

module.exports = {
  // 入口文件
  entry: {
    app: './src/app.js'
  },

  // 输出
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build.js'
  },

  // 根据环境开启监听模式
  watch: NODE_ENV === DEV,

  // 监听参数配置
  watchOptions: {
    aggregateTimeout: 100
  },

  // 开发工具
  devtool: NODE_ENV === DEV ? 'cheap-inline-module-source-map' : null,

  // 解析
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },

  // 模块
  module: {
    rules: [
      {
      	test: /\.vue$/,
      	loader: 'vue-loader'
      },
      {
      	test: /\.js$/,
      	loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      	test: /\.css$/,
      	loader: 'style-loader!css-loader'
      },
      {
      	test: /\.less/,
      	loader: 'style-loader!css-loader!less-loader'
      },
      {
      	test: /\.(eot|woff2?|svg|ttf|mp3|wav)([\?]?.*)$/,
      	loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};

// 如果是生产环境
if (NODE_ENV === PRO) {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
  	// 定义全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${PRO}"`
      }
    }),

    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}