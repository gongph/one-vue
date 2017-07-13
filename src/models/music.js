import axios from 'axios';
import api from '../api';

const instance = axios.create({
  baseURL: api.baseURL
});

const reg = /\{(.+)\}/ig;

export default {
  getToptenMusic () {
    return instance.get(api.getToptenMusic);
  },
  getNextPageById (id) {
    return instance.get(api.getNextMusic.replace(reg, id));
  },
  getMusicById (id) {
    return instance.get(api.getMusicById.replace(reg, id));
  }
}
