import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import LinearContainer from '../common/LinearContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  FORGOTPASS,SIGNUP
} from '../../constants/routeNames'; 


const LoginComponent= () => {
  const navigate= useNavigation();
	return (
<WhiteContainer >
		
        <View style={styles.heading}>
    			<Text style={styles.title}>¡Bienvenida de vuelta!</Text>
          <Text style={styles.subtitle}>Inicia sesión para comenzar.</Text>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email*"/>
        <Input placeholder="Contraseña*"
        secureTextEntry={true}
        // error={'Either email or password is incorrect!'}
        />
        <View style={styles.footer}>
          
          <Text style={styles.lightText}>¿Se te olvidó tu contraseña? </Text>
          <Link style={[{color:colors.grey_dark}]} onPress={() => {
            navigate.navigate(FORGOTPASS)
          }}>Recupérala.</Link>
          </View>
        <CustomButton title="Inicia Sesión" gradient={true}/>
      </View>

        <View style={styles.footer}>
         
          <Text style={styles.lightText}>¿No tienes cuenta? </Text>
          <Link onPress={() => {
            navigate.navigate(SIGNUP)
          }}>Crea una nueva cuenta.</Link>
      </View>
	
    </WhiteContainer>
	);
};



export default LoginComponent;

