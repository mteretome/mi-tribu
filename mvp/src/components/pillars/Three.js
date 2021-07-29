import React from 'react';
import {Text,View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';



const ThreeComponent= () => {
	return (
    
		  <Container flex={6} style={styles.container}>  
      <View style={styles.textContainer}>
      <Text style={styles.title}>Una guía que te empodera</Text>
      <Text style={styles.subtitle}>
      Programa de talleres por profesionales y mamás que recorrieron el mismo camino que tú.
      </Text>
      </View>
      <Image style={styles.pillar3Lady}
      source={require('../../assets/images/pink/lady2.png')}/>
      </Container>
		
	);
};



export default ThreeComponent;

