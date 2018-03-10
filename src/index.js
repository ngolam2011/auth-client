import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Sigout from './components/auth/signout';
import Signup from './components/auth/signup';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
cosnt store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//If we have a token, consider ther user to be signed in

if(token) {
  // We need to update application state
  store.dispatch( {type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Sigout}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
