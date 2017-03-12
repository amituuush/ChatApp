import React, { PropTypes } from 'react';
import ChatRoom from '../ChatRoom/ChatRoom';

import './chat-room-container-container.scss';

const ChatRoomContainer = props => {
  return (
    <div className="chat-room-container">
      {
        props.rooms.map(function(room) {
          return (
            <ChatRoom 
              name={room.name}
              key={room.id}
             />
          )
        })
      }
    </div>
  );
}

ChatRoomContainer.propTypes = {
  rooms: React.PropTypes.array
};

export default ChatRoomContainer;