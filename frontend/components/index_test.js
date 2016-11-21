import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { signOut } from '../actions/index';
import { connect } from 'react-redux';

export class IndexTest extends Component {

  handleSignOut = (e) => {
    e.preventDefault();
    this.props.signOut().then(() => hashHistory.push('/signin'));
  }

  render() {
    return (
      <div>Hello World - Index
        <br/>
        <button onClick={ () => hashHistory.push('/signin') }>Sign In</button>
        <button onClick={ () => hashHistory.push('/signup') }>Sign Up</button>
        <br/>
        <button onClick={this.handleSignOut}>Sign Out</button>
      </div>
    );
  }
}

export default connect(null, { signOut })(IndexTest);
