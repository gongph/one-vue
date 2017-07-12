import server from '../../models/reading.js';
import * as types from '../mutation-types.js';

// initial state
const state = {
  topten: [],
  article: {},
  tag: '',
  author: {}
}

// getters
const  getters = {
  topten: state => state.topten,
  article: state => state.article,
  tag: state => state.tag,
  author: state => state.author
}

// actions
const actions = {
  getTopTen ({ commit }) {
    server.getToptenReading().then((response) => {
      commit(types.RECEIVE_TOPTEN, response.data.data);
    });
  },
  getNextPageById ({ commit }, id) {
  	server.getNextPageById(id).then((response) => {
      commit(types.RECEIVE_NEXTPAGE, response.data.data);
    });
  },
  getEssayById ({ commit }, id) {
 	  server.getEssayById(id).then(response => {
 	    commit(types.RECEIVE_ESSAY, response.data.data);
 	  });
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TOPTEN] (state, data) {
  	state.topten.length = 0;
    state.topten = data;
  },
  [types.RECEIVE_NEXTPAGE] (state, data) {
  	state.topten = state.topten.concat(data);
  },
  [types.RECEIVE_ESSAY] (state, data) {
    state.article = data;
    state.tag = data.tag_list.length > 0 ? data.tag_list[0].title : '';
    state.author = data.author[0];
  }
}

export default {
	namespaced: true,
  state,
  getters,
  actions,
  mutations
}
