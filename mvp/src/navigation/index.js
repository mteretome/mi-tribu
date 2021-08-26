import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import DevPage from '../screens/DevPage';
import WelcomeNavigator from './WelcomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardNavigator from './DashboardNavigator';

import Social from '../screens/dashboard/Social';

const RootStack = createStackNavigator();


const AppNavContainer = () =>{
  return(
  <NavigationContainer>
       <RootStack.Navigator screenOptions={{headerShown: false}} >
          <RootStack.Screen name="DevPage" component={DevPage} />
          <RootStack.Screen name="Welcome" component={WelcomeNavigator} />
          <RootStack.Screen name="Dashboard" component={DashboardNavigator} />
          <RootStack.Screen name={"SOCIAL"} component={Social}/>

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
