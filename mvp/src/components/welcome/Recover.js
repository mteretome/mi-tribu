import React from 'react';
import {Text,View,} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Link from '../common/Link';
import { useNavigation } from '@react-navigation/native';
import {FORGOTPASS,NEWPASS} from '../../constants/routeNames';



const RecoverComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.subtitle}>Ya te envíamos un código, ingrésalo abajo.</Text>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Código de Seguridad"/>
        
        <CustomButton title="Recordar mi contraseña" gradient={true}
        onPress={() => {navigate.navigate(NEWPASS)}}/>
      </View>

        <View style={[styles.footer,{flexDirection:'row',alignSelf: 'center',}]}>
          <Text style={styles.lightText}>¿Aún no recibes el código? </Text>
          <Link onPress={() => {
            navigate.navigate(FORGOTPASS)
          }}>Reenvíalo.</Link>
      </View>
      </WhiteContainer>

	);
};



export default RecoverComponent;

