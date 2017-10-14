import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

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

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>         
    );
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
          {this.renderButton()}
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
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  loginUser, 
  passwordChanged,
})(LoginForm);
