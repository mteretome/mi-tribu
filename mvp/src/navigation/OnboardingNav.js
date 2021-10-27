import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ONBOARD,
  CONGRATS,
  WELCOME
} from '../constants/routeNames';



import Onboard from '../screens/welcome/Onboard';
import Congrats from '../screens/welcome/Congrats';
import Welcome from '../screens/welcome/Welcome';


const OnboardingNav = () => {
	const OnboardStack = createStackNavigator();
	return (

    <OnboardStack.Navigator screenOptions={{headerShown: false}} initialRouteName={ONBOARD}>
    <OnboardStack.Screen name={ONBOARD} component={Onboard}></OnboardStack.Screen>
    <OnboardStack.Screen name={CONGRATS} component={Congrats}></OnboardStack.Screen>
    <OnboardStack.Screen name={WELCOME} component={Welcome}></OnboardStack.Screen>
	</OnboardStack.Navigator>
  );
};


export default OnboardingNav;