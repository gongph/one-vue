import axios from 'axios';
import api from '../api';

// create axios instance
const instance = axios.create({
	baseURL: api.baseURL
});

export default {
  /**
   * 获取最新10条阅读
   */
  getToptenReading () {
	return instance.get(api.getToptenReading);
  }
}
