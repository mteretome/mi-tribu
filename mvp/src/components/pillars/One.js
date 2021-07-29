import React from 'react';
import {Text,View,Image} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Tool from '../../assets/images/svg/tool.svg';





const OneComponent= () => {
	return (
      <Container flex={6} style={styles.container}>  
      <View style={styles.textContainer}>
      <Text style={styles.title}>Creada para ti</Text>
      <Text style={styles.subtitle}>
      Experiencia única de aprendizaje a través de contenido y herramientas personalizadas.
      </Text>
      </View>
      <Image style={styles.pillarLady}
      source={require('../../assets/images/purple/lady3.png')}/>
      <Tool style={styles.tool}/>

      </Container>
		
	);
};



export default OneComponent;

