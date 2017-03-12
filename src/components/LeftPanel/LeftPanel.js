import React, { PropTypes } from 'react';
import NameAndTimeOnline from '../NameAndTimeOnline/NameAndTimeOnline';
import ChatRoomContainer from '../ChatRoomContainer/ChatRoomContainer';

import './left-panel.scss';

const LeftPanel = props => {
  console.log(props.rooms)
  return (
    <div className="left-panel-container">
      <NameAndTimeOnline />
      <ChatRoomContainer rooms={props.rooms} />
    </div>
  );
}

LeftPanel.propTypes = {
  rooms: React.PropTypes.array
};

export default LeftPanel;