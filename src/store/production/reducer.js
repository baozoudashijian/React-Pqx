import * as production from './action-type';
import Immutable from 'immutable';

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
  let imuDataList;
  let imuItem;
  switch (action.type) {
    case production.CLEARSELECTED:
      return {...defaultState}
    case production.GETPRODUCTION:
      return {...state, ...action}
    case production.TOGGLESELECT:
      // 避免引用数据类型，使用immutable进行数据转换
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectStatus', !imuItem.get('selectStatus'))
      imuDataList = imuDataList.set(action.index, imuItem)

      return {...state, ...{dataList: imuDataList.toJS()}}

    case production.EDITPRODUCTION:
      // 避免引用数据类型，使用immutable进行数据转换
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectNum', action.num)
      imuDataList = imuDataList.set(action.index, imuItem)

      return {...state, ...{dataList: imuDataList.toJS()}}
    default:
      return state;
  }
}

