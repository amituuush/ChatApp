import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Message from '../Message/Message';

import './chat-box.scss';

export default class ChatBox extends Component {

  componentWillUpdate() {
    var node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }
 
  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render () {
    let messages = this.props.messages.map((message, i) => {
    return <Message
            message={message.message}
            messageName={message.name}
            name={this.props.user.name}
            avatarUrl={this.props.user.avatarUrl}
            messageAvatarUrl={message.avatarUrl}
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
  user: React.PropTypes.object
};