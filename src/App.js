import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
