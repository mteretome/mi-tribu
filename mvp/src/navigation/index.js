import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';

import DevPage from '../screens/DevPage';
import WelcomeNavigator from './WelcomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardNavigator from './DashboardNavigator';
import { ActivityIndicator } from 'react-native';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppNavContainer = () =>{
  const RootStack = createStackNavigator();
  const { authState: {developerMode,isLoggedIn},} = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const weeks = await AsyncStorage.getItem('week_dates');
      if (user&&weeks) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
        console.log("authenticated");
        console.log(user);
        console.log(weeks);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
        console.log("not logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);
  return(
    <>
    {authLoaded ? (
      <>
      {developerMode ? (
        <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="DevPage" component={DevPage} />
          {isAuthenticated ? 
              (<RootStack.Screen name="Dashboard" component={DashboardNavigator} />):
              (<RootStack.Screen name="Welcome" component={WelcomeNavigator} />)  }
              
        </RootStack.Navigator>
      </NavigationContainer> 
      ): (
       
          <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            {isAuthenticated ? 
              (<RootStack.Screen name="Dashboard" component={DashboardNavigator} />):
              (<RootStack.Screen name="Welcome" component={WelcomeNavigator} />)  }
          </RootStack.Navigator>
        </NavigationContainer> 
      
      )}
      </>
       ) : (
        <ActivityIndicator />
        )}
      </>
      
 
  );
};

export default AppNavContainer;
