import api from '../api';

const getCategoryById = function (type) {
  const map = {
  	'0': 'hp',
  	'1': 'essay',
  	'2': 'serial',
  	'3': 'question',
  	'4': 'music',
  	'5': 'movie'
  }
  
  return type ? map[type] : '';
}

export { getCategoryById };
