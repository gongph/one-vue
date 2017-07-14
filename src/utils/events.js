import $ from 'jquery';

/**
 * 绑定事件
 * @param {String} selector 选择器
 * @param {String} eventName 事件名
 * @param {Function} callback 回调
 */
const bindEvent = function (selector, eventName, callback) {
  $(selector).on(eventName, callback);
}

export { bindEvent }

/**
 * 解绑事件
 * @param {String} selector 选择器
 * @param {String} eventName 事件名
 */
const unBindEvent = function (selector, eventName) {
  $(selector).unbind(eventName);
}

export { unBindEvent }