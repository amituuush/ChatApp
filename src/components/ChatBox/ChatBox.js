import React, { PropTypes } from 'react';
import Message from '../Message/Message';

import './chat-box.scss';

const ChatBox = props => {
  return (
    <div className="chat-box-container">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

ChatBox.propTypes = {
  
};

export default ChatBox;