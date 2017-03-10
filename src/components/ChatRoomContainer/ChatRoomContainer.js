import React, { PropTypes } from 'react';
import ChatRoom from '../ChatRoom/ChatRoom';

import './chat-room-container-container.scss';

const ChatRoomContainer = props => {
  return (
    <div className="chat-room-container">
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </div>
  );
}

ChatRoomContainer.propTypes = {
  
};

export default ChatRoomContainer;