/*
  作用：根据之前的状态和更新数据的行为产生一个新的状态
 */

import {combineReducers} from 'redux';

//初始化状态的值
const initXxxState = 0;
 function xxx(previousState = initXxxState, action) {
   switch (action.type){
     default:
       return previousState;
   }
 }

const initYyyState = 0;
function yyy(previousState = initYyyState, action) {
  switch (action.type){
    default:
      return previousState;
  }
}

//默认暴露合并后的reducers函数
export default combineReducers ({
  xxx,
  yyy
})