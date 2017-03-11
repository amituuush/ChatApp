import React, { PropTypes } from 'react';

import './chat-header.scss';

const ChatHeader = props => {
  return (
    <div className="chat-header-container">
      <div>Engineering</div>
      <div>Amit, Jack, Sam</div>
    </div>
  );
}

ChatHeader.propTypes = {
  
};

export default ChatHeader;