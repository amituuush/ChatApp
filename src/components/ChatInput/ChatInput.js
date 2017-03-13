import React, { PropTypes, Component } from 'react';

import './chat-input.scss';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (!this.state.message) {
      alert('Enter in a message');
    } else {
      this.props.sendMessage(this.props.currentRoom.id, this.state.message, this.props.name);
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <div className="chat-input-wrap">
      <div className="chat-input-container">
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            placeholder="Type a message..."
            value={this.state.message}
            onChange={this.onInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
    );
  }
}

ChatInput.propTypes = {
  currentRoom: React.PropTypes.object,
  name: React.PropTypes.string,
  sendMessage: React.PropTypes.func
};