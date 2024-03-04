import { Modal } from 'antd';
import React from 'react';
import './index.less';
const closeIcon = require('../assets/images/close.svg').default;
export const TaModal: React.FC = (props) => (
  <Modal closeIcon={<img src={closeIcon} />} {...props}></Modal>
);
