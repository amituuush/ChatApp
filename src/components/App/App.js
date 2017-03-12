import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

import './app.scss';

class App extends Component {

  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <div className="app-container">
        <LeftPanel rooms={this.props.rooms} />
        <RightPanel />
      </div>
    )
  }
}

App.propTypes = {
  rooms: React.PropTypes.array,
  fetchRooms: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps, actions)(App);