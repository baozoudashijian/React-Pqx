import * as production from './action-type';

let defaultState = {
  /**
   * 商品数据
   * @type {Array}
   * example: [{
   *    product_id: 1, 商品ID
   *    product_name: "PaiBot（2G/32G)", 商品名称
   *    product_price: 2999, 商品价格
   *    commission: 200, 佣金
   *    selectStatus: false, 是否选择
   *    selectNum: 0, 选择数量
   * }]
   */
  dataList: []
}
// 首页表单数据
export const proData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case production.CLEARSELECTED:
      return {...defaultState}
    case production.GETPRODUCTION:
      return {...state, ...action}
    default:
      return state;
  }
}

