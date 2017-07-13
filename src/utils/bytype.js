/**
 * 根据 type 获取路由url
 * @param {String} type 文章类型
 */

const getRouterByType = function (type) {
  const map = {
    '1': '/reading/essay/',
    '2': '/reading/serial/',
    '3': '/reading/question/',
    '4': '/music/',
    '5': '/movie/'
  }
  return type ? map[type] : '';
}

export { getRouterByType };

/**
 * 根据 type 获取分类
 * @param {String} type 文章类型
 */

const getCategoryByType = function (type) {
  const map = {
    '0': '插画',
    '1': 'ONE STORY',
    '2': '连载',
    '3': '问答',
    '4': '音乐',
    '5': '影视'
  }
  return type ? map[type] : '';
}

export { getCategoryByType };

