import React from 'react';
import { Button } from 'antd';

const Personal = () => {
  const addAgeHandle = () => {};
  return (
    <div>
      <div>
        无关人士年龄：
        {1}
      </div>
      <Button onClick={addAgeHandle}>会变成17岁</Button>
    </div>
  );
};
export default Personal;
