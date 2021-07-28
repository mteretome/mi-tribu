import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import LinearContainer from '../common/LinearContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  FORGOTPASS,SIGNUP
} from '../../constants/routeNames';



const LoginWrapper= ({children}) => {
  const navigate= useNavigation();
	return (
    <LinearContainer>
		<Container style={styles.container}>
      <View style={styles.pinkBox}> 
      <Image style={styles.logo}
      source={require('../../assets/images/logowelcome.png')}/>
      <Container flex={3}>
       <Image 
      style={styles.woman}
      source={require('../../assets/images/pregnant-login.png')}/>
      </Container>
    {/*--------*/}
      </View>
   
    {children}
   
		</Container>
     </LinearContainer>
	);
};



export default LoginWrapper;

