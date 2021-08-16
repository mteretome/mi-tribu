import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	LOGIN,
	SIGNUP,
  PILLARS,
  ONBOARD,
  CONGRATS,
  WELCOME
} from '../constants/routeNames';



import Login from '../screens/welcome/Login';
import Signup from '../screens/welcome/Signup';
import Onboard from '../screens/welcome/Onboard';
import Congrats from '../screens/welcome/Congrats';
import Welcome from '../screens/welcome/Welcome';
import Pillars from '../screens/welcome/Pillars';


const WelcomeNav = () => {
	const WelcomeStack = createStackNavigator();
	return (

    <WelcomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PILLARS}>
		<WelcomeStack.Screen name={LOGIN} component={Login}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={SIGNUP} component={Signup}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={ONBOARD} component={Onboard}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={CONGRATS} component={Congrats}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={WELCOME} component={Welcome}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={PILLARS} component={Pillars}></WelcomeStack.Screen>
	</WelcomeStack.Navigator>
  );
};

const WelcomeNavigator = () => {
  return (
    <WelcomeNav/>    
  );
};

export default WelcomeNavigator;