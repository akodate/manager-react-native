import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;
    
    this.props.loginUser({ email, password });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"            
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="email@gmail.com"
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder="password"
            secureTextEntry
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, 
  loginUser, 
  passwordChanged,
})(LoginForm);
