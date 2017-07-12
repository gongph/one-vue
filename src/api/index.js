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
  
  // 获取最新10条阅读列表
  getToptenReading: '/api/channel/reading/more/0',
  // 上拉刷新获取下一页阅读列表
  getNextReading: '/api/channel/reading/more/{id}',
  
  // 短文
  // 根据id获取短文详情
  getEssayById: '/api/essay/{id}',
  
  // 连载
  // 根据id获取连载详情
  getSerialById: '/api/serialcontent/{id}',
  
  // 问答
  // 根据id获取问答详情
  getQuestionById: '/api/question/{id}',
  
  /**
   * 音乐
   */
  
  // 获取最新10条音乐列表
  getToptenMusic: '/api/channel/music/more/0',
  // 上拉刷新获取下一页音乐列表
  getNextMusic: '/api/channel/music/more/{id}',
  // 根据 `item_id` 获取音乐详情信息
  getMusicById: '/api/music/detail/{id}',
  
  /**
   * 影视
   */
  
  // 获取最新10条影视列表
  getToptenMovie: '/api/channel/movie/more/0',
  // 上拉刷新获取下一页影视列表
  getNextMovie: '/api/channel/movie/more/{id}',
  // 根据id获取影视详情信息
  getMovieById: '/api/movie/{id}/story/1/0',
  // 根据id获取头部滚动的五张图片和电影海报信息
  getMoviePhotosById: '/api/movie/detail/{id}'
  
}
