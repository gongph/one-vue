import server from '../../models/movie.js';
import * as types from '../mutation-types.js';

const state = {
  topten: [],
  article: {}, // 文章
  author: {}, // 文章作者
  detail: {}, // 电影介绍
  photos: [] // 电影照片
}

const getters = {
  topten: state => state.topten,
  article: state => state.article,
  author: state => state.author,
  detail: state => state.detail,
  photos: state => state.photos
}

const actions = {
  getTopTen ({ commit }) {
    server.getToptenMovie().then(response => {
      commit(types.RECEIVE_TOPTEN, response.data.data);
    });
  },
  getNextPageById ({ commit }, id) {
    server.getNextPageById(id).then(response => {
      commit(types.RECEIVE_NEXTPAGE, response.data.data);
    });
  },
  getMovieById ({ commit }, id) {
    server.getMovieById(id).then(response => {
      commit(types.RECEIVE_MOVIE, response.data.data.data[0]);
    });
  },
  getMoviePhotosById ({ commit }, id) {
    server.getMoviePhotosById(id, data => {
      commit(types.RECEIVE_MOVIE_PHOTOS, data);
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
  },
  [types.RECEIVE_MOVIE] (state, data) {
    state.article = data;
    state.author = data.user;
  },
  [types.RECEIVE_MOVIE_PHOTOS] (state, data) {
    state.detail = data;
    
    state.photos.length = 0;
    state.photos = data.photo;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

