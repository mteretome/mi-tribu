import React from 'react';
import {
	LOGIN,
	DEVPAGE,
	SIGNUP,
  PILLARS
} from '../constants/routeNames';
import {
  View,
  Text,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PillarOne from '../screens/pillars/PillarOne';


function PillarNavigator() {
  const PillarsTab = createStackNavigator();
  //createBottomTabNavigator()createStackNavigator();
  return (
    <PillarsTab.Navigator screenOptions={{headerShown: false}} initialRouteName={LOGIN}>
      <PillarsTab.Screen name="P1" component={PillarOne} />
    </PillarsTab.Navigator>
  );
};




export default PillarNavigator;