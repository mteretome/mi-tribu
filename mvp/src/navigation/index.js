import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DevPage from '../screens/DevPage';
import WelcomeNavigator from './WelcomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearContainer from '../components/common/LinearContainer';

const RootStack = createStackNavigator();


const Dashboard = () => {
  return (
    <LinearContainer style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>DASHBOARD</Text>
    </LinearContainer>
  );
};


const AppNavContainer = () =>{
  return(
  <NavigationContainer>
       <RootStack.Navigator screenOptions={{headerShown: false}} >
          <RootStack.Screen name="DevPage" component={DevPage} />
          <RootStack.Screen name="Welcome" component={WelcomeNavigator} />
          <RootStack.Screen name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
