import Vue from 'vue';
import Vuex from 'vuex';

import reading from './modules/reading.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reading
  },
  //strict: true
});
