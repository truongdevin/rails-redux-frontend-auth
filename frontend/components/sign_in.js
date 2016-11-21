import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { signIn } from '../actions/index';

export class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errors: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then((action) => this.handleSignIn(action.payload.data));
  }

  handleSignIn = (data) => {
    if (data.errors) {
      this.setState({ errors: data.errors });
    } else {
      hashHistory.push('/');
    }
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
        <form onSubmit={this.handleSubmit}>Sign In
          <br/>
          <div>{this.state.errors}</div>
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
          <button type="submit"> Sign In</button>
        </form>
        <div onClick={() => hashHistory.push('/signup')}>Create account</div>
      </div>
    );
  }
}

export default connect(null, { signIn })(SignIn);
