import React from 'react';
import {View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';



const CongratsWrapper= ({children}) => {
 
  return (
    <LinearGradient
        colors={['#BFD9D9', '#D9CEF8', '#EDC6FF' ]}
        style={[{flex:1}]}
         start={{ x: 0, y: 0 }}
        end={{ x: 1.2, y: 0.5 }}
   >
    <Container style={styles.container}>
      <View style={styles.topBox}> 
      <Image style={styles.logo}
      source={require('../../assets/images/logowelcome.png')}/>
      <Container flex={3}>
       <Image 
      style={styles.congratsLady}
      source={require('../../assets/images/purple/lady2.png')}/>
      </Container>
      </View>
    {children}
    
   
    </Container>
     </LinearGradient>
  );
};



export default CongratsWrapper;

