import React from 'react';
import {View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import LinearContainer from '../common/LinearContainer';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Bg from '../../assets/images/svg/signup.svg';




const SignupWrapper= ({children}) => {
 
	return (
    <LinearContainer >
    <Bg width="100%" style={{position:'absolute'}}/>
		<Container style={styles.container}>
      <View style={styles.topBox}> 
      <Image style={styles.logo}
      source={require('../../assets/images/logowelcome.png')}/>
      <Container flex={3}>
      <Image 
      style={styles.signupLady}
      source={require('../../assets/images/pink/lady3.png')}/>
      </Container>
      </View>
      {children}
		  </Container>
     </LinearContainer>
	);
};



export default SignupWrapper;

