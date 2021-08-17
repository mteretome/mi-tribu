import React from 'react';
import {View} from 'react-native';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Link from '../common/Link';
import {Bold,Light} from '../common/Text';



const RecoverComponent= ({swipe}) => {
	return (
    
			<View>
        <View style={styles.heading}>
    			<Bold style={styles.title}>Recuperar contraseña</Bold>
          <Light style={styles.subsixteen}>Ya te envíamos un código, ingrésalo abajo.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Código de Seguridad"/>
        
        <CustomButton title="Recordar mi contraseña" gradient={true}
       onPress={() => swipe(1) }/>
      </View>

        <View style={[styles.footer,{flexDirection:'row',alignSelf: 'center',}]}>
          <Light style={styles.lightText}>¿Aún no recibes el código? </Light>
          <Link onPress={() => swipe(-1) }>Reenvíalo.</Link>
      </View>
      </View>

	);
};



export default RecoverComponent;

