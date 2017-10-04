import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const RouterComponent = () => {
  return (
    <Router>
      <Scene /* key="root" */ hideNavBar >

        {/* Authentication Bucket */}
        <Stack key="auth" >
          <Scene key="login" component={LoginForm} title="ManagerLogin" initial />
        </Stack>

        {/* Main Bucket */}
        <Stack key="main" >
          <Scene 
            onRight={() => Actions.addEmployee.call()}
            rightTitle=" Add"
            key="employeeList" 
            component={EmployeeList} 
            title="Employee List" 
            initial
          />
          <Scene key="addEmloyee" component={AddEmployee} title="Add Employee" />  
        </Stack>

      </Scene>
    </Router>
  );   
};

export default RouterComponent;
