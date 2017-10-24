import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            component={EmployeeList}
            initial
            key="employeeList"
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            title="Employees"
          />
          <Scene
            component={EmployeeCreate}
            key="employeeCreate"
            title="Create Employee"
          />
          <Scene
            component={EmployeeEdit}
            key="employeeEdit"
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
