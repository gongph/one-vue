import axios from 'axios';
import api from '../api';

const instance = axios.create({
	baseURL: api.baseURL
});

const reg = /\{(.+)\}/ig;

export default {
  getToptenMovie () {
    return instance.get(api.getToptenMovie);
  },
  getNextPageById (id) {
    return instance.get(api.getNextMovie.replace(reg, id));
  }
}
