import serve from '../../models/home.js';
import * as types from '../mutation-types.js';

const state = {
  idlist: [], // 前十天的图文 id
  nodes: [], // 首页文章列表
  hp: {}, // 最新的图文
  todaydate: '', // 今天的日期
  climate: '', // 副标题
  poster: {} , // 海报
}

const getters = {
  idlist: state => state.idlist,
  todaydate: state => state.todaydate,
  climate: state => state.climate,
  poster: state => state.poster,
  nodes: state => state.nodes
}

const actions = {
  getIdlist ({ dispatch, commit, state }) {
    serve.getIdlist().then(response => {
      commit(types.RECEIVE_IDLIST, response.data.data);
      dispatch('getHpById', state.idlist[0])
    });
  },
  getHpById ({ dispatch, commit, state }, id) {
    serve.getHpById(id).then(response => {
      let hp = response.data.data;
      commit(types.RECEIVE_HP, hp);
      dispatch('weather', hp);
    });
  },
  weather ({ commit }, hp) {
    commit(types.WEATHER, hp);
  }
}

const mutations = {
  [types.RECEIVE_IDLIST] (state, data) {
    state.idlist = data;
  },
  [types.RECEIVE_HP] (state, data) {
    state.hp = data;
    // 文章列表
    state.nodes = data.content_list;
    //获取最新一天的海报
    state.poster = data.content_list[0];
  },
  [types.WEATHER] (state, hp) {
    state.todaydate = hp.weather.date;
    state.climate = hp.weather.climate + ', ' + hp.weather.city_name;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
