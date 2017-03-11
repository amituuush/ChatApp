import React, { PropTypes } from 'react';

import './chat-input.scss';

const ChatInput = props => {
  return (
    <div className="chat-input-container">
      <input type="text"/>
      <button>Send</button>
    </div>
  );
}

ChatInput.propTypes = {
  
};

export default ChatInput;