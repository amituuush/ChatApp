import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.saveUser(this.state.name);
    
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div className="login-wrap">
      <div className="login-container">
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            placeholder="Type your username..."
            value={this.state.name}
            onChange={this.onInputChange} />
          <button type="submit">Join the chat app!</button>
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
