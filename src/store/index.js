import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.js';
import reading from './modules/reading.js';
import article from './modules/article.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  	home,
    reading,
    article
  },
  //strict: true
});
