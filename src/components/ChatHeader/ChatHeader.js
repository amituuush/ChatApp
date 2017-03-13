import React, { PropTypes, Component } from 'react';

import './chat-header.scss';

export default class ChatHeader extends Component {

  render () {
    let users;
    const currentRoomUsers = this.props.currentRoom.users;
    const currentUser = this.props.name;
     if (currentRoomUsers === undefined) {
      users = <p>Loading...</p>;
    } else if (currentRoomUsers) {
      users = currentRoomUsers.map(function(name, i) {
        if (i === currentRoomUsers.length - 1) {
          return (<span className={name === currentUser ? "user active-user" : "user"} key={i}>{name}</span>);
        } else {
          return (<span className={name === currentUser ? "user active-user" : "user"} key={i}>{name}, </span>);
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
  currentRoom: React.PropTypes.object,
  name: React.PropTypes.string
};