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
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Link from '../common/Link';
import { useNavigation } from '@react-navigation/native';
import {
  FORGOTPASS,
} from '../../constants/routeNames';



const RecoverComponent= () => {
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
			<WhiteContainer>
        <View style={styles.heading}>
    			<Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.subtitle}>Ya te envíamos un código, ingrésalo abajo.</Text>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Código de Seguridad"/>
        
        <CustomButton title="Recordar mi contraseña" gradient={true}/>
      </View>

        <View style={[styles.footer,{flexDirection:'row',alignSelf: 'center',}]}>
          <Text style={styles.lightText}>¿Aún no recibes el código? </Text>
          <Link onPress={() => {
            navigate.navigate(FORGOTPASS)
          }}>Reenvíalo.</Link>
      </View>
    {/*------*/}

      </WhiteContainer>
		</Container>
	);
};



export default RecoverComponent;

