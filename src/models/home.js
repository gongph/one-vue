import axios from 'axios';
import api from '../api';

// create axios instance
const instance = axios.create({
  baseURL: api.baseURL
});

const reg = /\{(.+)\}/ig;

export default {
  /**
   * 获取首页idlist
   */
  getIdlist () {
    return instance.get(api.idlist);
  },
  getHpById (id) {
    return instance.get(api.getHpById.replace(reg, id));
  }
}
