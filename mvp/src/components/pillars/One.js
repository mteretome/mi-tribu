import React from 'react';
import {View,Image} from 'react-native';
import Container from '../common/Container';
import styles from './styles';
import Tool from '../../assets/images/svg/tool.svg';
import {Bold,Regular} from '../common/Text';





const OneComponent= () => {
	return (
      <Container flex={6} style={styles.container}>  
      <View style={styles.textContainer}>
      <Bold style={styles.title}>Creada para ti</Bold>
      <Regular style={styles.subtitle}>
      Experiencia única de aprendizaje a través de contenido y herramientas personalizadas.
      </Regular>
      </View>
      <Image style={styles.pillarLady}
      source={require('../../assets/images/purple/lady3.png')}/>
      <Tool style={styles.tool}/>

      </Container>
		
	);
};



export default OneComponent;

