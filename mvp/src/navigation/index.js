import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import DevPage from '../screens/DevPage';
import WelcomeNavigator from './WelcomeNavigator';
import PillarNavigator from './PillarNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const RootStack = createStackNavigator();


const Dashboard = () => {
  return (
    <View>
      <Text >DASHBOARD</Text>
    </View>
  );
};


const AppNavContainer = () =>{
  return(
  <NavigationContainer>
       <RootStack.Navigator screenOptions={{headerShown: false}} >
          <RootStack.Screen name="DevPage" component={DevPage} />
          <RootStack.Screen name="Pillars" component={PillarNavigator} />
          <RootStack.Screen name="Welcome" component={WelcomeNavigator} />
          <RootStack.Screen name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
