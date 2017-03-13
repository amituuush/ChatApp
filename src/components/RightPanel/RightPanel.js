import React, { PropTypes } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatBox from '../ChatBox/ChatBox';
import ChatInput from '../ChatInput/ChatInput';

import './right-panel.scss';

const RightPanel = props => {
  return (
    <div className="right-panel-container">
      <ChatHeader currentRoom={props.currentRoom} />
      <ChatBox messages={props.messages} />
      <ChatInput />
    </div>
  );
}

RightPanel.propTypes = {
  currentRoom: React.PropTypes.object,
  messages: React.PropTypes.array
};

export default RightPanel;