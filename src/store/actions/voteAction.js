// vote版块要派发的行为对象管理
import { VOTE_SUP, VOTE_OPP } from '@/store/action-types';

// 延迟函数：返回promise实例，在指定的时间后才会让实例为成功
const delay = (interval = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
};

const voteAction = {
  // async support() {
  //   await delay();
  //   return {
  //     type: VOTE_SUP,
  //   };
  // },
  support() {
    // redux-thunk中间件的语法
    // 总共会派发两次
    return async (dispatch) => {
      await delay();
      dispatch({
        type: VOTE_SUP,
      });
    };
  },
  // redux-promise中间件
  async oppose() {
    await delay(2000);
    return {
      type: VOTE_OPP,
    };
  },
};

export default voteAction;

// redux-thunk：
// 对dispatch进行了重写：
// 第一次点击按钮，用到的dispatch其实是重写的dispatch，传递给dispatch的是一个函数没有type，此时既不会报错也不会通知reducer执行，仅仅是返回的函数执行了

// redux-promise：
// 对dispatch进行了重写，传进来的是promise实例：
//  + 没有type属性，但是不报错
//  + 也不会通知reducer执行
// 但是他会监听voteAction.oppose执行的返回值(promise实例)，等待实例为成功的时候，它内部会自动再派发一次任务：
//  + 用到的是store.dispatch派发，会通知reducer执行了
//  + 把实例为成功返回的结果，即action对象传递给reducer，实现状态更改
