import * as home from './action-type';

let defaultState = {
  imgpath: '', //图片地址
}
// 首页表单数据
export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.CLEARSELECTED:
      return {...defaultState}
    default:
      return state;
  }
}

