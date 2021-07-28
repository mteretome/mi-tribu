import {
	LOGIN,
	DEVPAGE,
	FORGOTPASS,
	SIGNUP,
	RECOVER,
	PILLARS 
} from '../constants/routeNames';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import React from 'react';
import CustomButton from '../components/common/CustomButton';
import Container from '../components/common/Container';
import { useNavigation } from '@react-navigation/native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const DevPage = () => {
	const navigate= useNavigation();
	return(
      <Container style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Mi Tribu MVP!
          </Text>
          <Text style={styles.text}>
            This is a work in progress. 
          </Text>
          <Text style={styles.text}>
            {instructions}
          </Text>
          <CustomButton 
          title="Go to LogIn" bgColor='pink'
          onPress={() => {
          	//navigate.navigate(LOGIN)
            navigate.navigate('Welcome', { screen: LOGIN })
          }}/>
          <CustomButton 
          title="Go to Forgot" bgColor='pink'
          onPress={() => {
            // navigate.navigate(FORGOTPASS)
            navigate.navigate('Welcome', { screen: FORGOTPASS })

          }}/>
          <CustomButton 
          title="Go to Recover" bgColor='pink'
          onPress={() => {
            navigate.navigate('Welcome', { screen: RECOVER })
          }}/>
          <CustomButton 
          title="Go to SignUpPage" bgColor='pink'
          onPress={() => {
            navigate.navigate('Welcome', { screen: SIGNUP })
          }}/>
          <CustomButton 
          title="Go to Pillar" bgColor='pink'
          onPress={() => {
            navigate.navigate('Pillars', { screen: 'P1' })
          }}/>
          <CustomButton 
          title="Go to Dashboard" bgColor='pink'
          onPress={() => {
            navigate.navigate('Dashboard')
          }}/>
       </Container>
	);
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#359D9E',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 15,
  },
});


export default DevPage;