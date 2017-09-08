import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

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
      <View>
        <Text>Blah!</Text>
      </View>
    );
  }
}

export default App;
