
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigation';



export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
        <AppNavContainer></AppNavContainer>
      
       
    );
  }
}
