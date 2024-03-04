import React from 'react';
import { TaiTextArea } from 'taic';
const sendImg = require('../../assets/images/close.svg').default;
const uploadImg = require('../../assets/images/close.svg').default;
const App: React.FC = () => {
  return (
    <TaiTextArea
      sendImg={sendImg}
      uploadImg={uploadImg}
      placeholder="请输入自定义文字"
    />
  );
};

export default App;
