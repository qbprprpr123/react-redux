import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// react-redux
import { Provider } from 'react-redux';
import Vote from './views/Vote/Vote';

import store from './store/index';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Vote />
    </Provider>
  </ConfigProvider>,
);
