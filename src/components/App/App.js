import React, { Component } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import request from 'superagent';

import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      timeOnline: '',
      rooms: [],
      currentRoom: {},
      messages: []
    };

  }

  componentDidMount() {
    let self = this;
     request
      .get('/api/rooms')
      .end(function(err, res) {
        if (err) { console.log(err);}
        else {
          self.setState({
            rooms: res.body
          })
        }
      });
  }
  

  render() {
    return (
      <div className="app-container">
        <LeftPanel rooms={this.state.rooms} />
        <RightPanel />
      </div>
    )
  }
}