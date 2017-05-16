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
        {!this.props.name ? 
          <Login /> :
          <div className="app-container">
            <LeftPanel 
              rooms={this.props.rooms}
              selectCurrentRoom={this.props.selectCurrentRoom}
              name={this.props.name}
              currentRoom={this.props.currentRoom}
              timeOnline={this.props.timeOnline}
              logoutUser={this.props.logoutUser} />
            <RightPanel 
              currentRoom={this.props.currentRoom}
              messages={this.props.messages}
              name={this.props.name}
              sendMessage={this.props.sendMessage}
              name={this.props.name}
              changeReaction={this.props.changeReaction} />
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
  name: React.PropTypes.string,
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
    name: state.name,
    timeOnline: state.timeOnline
  }
}

export default connect(mapStateToProps, actions)(App);