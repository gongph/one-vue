import server from '../../models/reading.js';
import * as types from '../mutation-types.js';

// initial state
const state = {
  topten: ['1']
}

// getters
const  getters = {
  topTen: state => state.topten
}

// actions
const actions = {
  getTopTen ({ commit }) {
    server.getToptenReading().then((response) => {
      let list = 
      commit(types.RECEIVE_TOPTEN, response.data.data);
    });
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TOPTEN] (state, data) {
    state.topten = data;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
