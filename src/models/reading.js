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
  getToptenReading () {
    return instance.get(api.getToptenReading);
  },
  getNextPageById (id) {
    return instance.get(api.getNextReading.replace(reg, id));
  },
  getEssayById (id) {
    return instance.get(api.getEssayById.replace(reg, id));
  },
  getSerialById (id) {
    return instance.get(api.getSerialById.replace(reg, id));
  },
  getQuestionById (id) {
    return instance.get(api.getQuestionById.replace(reg, id));
  }
}
