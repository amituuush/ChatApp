import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  onFormSubmit(event) {
    console.log('yoo')
    event.preventDefault();
    this.props.saveUser(this.state.username);
    this.setState({
      username: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            placeholder="Type your username..."
            value={this.state.username}
            onChange={this.onInputChange} />
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  saveUser: React.PropTypes.func
}

export default connect(null, actions)(Login);
