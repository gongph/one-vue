import server from '../../models/music.js';
import * as types from '../mutation-types.js';

const state = {
  topten: []
}

const getters = {
  topTen: state => state.topten
}

const actions = {
  getTopTen ({ commit }) {
    server.getToptenMusic().then(response => {
      commit(types.RECEIVE_TOPTEN, response.data.data);
    });
  },
  getNextPageById ({ commit }, id) {
    server.getNextPageById(id).then(response => {
      commit(types.RECEIVE_NEXTPAGE, response.data.data);
    });
  }
}

const mutations = {
  [types.RECEIVE_TOPTEN] (state, data) {
  	state.topten.length = 0;
    state.topten = data;
  },
  [types.RECEIVE_NEXTPAGE] (state, data) {
  	state.topten = state.topten.concat(data);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
