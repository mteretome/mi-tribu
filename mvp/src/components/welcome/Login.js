import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  FORGOTPASS,
} from '../../constants/routeNames';


const LoginComponent= () => {
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
    {/*--------*/}
      </View>
    {/*log in interface*/}
			<View style={styles.whiteBox}>
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
        <CustomButton title="Inicia Sesión" gradient={true}/>
      </View>

        <View style={styles.footer}>
          <Text style={styles.lightText}>¿Algún problema?</Text>
          <Link onPress={() => {
            navigate.navigate(FORGOTPASS)
          }}>Se me olvidó mi contraseña</Link>
          <Text style={styles.lightText}>o</Text>
          <Link>crear una nueva cuenta.</Link>
      </View>
    {/*------*/}

      </View>
		</Container>
	);
};



export default LoginComponent;

