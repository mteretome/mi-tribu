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



const SignupComponent= () => {
  const navigate= useNavigation();
	return (
		<Container style={styles.container}>
		{/*pink header*/}
      <View style={styles.pinkBox}> 
      <Image style={styles.logo}
      source={require('../../assets/images/logowelcome.png')}/>
      <Container flex={3}>
       <Image 
      style={styles.woman}
      source={require('../../assets/images/pregnant-login.png')}/>
      </Container>
    {/*------------------------------*/}
      </View>
    {/*log in interface*/}
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>Aprende. Conecta. Reutiliza.</Text>
          <Text style={styles.subtitle}>¡Bienvenida a tu tribu!</Text>
  		  </View>

      <View >
        <View style={[{flexDirection:'row', flex:1, alignItems: 'stretch'}]}>
          <Input placeholder="Nombre*"/>
          <Input style={[{paddingEnd:'35%', marginLeft:10,}]} placeholder="Apellido*"/>
        </View>
        <Input  placeholder="Email*"/>
        <Input  placeholder="Celular*"/>
        <Input  placeholder="Crea tu contraseña*" secureTextEntry={true}/>
        <Input  placeholder="Fecha de Parto Estimada*"/>
        <View style={[{flexDirection:'row',alignSelf: 'center',}]}>
          <Text style={styles.lightText}>¿No conoces tu fecha de parto? </Text>
          <Link>Calcúlala</Link>
        </View>
        <CustomButton title="Crear mi cuenta" gradient={true}/>
      </View>

        <View style={[styles.footer,{flexDirection:'row',alignSelf: 'center',}]}>
          <Text style={styles.lightText}>¿Ya tienes cuenta? </Text>
          <Link onPress={() => {
            navigate.navigate(LOGIN)
          }}>Inicia Sesión</Link>
        </View>
     </WhiteContainer>
    {/*---------------------------*/}
		</Container>
	);
};



export default SignupComponent;

