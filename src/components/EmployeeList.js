import React from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
        title: 'Employee list',
        headerLeft: null,
        headerRight: <Text onPress={() => params.onButtonPress()}>Add  </Text>
    };
  }
  
  componentDidMount() {
    this.props.navigation.setParams({ onButtonPress: () => this.onButtonPress() });
  }
  
  onButtonPress() {
    const { navigation } = this.props;
    navigation.navigate('addEmployee');
  }

  render() {
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

export default EmployeeList;
