import React, { PropTypes } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatBox from '../ChatBox/ChatBox';
import ChatInput from '../ChatInput/ChatInput';

import './right-panel.scss';

const RightPanel = props => {
  return (
    <div className="right-panel-container">
      <ChatHeader />
      <ChatBox />
      <ChatInput />
    </div>
  );
}

RightPanel.propTypes = {
  
};

export default RightPanel;