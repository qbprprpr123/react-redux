import { connect } from 'react-redux';
import React from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import Personal from './Personal';

const Vote = (props) => {
  console.log(props);
  const { supNum, oppNum } = props;
  return (
    <div>
      <h2>React很好学</h2>
      <span>{supNum + oppNum}</span>
      <VoteMain />
      <VoteFooter />
      <Personal />
    </div>
  );
};

export default connect((state) => state.vote)(Vote);
// connect(mapStateToProps, mapDispatchToProps)(要渲染的组件)
// mapStateToProps：可以获取到redux中的公共状态，把需要的信息作为属性传递给组件

// connect((state) => {
//   // 存储redux容器中，所有模块的公共状态信息
//   // 返回对象中的信息，就是要作为属性，传递给组件的信息
//   return {
//     supNum: state.vote.supNum,
//   };
// })(Vote);
