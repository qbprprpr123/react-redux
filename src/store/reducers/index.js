// 合并各个模块的reducer，最后创建出一个总的reducer
// 容器中的公共状态，会按照我们设置的成员名称，分模块进行管理

// 以后基于store.getState()获取的状态
// state = {
//   vate: {
//     ...,
//   },
//   personal: {
//     ...,
//   },
// };
import { combineReducers } from 'redux';
import { voteReducer } from './voteReducer';
import { personalReducer } from './personalReducer';

const reducers = combineReducers({
  vote: voteReducer,
  personal: personalReducer,
});

// 但是这样会存在一个问题，store只有一个意味着事件池会存放所有模块的组件更新方法
export default reducers;
