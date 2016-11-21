import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexTest from './components/index_test';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import { loadAuth } from './actions/index';

export default (store) => {
  const requireAuth = (nextState, replace) => {

    const checkAuth = () => {
      const { session: { auth } } = store.getState();
      console.log(auth);
      if (!auth.session_token) {
        console.log('redirected!');
        replace('/signin');
      }
    }

    const { session: { checked } } = store.getState();

    if (!checked) {
      console.log('checking current_user');
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  }

  return (
    <Route path="/" component={App}>
    <IndexRoute component={IndexTest} onEnter={requireAuth}/>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    </Route>
  );
}
