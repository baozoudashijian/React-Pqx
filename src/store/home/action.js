import * as home from './action-type';


// 保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEIMG,
    path,
  }
}

