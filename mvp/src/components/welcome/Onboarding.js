import React from 'react';
import {Text,View,} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { WELCOME} from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';


const OnboardingComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>¡Bienvenida a bordo!</Text>
          <Text style={styles.subtitle}>
          Contesta estas preguntas para conocerte mejor y personalizar tu viaje.
          </Text>
  		  </View>

      <View style={styles.inputContainer}>
        <CustomButton title="Siguiente Pregunta" gradient={true}
        onPress={() => {
            navigate.navigate(WELCOME)
          }}/>
      </View>
      </WhiteContainer>
		
	);
};



export default OnboardingComponent;

