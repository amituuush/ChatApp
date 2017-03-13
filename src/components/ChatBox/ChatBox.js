import React, { PropTypes } from 'react';
import Message from '../Message/Message';

import './chat-box.scss';

const ChatBox = props => {

  let messages = props.messages.map(function(message, i) {
    return <Message
            message={message.message}
            name={message.name} />
  })

  return (
    <div className="chat-box-container">
      {messages}
    </div>
  );
}

ChatBox.propTypes = {
  messages: React.PropTypes.array
};

export default ChatBox;