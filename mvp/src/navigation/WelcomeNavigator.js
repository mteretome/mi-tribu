import React, { useContext, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	LOGIN,
  PILLARS,
  CONGRATS,
  WELCOME
} from '../constants/routeNames';



import Login from '../screens/welcome/Login';

import Pillars from '../screens/welcome/Pillars';
import Congrats from '../screens/welcome/Congrats';
import Welcome from '../screens/welcome/Welcome';




const WelcomeNav = () => {
	const WelcomeStack = createStackNavigator();
	return (

    <WelcomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PILLARS}>
    <WelcomeStack.Screen name={PILLARS} component={Pillars}></WelcomeStack.Screen>
		<WelcomeStack.Screen name={LOGIN} component={Login}></WelcomeStack.Screen>
		<WelcomeStack.Screen name={CONGRATS} component={Congrats}></WelcomeStack.Screen>
		<WelcomeStack.Screen name={WELCOME} component={Welcome}></WelcomeStack.Screen>


	</WelcomeStack.Navigator>
  );
};

const WelcomeNavigator = () => {


  return (

    <WelcomeNav/>  
    
  );

};

export default WelcomeNavigator;