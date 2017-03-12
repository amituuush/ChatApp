import React, { PropTypes } from 'react';

import './chat-room.scss';

const ChatRoom = props => {
  return (
    <div className="chat-room-container">
      {props.name}
    </div>
  );
}

ChatRoom.propTypes = {
  name: React.PropTypes.string
};

export default ChatRoom;