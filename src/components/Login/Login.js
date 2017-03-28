import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      avatarUrl: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  onAvatarChange(event) {
    this.setState({
      avatarUrl: event.target.alt
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.username && this.state.avatarUrl) {
      this.props.saveUser(this.state.username, this.state.avatarUrl);
      this.setState({
        username: '',
        avatarUrl: ''
      });
    } else {
      alert('You must enter a username and select an avatar to continue!')
    }
  }

  render() {
    return (
      <div className="login-wrap">
      <div className="login-container">
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            placeholder="Type your username..."
            value={this.state.username}
            onChange={this.onInputChange} />
            <div className="avatar-wrap">
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/dog.png" alt="./img/dog.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/panda.png" alt="./img/panda.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/snake.png" alt="./img/snake.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/turtle.png" alt="./img/turtle.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/elephant.png" alt="./img/elephant.png"/></div>
            </div>
            <div className="avatar-wrap">
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/fish.png" alt="./img/fish.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/koala.png" alt="./img/koala.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/lion.png" alt="./img/lion.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/monkey.png" alt="./img/monkey.png"/></div>
              <div onClick={this.onAvatarChange} className="avatar-container"><img src="./img/octopus.png" alt="./img/octopus.png"/></div>
            </div>
          <button type="submit">Join the DoorDash Chat!</button>
        </form>
      </div>
      </div>
    )
  }
}

Login.propTypes = {
  saveUser: React.PropTypes.func
}

export default connect(null, actions)(Login);
