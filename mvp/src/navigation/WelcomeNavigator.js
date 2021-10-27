import React, { useContext, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingNav from './OnboardingNav';
import { GlobalContext } from '../context/Provider';


const WelcomeNav = () => {
	const WelcomeStack = createStackNavigator();
	return (

    <WelcomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PILLARS}>
    <WelcomeStack.Screen name={PILLARS} component={Pillars}></WelcomeStack.Screen>
    <WelcomeStack.Screen name={SIGNUP} component={Signup}></WelcomeStack.Screen>
		<WelcomeStack.Screen name={LOGIN} component={Login}></WelcomeStack.Screen>
	</WelcomeStack.Navigator>
  );
};

const WelcomeNavigator = () => {
  const { authDispatch,authState: {onboarding}} = useContext(GlobalContext);
  const [onboard, setOnboard] = React.useState(onboarding);
 

  const getOnboarding = async () => {
    try {
      const onboarded = await AsyncStorage.getItem('onboarding');
      if(onboarded){
        setOnboard(true);
        onboardComplete()(authDispatch);

      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOnboarding();
  }, []);

  return (
    <>
    {onboarding ? <WelcomeNav/>  :
    <OnboardingNav/>}
    </>
  );

};

export default WelcomeNavigator;