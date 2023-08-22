import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/actions';

// 点击按钮派发任务，通知reducer执行传递的action行为对象
const VoteFooter = (props) => {
  const { support, oppose } = props;
  return (
    <div>
      <Button type='primary' onClick={support}>
        支持
      </Button>
      <Button type='primary' danger onClick={oppose}>
        反对
      </Button>
    </div>
  );
};

// 在connect内部，有把actionCreator变为下面mapDispatchToProps这种模式的操作
export default connect(null, action.vote)(VoteFooter);

// export default connect(null, (dispatch) => {
//   return {
//     support() {
//       dispatch(action.vote.support());
//     },
//     oppose() {
//       dispatch(action.vote.oppose());
//     },
//   };
// })(VoteFooter);

// connect(mapStateToProps, mapDispatchToProps)(要渲染的组件)
// mapDispatchToProps：把需要派发的任务，当做属性传递给组件

// connect(null, (dispatch) => {
//   // dispatch: store.dispatch 派发任务的方法
//   // 返回对象中的信息，会作为属性传递给组件
//   return {};
// });
