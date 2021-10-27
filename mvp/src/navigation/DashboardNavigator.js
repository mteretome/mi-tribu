
import React, { useContext, useEffect } from 'react';
import {PREGNANCY, TOOLS,FEED,WEEKS, SETTINGS} from '../constants/routeNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pregnacy from '../screens/dashboard/Pregnancy';
import Social from '../screens/dashboard/Social';
import LinearContainer from '../components/common/LinearContainer';
import { Bold } from '../components/common/Text';
import colors from '../assets/theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Weeks from '../screens/dashboard/Weeks';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingNav from './OnboardingNav';
import { GlobalContext } from '../context/Provider';
import { onboardComplete } from '../context/actions/register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PregDashNav from './PregDashNav';



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
      <FeedStack.Navigator screenOptions={{headerShown: false}} initialRouteName={FEED}>
      <FeedStack.Screen name={FEED} component={Social}></FeedStack.Screen>
      <FeedStack.Screen name={SETTINGS} component={Settings}></FeedStack.Screen>
    </FeedStack.Navigator>
    );
};


const PregnancyNav = () => {
    const PregnancyStack = createStackNavigator();
    return (
      <PregnancyStack.Navigator screenOptions={{headerShown: false}} initialRouteName={PREGNANCY}>
      <PregnancyStack.Screen name={PREGNANCY} component={PregDashNav}></PregnancyStack.Screen>
      <PregnancyStack.Screen name={WEEKS} component={Weeks}></PregnancyStack.Screen>
    </PregnancyStack.Navigator>
    );
};

const DashNav = () => {
	const DashTab = createBottomTabNavigator();
  
	return (
    <DashTab.Navigator 
        screenOptions={{headerShown: false,tabBarVisible:false}} 
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
    {onboarding ? <DashNav/>  :
    <OnboardingNav/>}
    </>
  );
};

export default DashboardNavigator;