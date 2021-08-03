import React from 'react';
import {View} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { RECOVER } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import {Bold,Light} from '../common/Text';


const ForgotComponent= () => {
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
    			<Bold style={styles.title}>Recuperar contraseña</Bold>
          <Light style={styles.subtitle}>Te enviaremos un código a tu celular o email.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>
        <Light style={styles.subtitle}>o</Light>
        <Input placeholder="Celular"
        secureTextEntry={true}
        // error={'Either email or password is incorrect!'}
        />
        
        <CustomButton onPress={() => {
            navigate.navigate(RECOVER)
          }} title="Enviar código" gradient={true}/>
      </View>

      </WhiteContainer>
		
	);
};



export default ForgotComponent;

