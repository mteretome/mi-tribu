import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
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
import LoginNavigator from './LoginNavigator';



const AppNavContainer = () =>{
  return(
  <NavigationContainer>{
      <LoginNavigator/>
    }</NavigationContainer>
  );
};

//screens

export default AppNavContainer;
