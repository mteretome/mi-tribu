
import React from 'react';
import {PREGNANCYS,PREGNANCYC,PREGNANCY, TOOLS,FEED, FEEDC, FEEDS,WEEKS, SETTINGS} from '../constants/routeNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearContainer from '../components/common/LinearContainer';
import { Bold } from '../components/common/Text';
import colors from '../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Weeks from '../screens/dashboard/Weeks';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../context/Provider';
// import PregDashNav from './PregDashNav';
import CurrentSocial from '../screens/dashboard/CurrentSocial';
import SpecificSocial from '../screens/dashboard/SpecificSocial';
import PregnancyComponent from '../components/dashboard/Pregnancy';
import CurrentPregnancy from '../screens/dashboard/CurrentPreg';
import SpecificPregnancy from '../screens/dashboard/SpecificPreg';



const Tools = () => {
    return (
      <LinearContainer style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Bold>TOOLS</Bold>
      </LinearContainer>
    );
  };
  const Settings = () => {
    return (
      <LinearContainer style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Bold>SETTINGS</Bold>
      </LinearContainer>
    );
  };


const FeedNav = () => {
    const FeedStack = createStackNavigator();
    return (
      <FeedStack.Navigator screenOptions={{headerShown: false}} initialRouteName={FEEDC}>
      <FeedStack.Screen name={FEEDC} component={CurrentSocial}></FeedStack.Screen>
      <FeedStack.Screen name={FEEDS} component={SpecificSocial}></FeedStack.Screen>
      <FeedStack.Screen name={SETTINGS} component={Settings}></FeedStack.Screen>
    </FeedStack.Navigator>
    );
};


const PregnancyNav = () => {
    const PregnancyStack = createStackNavigator();
    return (
      <PregnancyStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PREGNANCY}>
      <PregnancyStack.Screen name={PREGNANCYC} component={CurrentPregnancy}></PregnancyStack.Screen>
      <PregnancyStack.Screen name={PREGNANCYS} component={SpecificPregnancy}></PregnancyStack.Screen>

      <PregnancyStack.Screen name={WEEKS} component={Weeks}></PregnancyStack.Screen>
    </PregnancyStack.Navigator>
    );
};

const DashNav = () => {
	const DashTab = createBottomTabNavigator();
  
	return (
    <DashTab.Navigator 
        // screenOptions={{headerShown: false,tabBarVisible:false}} 
         screenOptions={{headerShown: false,tabBarVisible:true}} 

        // initialRouteName={PREGNANCY}
        tabBarOptions={{
            activeBackgroundColor: colors.pressed_green,
            showLabel: false,
            style: {
                backgroundColor: colors.soft_blue,
                height: '8%',
            }
            
        }}
    >
        {/* <DashTab.Screen 
            name={TOOLS} 
            component={Tools}
            options={{
                
                tabBarIcon: () => (
                    <Icon name="build" size={30} color={colors.white} />
                )
            }}
            /> */}
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
            component={FeedNav}
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