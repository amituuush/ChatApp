import React, { PropTypes } from 'react';
import NameAndTimeOnline from '../NameAndTimeOnline/NameAndTimeOnline';
import ChatRoomContainer from '../ChatRoomContainer/ChatRoomContainer';

import './left-panel.scss';

const LeftPanel = props => {
  return (
    <div className="left-panel-container">
      <NameAndTimeOnline 
        user={props.user}
        timeOnline={props.timeOnline}
        logoutUser={props.logoutUser} />
      <ChatRoomContainer 
        rooms={props.rooms}
        selectCurrentRoom={props.selectCurrentRoom}
        currentRoom={props.currentRoom} />
    </div>
  );
}

LeftPanel.propTypes = {
  rooms: React.PropTypes.array,
  user: React.PropTypes.object,
  selectCurrentRoom: React.PropTypes.func
};

export default LeftPanel;