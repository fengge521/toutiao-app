/**
 * 搜索请求相关模块
 */
import request from '@/utils/request'
/**
 * 获取搜索建议
 */
export const getSearchSuggest = q => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
