import React from 'react';

import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';


export const AuthStack = StackNavigator({
	login: {
		screen: LoginForm,
		navigationOptions: {
			title: 'Login'
		}
	},
}
);

export const MainStack = StackNavigator({
	employeeList: { screen: EmployeeList },
	addEmployee: { screen: AddEmployee }
});

export const Root = StackNavigator({
	auth: {
		screen: AuthStack,
		navigationOptions: {
			header: null
		}
	},
	main: {
		screen: MainStack,
		navigationOptions: {
			header: null
		}
	}
});