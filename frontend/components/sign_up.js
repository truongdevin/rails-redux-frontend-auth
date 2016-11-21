import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('username: ' + this.state.username);
    console.log('password: ' + this.state.password);
    // hashHistory.push('/');
  }

  handleUsername = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>Sign Up
          <br/>
          <input
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUsername}/>
          <br/>
          <input
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}/>
          <br/>
          <button type="submit"> Sign Up</button>
        </form>
        <div onClick={() => hashHistory.push('/signin')}>Have an account? Log in</div>
      </div>
    );
  }
}
