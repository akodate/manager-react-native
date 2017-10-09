import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
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

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);