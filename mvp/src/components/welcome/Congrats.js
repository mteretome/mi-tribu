import React from 'react';
import {View,} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import WhiteContainer from '../common/WhiteContainer';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { ONBOARD,CONGRATS,SIGNUP } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Blob from '../../assets/images/svg/congrats.svg';
import {Bold,Light,ExtraBold, SemiBold} from '../common/Text';

import { useRoute } from '@react-navigation/native';


const CongratsComponent= () => {
  
  const route = useRoute();
  const navigate= useNavigation();
	return (
    
			<WhiteContainer>
        <View style={styles.heading}>
        <Blob style={{position:'absolute', top:50}}/>
    			<Bold style={{
          color:colors.tribu_pink,
          fontSize: 28,
          marginTop: 30,
          alignSelf:'center'}}>🎉¡Felicitaciones,</Bold>

          <Bold style={{
          color:colors.tribu_pink,
          fontSize: 24,
          marginBottom:5,
          alignSelf:'center'}}>tu cuenta ha sido creada!🎉  </Bold>
  		  </View>

      <View style={{marginTop:30, marginBottom:30, alignItems:'center'}}>
      
        <SemiBold style={styles.congratsSub}>#NAME + ,", estás en tu Semana X + Y días de embarazo.</SemiBold>
       
        <Light  style={styles.congratsSub}>Te quedan W semanas y Z días.</Light>
        
      </View>
      <CustomButton onPress={() => {
            navigate.navigate(ONBOARD)
          }} title="Continuar" gradient={true}/>

      </WhiteContainer>
		
	);
};



export default CongratsComponent;

