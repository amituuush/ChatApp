import React, { PropTypes } from 'react';

import './message.scss';

const Message = props => {
  return (
    <div className="message-container">
      {props.message}
      {props.name}
    </div>
  );
}

Message.propTypes = {
  message: React.PropTypes.string,
  name: React.PropTypes.string
};

export default Message;