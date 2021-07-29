import React from 'react';
import {Text,View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';



const TwoComponent= () => {
	return (
    
	   <Container flex={6} style={styles.container}>  
      <View style={styles.textContainer}>
      <Text style={styles.title}>Presentes en tu Camino</Text>
      <Text style={styles.subtitle}>
      Círculo de 3-9 mamás en la misma situación que tú acompañadas por una experta.
      </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.pillar2LadyA}
      source={require('../../assets/images/purple/lady2.png')}/>
      <Image style={styles.pillar2LadyB}
      source={require('../../assets/images/purple/lady1.png')}/>
      </View>
      </Container>
	);
};



export default TwoComponent;

