import axios from 'axios';
import $ from 'jquery';
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
  },
  getMovieById (id) {
    return instance.get(api.getMovieById.replace(reg, id));
  },
  getMoviePhotosById (id, cb) {
    $.ajax({
      url: api.baseURL + api.getMoviePhotosById.replace(reg, id),
      async: false,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
        cb(response.data);
      }
    });
  }
}
