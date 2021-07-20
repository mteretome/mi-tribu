import React from 'react';
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
import {createStackNavigator} from '@react-navigation/stack';
import {
	LOGIN,
	DEVPAGE,
	FORGOTPASS,
	SIGNUP,
  RECOVER
} from '../constants/routeNames';
import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/common/CustomButton';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import Recover from '../screens/Recover';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const DevelopmentPage = () => {
	const navigate= useNavigation();
	return(
		<View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#4F6D7A"
          />
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
          	navigate.navigate(LOGIN)
          }}/>
          <CustomButton 
          title="Go to Forgot" bgColor='pink'
          onPress={() => {
            navigate.navigate(FORGOTPASS)
          }}/>
          <CustomButton 
          title="Go to Recover" bgColor='pink'
          onPress={() => {
            navigate.navigate(RECOVER)
          }}/>
        </View>
	);
};


const SignUpPage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is the sign up/onboarding page. </Text>
		</View>
	);
};



const LoginNavigator = () => {
	const LoginStack = createStackNavigator();
	return <LoginStack.Navigator screenOptions={{headerShown: false}} initialRouteName={DEVPAGE}>
		<LoginStack.Screen name={LOGIN} component={Login}></LoginStack.Screen>
		<LoginStack.Screen name={FORGOTPASS} component={Forgot}></LoginStack.Screen>
		<LoginStack.Screen name={RECOVER} component={Recover}></LoginStack.Screen>
    <LoginStack.Screen name={SIGNUP} component={SignUpPage}></LoginStack.Screen>
		<LoginStack.Screen name={DEVPAGE} component={DevelopmentPage}></LoginStack.Screen>
	</LoginStack.Navigator>;
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

export default LoginNavigator;