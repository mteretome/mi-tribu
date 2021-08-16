
import React from 'react';
import {PREGNANCY, TOOLS,FEED} from '../constants/routeNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Pregnacy from '../screens/dashboard/Pregnancy';
import LinearContainer from '../components/common/LinearContainer';
import { Bold } from '../components/common/Text';
import colors from '../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tools = () => {
    return (
      <LinearContainer style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Bold>TOOLS</Bold>
      </LinearContainer>
    );
  };
const Feed = () => {
    return (
      <LinearContainer style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Bold>FEED</Bold>
      </LinearContainer>
    );
  };


const DashNav = () => {
	const DashStack = createBottomTabNavigator();
	return (

    <DashStack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName={PREGNANCY}
        tabBarOptions={{
            activeBackgroundColor: colors.pressed_green,
            showLabel: false,
            style: {
                backgroundColor: colors.soft_blue,
                height: '8%',
            }
        }}
    >
        <DashStack.Screen 
            name={TOOLS} 
            component={Tools}
            options={{
                
                tabBarIcon: () => (
                    <Icon name="build" size={30} color={colors.white} />
                )
            }}
            />
        <DashStack.Screen 
            name={PREGNANCY} 
            component={Pregnacy}
            options={{
                tabBarIcon: () => (
                    <Icon name="pregnant-woman" size={35} color={colors.white} />
                )
            }}
            />
        <DashStack.Screen 
            name={FEED} 
            component={Feed}
            options={{
                tabBarIcon: () => (
                    <Icon name="lightbulb" size={30} color={colors.white} />
                )
            }}
            />
	</DashStack.Navigator>
  );
};

const DashboardNavigator = () => {
  return (
    <DashNav/>    
  );
};

export default DashboardNavigator;