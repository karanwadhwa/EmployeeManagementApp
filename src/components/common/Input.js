import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, secureTextEntry, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.containerStyle}>
       <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 30, 
    fontSize: 16,
    height: 40
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
