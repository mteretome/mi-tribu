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
import styles from './styles'
import { RECOVER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import LinearContainer from '../common/LinearContainer';


const ForgotComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
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

      </WhiteContainer>
		
	);
};



export default ForgotComponent;

