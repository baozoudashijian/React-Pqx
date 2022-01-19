import * as home from './action-type';


// 保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEIMG,
    path,
  }
}

// 保存表单数据
export const saveFormData = (value, datatype) => {
  return {
    type: home.SAVEFORMDATA,
    value,
    datatype
  }
}

export const clearData = path => {
  return {
    type: home.CLEARDATA,
    path,
  }
}
