
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigation';

import { NativeBaseProvider, Box,extendTheme } from 'native-base';
import colors from './src/assets/theme/colors';
import GlobalProvider from './src/context/Provider';



 
const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      600: colors.tribu_pink,
      200: colors.tribu_bbpink,
    },
  } 
}); 


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <NativeBaseProvider theme={theme}>
        <GlobalProvider>
            <AppNavContainer/>
        </GlobalProvider>
        </NativeBaseProvider>

    

    );
  }
}
