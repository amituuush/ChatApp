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
        name={props.name} />
      <ChatBox 
        messages={props.messages}
        currentRoom={props.currentRoom}
        name={props.name}
        changeReaction={props.changeReaction} />
      <ChatInput 
        currentRoom={props.currentRoom}
        name={props.name}
        sendMessage={props.sendMessage} />
    </div>
  );
}

RightPanel.propTypes = {
  currentRoom: React.PropTypes.object,
  messages: React.PropTypes.array,
  name: React.PropTypes.string,
  sendMessage: React.PropTypes.func
};

export default RightPanel;