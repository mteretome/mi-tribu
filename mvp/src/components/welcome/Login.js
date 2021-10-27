import React, { useContext } from 'react';
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
import { clearAuthState } from '../../context/actions/register';
import { GlobalContext } from '../../context/Provider';


const LoginComponent= ({swipe,
  onSubmit,
  onFormChange,
  form,
  errors,
  error,
  loading}) => {
  const navigate= useNavigation();
  const {authDispatch} = useContext(GlobalContext); 
	return (
<View >
		
        <View style={styles.heading}>
    			<Bold style={styles.title}>¡Bienvenida de vuelta!</Bold>
          <Light style={styles.subtitle}>Inicia sesión para comenzar.</Light>
  		  </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email*"
        onChangeText={(value)=>{onFormChange({name:"email",value})}}
        error={errors.email|| error?.error.email?.[0]}/>
        <Input placeholder="Contraseña*"
        secureTextEntry={true}
        onChangeText={(value)=>{onFormChange({name:"password",value})}}
          error={errors.password|| error?.error.password?.[0]}
        />
        <View style={styles.footer}>
           <Icon name="questioncircleo" size={15} color={colors.grey_dark} style={{marginTop:3}}/>
          <Light style={styles.lightText}>  ¿Se te olvidó tu contraseña? </Light>
          <Link style={[{color:colors.grey_dark}]}  onPress={() => swipe(1) }>
          Recupérala.</Link>
          </View>
        
        {error?.status_code<404 &&<Light style={{color:colors.tribu_pink,fontSize:12}}>*Error interno: por favor intenta de nuevo.*</Light>} 
      {error?.status_code>404 &&<Light style={{color:colors.tribu_pink,fontSize:12}}>*Error interno: por favor intenta de nuevo.*</Light>} 
        <CustomButton 
        loading={loading}
        onPress={() => {
            onSubmit();
          }}
        title="Inicia Sesión" gradient={true}/>
      </View>

        <View style={styles.footer}>
         
          <Light style={styles.lightText}>¿No tienes cuenta? </Light>
          <Link onPress={() => {
            clearAuthState()(authDispatch);
            navigate.navigate(SIGNUP);
          }}>Crea una nueva cuenta.</Link>
      </View>
	
    </View>
	);
};



export default LoginComponent;

