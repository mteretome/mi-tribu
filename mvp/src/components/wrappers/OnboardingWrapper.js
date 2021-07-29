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



const OnboardingWrapper= ({children}) => {
 
	return (
    <LinearContainer>
		<Container style={styles.container}>
      <View style={styles.topBox}> 
      <Image style={styles.logo}
      source={require('../../assets/images/logowelcome.png')}/>
      <Container flex={3}>
       <Image 
      style={styles.onboardLady}
      source={require('../../assets/images/purple/lady1.png')}/>
      </Container>
      </View>
   
    {children}
   
		</Container>
    </LinearContainer>
	);
};



export default OnboardingWrapper;

