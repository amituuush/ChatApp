import React, { PropTypes } from 'react';
import NameAndTimeOnline from '../NameAndTimeOnline/NameAndTimeOnline';
import ChatRoomContainer from '../ChatRoomContainer/ChatRoomContainer';

import './left-panel.scss';

const LeftPanel = props => {
  return (
    <div className="left-panel-container">
      <NameAndTimeOnline name={props.name} />
      <ChatRoomContainer 
        rooms={props.rooms}
        selectCurrentRoom={props.selectCurrentRoom} />
    </div>
  );
}

LeftPanel.propTypes = {
  rooms: React.PropTypes.array,
  name: React.PropTypes.string,
  selectCurrentRoom: React.PropTypes.func
};

export default LeftPanel;