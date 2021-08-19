
import React from 'react';
import {PREGNANCY, TOOLS,FEED,WEEKS} from '../constants/routeNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Pregnacy from '../screens/dashboard/Pregnancy';
import LinearContainer from '../components/common/LinearContainer';
import { Bold } from '../components/common/Text';
import colors from '../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Weeks from '../screens/dashboard/Weeks';
import {createStackNavigator} from '@react-navigation/stack';


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

const PregnancyNav = () => {
    const PregnancyStack = createStackNavigator();
    return (
  
      <PregnancyStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PREGNANCY}>
      <PregnancyStack.Screen name={PREGNANCY} component={Pregnacy}></PregnancyStack.Screen>
      <PregnancyStack.Screen name={WEEKS} component={Weeks}></PregnancyStack.Screen>
    </PregnancyStack.Navigator>
    );
};

const DashNav = () => {
	const DashTab = createBottomTabNavigator();
	return (

    <DashTab.Navigator 
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
        <DashTab.Screen 
            name={TOOLS} 
            component={Tools}
            options={{
                
                tabBarIcon: () => (
                    <Icon name="build" size={30} color={colors.white} />
                )
            }}
            />
        <DashTab.Screen 
            name={PREGNANCY} 
            component={PregnancyNav}
            options={{
                tabBarIcon: () => (
                    <Icon name="pregnant-woman" size={35} color={colors.white} />
                )
            }}
            />
        <DashTab.Screen 
            name={FEED} 
            component={Feed}
            options={{
                tabBarIcon: () => (
                    <Icon name="lightbulb" size={30} color={colors.white} />
                )
            }}
            />
	</DashTab.Navigator>
  );
};

const DashboardNavigator = () => {
  return (
    <DashNav/>    
  );
};

export default DashboardNavigator;