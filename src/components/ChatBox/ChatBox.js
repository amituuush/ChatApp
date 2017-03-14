import React, { PropTypes, Component } from 'react';
import Message from '../Message/Message';

import './chat-box.scss';

export default class ChatBox extends Component {

  render () {
    let messages = this.props.messages.map((message, i) => {
    return <Message
            message={message.message}
            messageName={message.name}
            name={this.props.name}
            key={i} />
    });

    return (
      <div className="chat-box-container">
        {messages}
      </div>
    );
  }
}

ChatBox.propTypes = {
  messages: React.PropTypes.array,
  name: React.PropTypes.string
};