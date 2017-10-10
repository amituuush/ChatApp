import React, { Component, PropTypes } from 'react';

import './message.scss';

export default class Message extends Component {

  constructor(props) {
    super(props)

    this.state = {};

    this.handleReactionChange = this.handleReactionChange.bind(this);
  }

  handleReactionChange() {
    this.props.addReaction(this.props.currentRoomId, this.props.id, 'smiley');
  }

  render() {
    let isCurrentUser = false;
    if (this.props.name === this.props.messageName) {
      isCurrentUser = true;
    }

    let reactionFile;
    switch(this.props.reaction) {
      case 'smiley':
        reactionFile = './img/smiley.svg';
        break;
      default:
        reactionFile = './img/addReaction.svg';
    }

    return (
      <div className={isCurrentUser ? "message-container right" : "message-container"}>
        <div className={isCurrentUser ? "message-bubble red" : "message-bubble"}>
          {this.props.message}
        </div>
        <img className="add-reaction" src={isCurrentUser ? this.props.reaction ? reactionFile : '' : reactionFile} onClick={this.handleReactionChange}/>
        <div className={isCurrentUser ? "message-name hide" : "message-name"}>
          {this.props.messageName}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.string,
  messageName: React.PropTypes.string,
  name: React.PropTypes.string,
  reaction: React.PropTypes.string,
  currentRoom: React.PropTypes.object
};
