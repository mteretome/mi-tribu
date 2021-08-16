import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
	LOGIN,
	DEVPAGE,
	FORGOTPASS,
	SIGNUP,
  RECOVER,
  PILLARS,
  NEWPASS,
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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupComponent from '../components/welcome/Signup';

import WhiteContainer from '../components/common/WhiteContainer';
import LinearContainer from '../components/common/LinearContainer';






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
    
   {/* <WelcomeStack.Screen name={DEVPAGE} component={DevelopmentPage}
    options={{ 
      cardStyle: {
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30, }}}></WelcomeStack.Screen>*/}	
	</WelcomeStack.Navigator>
  );
};

const WelcomeNavigator = () => {
  return (
    <WelcomeNav/>    
  );
};

const forFade = ({ current }) => ({
  cardStyle: { 
    opacity: current.progress,
  },
});

const WrapperNavigator= () => {
  return (
    <LinearContainer>
    <Container style={styles.container}>
    {/*pink header*/}
      <View style={styles.pinkBox}> 
      <Image style={styles.logo}
      source={require('../assets/images/logowelcome.png')}/>
      <Container flex={3}>
       <Image 
      style={styles.woman}
      source={require('../assets/images/pink/lady1.png')}/>
      </Container>
   
      </View>
   
    
        <View style={[styles.whiteBox]}>
                  <WelcomeNav/>
        </View> 
     
    </Container>
    </LinearContainer>

  
    
  );
};




const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.tribu_bbpink,
      flexDirection: 'column',
      justifyContent: 'flex-end'
  },
  pinkBox:{
    flex: 3,
    paddingHorizontal:60,
    paddingVertical: 15,
    alignItems: 'center',
  },

  logo: {
     resizeMode: 'center',
     flex:1,
     width: '50%',
  },
  woman: {
    top: 10,
    resizeMode: 'contain',

  },
  whiteBox:{
    flex:5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  
  },
});

export default WelcomeNavigator;