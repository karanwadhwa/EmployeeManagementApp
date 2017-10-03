import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChange, passwordChange, loginUser } from '../actions';
import { Input, Card, CardItem, Button, Header, Spinner } from './common';

class LoginForm extends React.Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }
  onPasswordChange(text) {
    this.props.passwordChange(text);
  }
  loginButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return ( 
      <Button onPress={this.loginButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Header headerText='Manager Login' />
        <Text style={styles.errorStyle}>
            {this.props.errormsg}
        </Text>
        <Card>
          <CardItem>
            <Input 
              label='Email'
              /* placeholder='email@example.com' */
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardItem>
          <CardItem>
            <Input 
              label='Password'
              /* placeholder='Password' */
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardItem>
          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    errormsg: state.auth.errormsg,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser, })(LoginForm);
