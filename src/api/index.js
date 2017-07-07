export default {
  // 根路径
  baseURL: 'http://v3.wufazhuce.com:8000',
  
  /**
   * 首页
   */
  
  // 获取前十天的图文列表
  idlist: '/api/onelist/idlist',
  // 根据id获取某一天的图文列表
  getHpById: '/api/onelist/{id}/0',
  
  /**
   * 阅读
   */
  
  // 获取最新10条阅读
  getToptenReading: '/api/channel/reading/more/0',
  // 上拉刷新获取下一页阅读
  getNextReading: '/api/channel/reading/more/{id}',
  
  // 短文
  // 根据id获取短文详情
  getEssayById: '/api/essay/{id}',
  
  // 连载
  // 根据id获取连载详情
  getSerialById: '/api/serialcontent/{id}',
  
  // 问答
  // 根据id获取问答详情
  getQuestionById: '/api/question/{id}'
}
