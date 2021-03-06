import React from 'react';
import {View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import LinearContainer from '../common/LinearContainer';
import styles from './styles';
import Bg from '../../assets/images/svg/pillar1.svg';




const OnboardingWrapper= ({children}) => {
 
	return (
    <LinearContainer>
    <Bg width="100%"  style={{position:'absolute'}}/>
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

