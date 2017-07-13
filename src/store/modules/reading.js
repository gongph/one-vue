import server from '../../models/reading.js';
import * as types from '../mutation-types.js';

// initial state
const state = {
  topten: [],
  article: {}, // 文章
  serial: {}, // 连载
  question: {}, // 问答
  asker: {}, // 提问者
  answerer: {}, // 回答者
  tag: '',
  author: {}
}

// getters
const  getters = {
  topten: state => state.topten,
  article: state => state.article,
  serial: state => state.serial,
  question: state => state.question,
  asker: state => state.asker,
  answerer: state => state.answerer,
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
  },
  getSerialById ({ commit }, id) {
    server.getSerialById(id).then(response => {
      commit(types.RECEIVE_SERIAL, response.data.data);
    });
  },
  getQuestionById ({ commit }, id) {
    server.getQuestionById(id).then(response => {
      commit(types.RECEIVE_QUESTION, response.data.data);
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
  },
  [types.RECEIVE_SERIAL] (state, data) {
    state.serial = data;
    state.author = data.author;
  },
  [types.RECEIVE_QUESTION] (state, data) {
    state.question = data;
    state.asker = data.asker;
    state.answerer = data.answerer;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
