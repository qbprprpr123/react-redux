import React from 'react';
import { connect } from 'react-redux';

const VoteMain = (props) => {
  const { supNum, oppNum } = props;
  return (
    <div>
      <p>
        支持人数：
        {supNum}
      </p>
      <p>
        反对人数：
        {oppNum}
      </p>
    </div>
  );
};

export default connect((state) => state.vote)(VoteMain);
