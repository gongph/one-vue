import axios from 'axios';
import api from '../api';

// create axios instance
const instance = axios.create({
	baseURL: api.baseURL
});

const reg = /\{(.+)\}/ig;

export default {
  /**
   * 获取最新10条阅读
   */
  getArticleById (id) {
	return instance.get(api.getEssayById.replace(reg, id));
  }
}
