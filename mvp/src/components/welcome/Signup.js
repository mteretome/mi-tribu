import React, { useState } from 'react';
import {Overlay } from 'react-native-elements';
import {Text,View,Modal} from 'react-native';
import colors from '../../assets/theme/colors';
import WhiteContainer from '../common/WhiteContainer';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import Link from '../common/Link';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {LOGIN,CONGRATS} from '../../constants/routeNames';
import DuedateComponent from './Duedate';
import Icon from 'react-native-vector-icons/AntDesign';



const SignupComponent= () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {setVisible(!visible);};
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
        <Icon name="infocirlceo" size={15} color={colors.grey_dark} style={{marginTop:3}}/>
          <Text style={styles.lightText}>  ¿No conoces tu fecha de parto? </Text>
          
          <Link  onPress={toggleOverlay} >Calcúlala</Link>
            <Overlay  
              overlayStyle={styles.overlay} 
              animationType="fade" 
              isVisible={visible} 
              backdropStyle={styles.backdrop}>
             <DuedateComponent toggleOverlay={toggleOverlay}/>
            </Overlay>
        </View>
        <CustomButton title="Crear mi cuenta" 
        onPress={() => {
            navigate.navigate(CONGRATS)
          }} gradient={true}/>
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

