import React from 'react';
import {View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {Bold,Regular} from '../common/Text';



const ThreeComponent= () => {
	return (
    
		  <Container flex={6} style={styles.container}>  
      <View style={styles.textContainer}>
      <Bold style={styles.title}>Una guía que te empodera</Bold>
      <Regular style={styles.subtitle}>
      Programa de talleres por profesionales y mamás que recorrieron el mismo camino que tú.
      </Regular>
      </View>
      <Image style={styles.pillar3Lady}
      source={require('../../assets/images/pink/lady2.png')}/>
      </Container>
		
	);
};



export default ThreeComponent;

