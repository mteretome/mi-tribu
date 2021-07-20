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
import styles from './styles'
import { RECOVER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';


const ForgotComponent= () => {
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
    			<Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.subtitle}>Te enviaremos un código a tu celular o email.</Text>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>
        <Text style={styles.lightText}>o</Text>
        <Input placeholder="Celular"
        secureTextEntry={true}
        // error={'Either email or password is incorrect!'}
        />
        
        <CustomButton onPress={() => {
            navigate.navigate(RECOVER)
          }} title="Enviar código" gradient={true}/>
      </View>
    {/*------*/}

      </View>
		</Container>
	);
};



export default ForgotComponent;

