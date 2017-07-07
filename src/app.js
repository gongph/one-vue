import Vue from 'vue';

import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';

import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';

import Routes from './routes.js';

import AppStyle from './app.css';
import App from './app.vue';

import store from './store';

Vue.use(Framework7Vue);
new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
  // init f7
  framework7: {
    root: '#app',
    routes: Routes,
    animateNavBackIcon: true, // 开启动画导航
    swipeBackPage: false, // 禁止左右滑动返回上一页
    swipePanel: 'left' // 开启滑动打开侧边栏
  }
})