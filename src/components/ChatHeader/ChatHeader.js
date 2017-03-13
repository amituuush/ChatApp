import React, { PropTypes, Component } from 'react';

import './chat-header.scss';

export default class ChatHeader extends Component {

  render () {
    console.log('current room', this.props.currentRoom);
    let users;
    const currentRoomUsers = this.props.currentRoom.users;
     if (currentRoomUsers === undefined) {
      users = <p>Loading...</p>;
    } else if (currentRoomUsers) {
      users = currentRoomUsers.map(function(name, i) {
        if (i === currentRoomUsers.length - 1) {
          return (<span className="user" key={i}>{name}</span>);
        } else {
          return (<span className="user" key={i}>{name}, </span>);
        }
      })
    }
    return (
      <div className="chat-header-container">
        <div className="current-room">{this.props.currentRoom.name}</div>
        {users}
      </div>
   );
  }
}

ChatHeader.propTypes = {
  currentRoom: React.PropTypes.object
};