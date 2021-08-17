import React from 'react';
import {View} from 'react-native';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import {Bold,Light} from '../common/Text';


const NewComponent= ({swipe}) => {
	return (
    
			<View>
        
        <View style={styles.heading}>
    			<Bold style={styles.title}>Nueva contraseña</Bold>
          <Light style={styles.subtitle}>Por favor ingresa tu nueva contraseña</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Nueva contraseña"
        secureTextEntry={true}/>
        <Input placeholder="Repite tu nueva contraseña"
        secureTextEntry={true}/>
        
        <CustomButton onPress={() => swipe(1) }
         title="Guardar y Continuar" gradient={true}/>
      </View>

      </View>
		
	);
};



export default NewComponent;