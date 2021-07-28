import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import LinearContainer from '../common/LinearContainer';




const SignupComponent= () => {
  const navigate= useNavigation();
	return (
   
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>Aprende. Conecta. Reutiliza.</Text>
          <Text style={styles.subtitle}>¡Bienvenida a tu tribu!</Text>
  		  </View>

      <View >
        <View style={[{flexDirection:'row', flex:1, alignItems: 'stretch'}]}>
          <Input placeholder="Nombre*"/>
          <Input style={[{paddingEnd:'40%', marginLeft:10,}]} placeholder="Apellido*"/>
        </View>
        <Input  placeholder="Email*"/>
        <Input  placeholder="Celular*"/>
        <Input  placeholder="Crea tu contraseña*" secureTextEntry={true}/>
        <Input  placeholder="Fecha de Parto Estimada*"/>
        <View style={styles.footer}>
        
          <Text style={styles.lightText}>¿No conoces tu fecha de parto? </Text>
          <Link>Calcúlala</Link>
        </View>
        <CustomButton title="Crear mi cuenta" gradient={true}/>
      </View>

        <View style={styles.footer}>
          <Text style={styles.lightText}>¿Ya tienes cuenta? </Text>
          <Link onPress={() => {
            navigate.navigate(LOGIN)
          }}>Inicia Sesión</Link>
        </View>
     </WhiteContainer>
   
	);
};



export default SignupComponent;

