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
        {!this.props.name ? 
          <Login /> :
          <div className="app-container">
            <LeftPanel 
              rooms={this.props.rooms}
              selectCurrentRoom={this.props.selectCurrentRoom}
              name={this.props.name} />
            <RightPanel 
              currentRoom={this.props.currentRoom}
              messages={this.props.messages}
              name={this.props.name}
              sendMessage={this.props.sendMessage} />
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
  fetchRooms: React.PropTypes.func,
  selectCurrentRoom: React.PropTypes.func,
  sendMessage: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    currentRoom: state.currentRoom,
    messages: state.messages,
    name: state.name
  }
}

export default connect(mapStateToProps, actions)(App);