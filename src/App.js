import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';

class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyARH1ycrYYl4WwGigbT5Sbb4UJaG6cEcmo',
      authDomain: 'employeemanagementapp-a3b0d.firebaseapp.com',
      databaseURL: 'https://employeemanagementapp-a3b0d.firebaseio.com',
      projectId: 'employeemanagementapp-a3b0d',
      storageBucket: '',
      messagingSenderId: '1067603145811'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
