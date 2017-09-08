import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
   return (
    <TouchableOpacity onPress={props.onPress} style={styles.ButtonStyle}>
      <Text style={styles.ButtonText}> {props.children} </Text>
    </TouchableOpacity>
   );
};

const styles = {
  ButtonText: {
    fontSize: 16,
  //  color: '#007aff'
  },
  ButtonStyle: {
    height: 40,
    width: null,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
   // borderRadius: 5,
   // borderColor: '#007aff'
  }
};

export { Button };
