import serve from '../../models/article.js';
import * as types from '../mutation-types.js';

const state = {
  article: {},
  tag: '',
  author: {}
}

const getters = {
  article: state => state.article,
  tag: state => state.tag,
  author: state => state.author
}

const actions = {
  getArticleById ({ commit }, id) {
 	serve.getArticleById(id).then(response => {
 	  commit(types.RECEIVE_ARTICLE, response.data.data);
 	});
  }
}

const mutations = {
  [types.RECEIVE_ARTICLE] (state, data) {
    state.article = data;
    state.tag = data.tag_list.length > 0 ? data.tag_list[0].title : '';
    state.author = data.author[0];
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
