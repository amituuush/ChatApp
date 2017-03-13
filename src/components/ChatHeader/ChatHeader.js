import React, { PropTypes, Component } from 'react';

import './chat-header.scss';

export default class ChatHeader extends Component {

  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers() {
   
  }

  render () {
    let users;
     if (this.props.currentRoom.users === undefined) {
      users = <p>Loading...</p>;
    } else if (this.props.currentRoom.users) {
      users = this.props.currentRoom.users.map(function(name, i) {
        return (<p key={i}>{name}</p>);
      })
    }
    return (
      <div className="chat-header-container">
        <div>{this.props.currentRoom.name}</div>
        {users}
      </div>
   );
  }
}

ChatHeader.propTypes = {
  currentRoom: React.PropTypes.object
};