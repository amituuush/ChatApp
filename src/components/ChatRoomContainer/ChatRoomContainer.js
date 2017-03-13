import React, { PropTypes } from 'react';
import ChatRoom from '../ChatRoom/ChatRoom';

import './chat-room-container-container.scss';

const ChatRoomContainer = props => {
  return (
    <div className="chat-room-container-container">
      {
        props.rooms.map(function(room) {
          return (
            <ChatRoom 
              name={room.name}
              id={room.id}
              key={room.id}
              selectCurrentRoom={props.selectCurrentRoom}
              currentRoom={props.currentRoom}
             />
          )
        })
      }
    </div>
  );
}

ChatRoomContainer.propTypes = {
  rooms: React.PropTypes.array,
  selectCurrentRoom: React.PropTypes.func
};

export default ChatRoomContainer;