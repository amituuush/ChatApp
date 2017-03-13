import React, { PropTypes, Component } from 'react';

import './chat-header.scss';

export default class ChatHeader extends Component {

  render () {
    console.log('current room', this.props.currentRoom);
    let users;
     if (this.props.currentRoom.users === undefined) {
      users = <p>Loading...</p>;
    } else if (this.props.currentRoom.users) {
      users = this.props.currentRoom.users.map(function(name, i) {
        return (<span className="user" key={i}>{name},</span>);
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