import React from 'react';

import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';


export const Root = StackNavigator({
        login: { screen: LoginForm },
        employeeList: { screen: EmployeeList },
        addEmployee: { screen: AddEmployee }
    }  
);

