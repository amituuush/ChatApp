import React, { PropTypes, Component } from 'react';

import './chat-room.scss';

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.handleSelectCurrentRoom = this.handleSelectCurrentRoom.bind(this);
  }

  handleSelectCurrentRoom() {
    this.props.selectCurrentRoom(this.props.id);
  }

  render() {
    return (
      <div className="chat-room-container" 
      onClick={this.handleSelectCurrentRoom}>
        {this.props.name}
      </div>
    )
  };
}

ChatRoom.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.number,
  selectCurrentRoom: React.PropTypes.func
};