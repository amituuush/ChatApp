import React, { PropTypes } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatBox from '../ChatBox/ChatBox';
import ChatInput from '../ChatInput/ChatInput';

import './right-panel.scss';

const RightPanel = props => {
  return (
    <div className="right-panel-container">
      <ChatHeader 
        currentRoom={props.currentRoom}
        user={props.user} />
      <ChatBox 
        messages={props.messages}
        currentRoom={props.currentRoom}
        user={props.user} />
      <ChatInput 
        currentRoom={props.currentRoom}
        user={props.user}
        sendMessage={props.sendMessage} />
    </div>
  );
}

RightPanel.propTypes = {
  currentRoom: React.PropTypes.object,
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  sendMessage: React.PropTypes.func
};

export default RightPanel;