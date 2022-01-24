import * as production from "./action-type";
import API from '@/api/api';

// 初始化获取商品数据
export const getProData = () => {
  return async dispatch => {
    try {
      let result = await API.getProduction()
      result.map(item => {
        item.selectStatus = true
        item.selectNum = 0
        return item
      })
      dispatch({
        type: production.GETPRODUCTION,
        dataList: result
      })
    } catch (e) {
      console.error(e)
    }
  }
}
// 选择商品
export const togSelectPro = () => {

}
// 编辑商品
export const editPro = () => {

}

// 清空选择
export const clearSelected = () => {
  return {
    type: production.CLEARSELECTED
  }
}