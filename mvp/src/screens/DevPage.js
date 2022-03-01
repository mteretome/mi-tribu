import {
	LOGIN,
	SIGNUP,
	PILLARS,
  WELCOME

} from '../constants/routeNames';
import {
  DevSettings,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import CustomButton from '../components/common/CustomButton';
import Container from '../components/common/Container';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/Provider';
import { clearMode } from '../context/actions/welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const clearAsyncStorage = async() => {
  AsyncStorage.clear();
  console.log("async storage clear, app will reload");
  DevSettings.reload();
  
}




const DevPage = () => {
	const navigate= useNavigation();
  const { authDispatch, authState: {isLoggedIn},} = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const weeks = await AsyncStorage.getItem('week_dates');
      if (user&&weeks) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
        // console.log("authenticated");
        // console.log(user);
        // console.log(weeks);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
        // console.log("not logged in");
      }
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);


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
          {isAuthenticated ? (
             <CustomButton 
             title="Go to Dashboard" bgColor='pink'
             onPress={() => {
               navigate.navigate('Dashboard')
             }}/> 
         
        ):  (
          <CustomButton 
          title="Go to LogIn" bgColor='pink'
          onPress={() => {
            navigate.navigate('Welcome')
          }}/>
       
        )}

         
          <CustomButton 
          title="Developer Mode OFF" bgColor='pink'
          onPress={() => {
            clearMode()(authDispatch);
          }}/>
           <CustomButton 
          title="clear storage" bgColor='pink'
          onPress={() => {
            clearAsyncStorage();
            
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