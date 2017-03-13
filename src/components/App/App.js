import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Login from '../Login/Login';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

import './app.scss';

class App extends Component {

  componentDidMount() {
    this.props.fetchRooms();
    this.props.selectCurrentRoom(0);
  }

  render() {
    return (
        <div className="app-container">
        {!this.props.username ? 
          <Login /> :
          <div className="app-container">
            <LeftPanel 
              rooms={this.props.rooms}
              selectCurrentRoom={this.props.selectCurrentRoom}
              username={this.props.username} />
            <RightPanel 
              currentRoom={this.props.currentRoom}
              messages={this.props.messages} />
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
  fetchRooms: React.PropTypes.func,
  selectCurrentRoom: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    currentRoom: state.currentRoom,
    messages: state.messages,
    username: state.username
  }
}

export default connect(mapStateToProps, actions)(App);