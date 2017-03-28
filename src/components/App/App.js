import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Login from '../Login/Login';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

import './app.scss';

class App extends Component {

  componentDidMount() {
    let nameExists = localStorage.getItem('name');
    if (nameExists) {
      this.props.saveUser(nameExists);
    }
    this.props.fetchRooms();
    this.props.selectCurrentRoom(0);
    setInterval(() => {
      this.props.fetchMessages(this.props.currentRoom.id);
    }, 3000);
    setInterval(this.props.updateTimer, 60000);
  }

  render() {
    return (
        <div className="app-container">
        {!this.props.user.name ? 
          <Login /> :
          <div className="app-container">
            <LeftPanel 
              rooms={this.props.rooms}
              selectCurrentRoom={this.props.selectCurrentRoom}
              user={this.props.user}
              currentRoom={this.props.currentRoom}
              timeOnline={this.props.timeOnline}
              logoutUser={this.props.logoutUser} />
            <RightPanel 
              currentRoom={this.props.currentRoom}
              messages={this.props.messages}
              user={this.props.user}
              sendMessage={this.props.sendMessage}
              user={this.props.user} />
          </div>
        }
        </div>
    );
  }
}

App.propTypes = {
  rooms: React.PropTypes.array,
  currentRoom: React.PropTypes.object,
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  timeOnline: React.PropTypes.number,
  fetchRooms: React.PropTypes.func,
  selectCurrentRoom: React.PropTypes.func,
  sendMessage: React.PropTypes.func,
  updateTimer: React.PropTypes.func,
  fetchMessages: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    currentRoom: state.currentRoom,
    messages: state.messages,
    user: state.user,
    timeOnline: state.timeOnline
  }
}

export default connect(mapStateToProps, actions)(App);