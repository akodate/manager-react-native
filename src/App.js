import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAR_yl7KDPn_aH16Pd4WtTLFt6-BhN28FI',
      authDomain: 'manager-76d73.firebaseapp.com',
      databaseURL: 'https://manager-76d73.firebaseio.com',
      projectId: 'manager-76d73',
      storageBucket: 'manager-76d73.appspot.com',
      messagingSenderId: '233286417434'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
