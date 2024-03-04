import { LoadingOutlined } from '@ant-design/icons';
import { Input, Upload } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import React from 'react';
import './index.less';
const defaultSend = require('../assets/images/default_send.svg').default;
const defaultUpload = require('../assets/images/default_upload.svg').default;
interface TaiTextAreaProps extends Omit<TextAreaProps, 'onChange' | 'onFocus'> {
  sendImg?: any;
  uploadImg?: any;
  uploadLoading?: boolean;
  inputText?: string;
  defaultRow?: number;
  planceholder?: string;
}
export const TaiTextArea: React.FC<TaiTextAreaProps> = (props) => {
  const {
    sendImg,
    uploadImg,
    uploadLoading,
    value,
    defaultRow = 1,
    ...restProps
  } = props;

  return (
    <div className="chatTriggerWrap">
      <div className="content">
        <Upload maxCount={1} showUploadList={false}>
          <div className={`upload`}>
            {uploadLoading ? (
              <LoadingOutlined />
            ) : (
              <img src={uploadImg || defaultUpload} />
            )}
          </div>
        </Upload>

        <div className="inputWrap">
          <Input.TextArea
            rows={defaultRow}
            className="input"
            value={value}
            {...restProps}
          />
        </div>

        <div className="actionWrap">
          <div className="send">
            <img src={sendImg || defaultSend} />
          </div>
        </div>
      </div>
    </div>
  );
};
