import React from 'react';
import {View} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {FORGOTPASS,SIGNUP} from '../../constants/routeNames'; 
import Icon from 'react-native-vector-icons/AntDesign';
import {Bold,Light} from '../common/Text';


const LoginComponent= ({swipe}) => {
  const navigate= useNavigation();
	return (
<View >
		
        <View style={styles.heading}>
    			<Bold style={styles.title}>¡Bienvenida de vuelta!</Bold>
          <Light style={styles.subtitle}>Inicia sesión para comenzar.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email*"/>
        <Input placeholder="Contraseña*"
        secureTextEntry={true}
        // error={'Either email or password is incorrect!'}
        />
        <View style={styles.footer}>
           <Icon name="questioncircleo" size={15} color={colors.grey_dark} style={{marginTop:3}}/>
          <Light style={styles.lightText}>  ¿Se te olvidó tu contraseña? </Light>
          <Link style={[{color:colors.grey_dark}]}  onPress={() => swipe(1) }>
          Recupérala.</Link>
          </View>
        <CustomButton title="Inicia Sesión" onPress={() => {navigate.navigate('Dashboard')}}
        gradient={true}/>
      </View>

        <View style={styles.footer}>
         
          <Light style={styles.lightText}>¿No tienes cuenta? </Light>
          <Link onPress={() => {
            navigate.navigate(SIGNUP)
          }}>Crea una nueva cuenta.</Link>
      </View>
	
    </View>
	);
};



export default LoginComponent;

