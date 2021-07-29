import React from 'react';
import {Text,View,} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';



const NewComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>Nueva contraseña</Text>
          <Text style={styles.subtitle}>Por favor ingresa tu nueva contraseña</Text>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Nueva contraseña"
        secureTextEntry={true}/>
        <Input placeholder="Repite tu nueva contraseña"
        secureTextEntry={true}/>
        
        <CustomButton onPress={() => {
            navigate.navigate(LOGIN)
          }} title="Guardar y Continuar" gradient={true}/>
      </View>

      </WhiteContainer>
		
	);
};



export default NewComponent;