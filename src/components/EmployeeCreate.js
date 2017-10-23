import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            placeholder="Jane"
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="phone"
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            placeholder="555-5555"
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
